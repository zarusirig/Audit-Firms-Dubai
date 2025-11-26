#!/bin/bash

# Audit Firms Dubai - VPS Deployment Script
# This script sets up the application on a VPS with Docker

set -e

echo "🚀 Starting Audit Firms Dubai VPS Deployment"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="audit-firms-dubai"
DOMAIN=${DOMAIN:-"yourdomain.com"}
EMAIL=${EMAIL:-"admin@yourdomain.com"}

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root. Please run as a regular user with sudo access."
   exit 1
fi

# Update system
print_status "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install required packages
print_status "Installing required packages..."
sudo apt install -y curl wget git htop ufw fail2ban

# Install Docker
print_status "Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    print_success "Docker installed successfully"
else
    print_warning "Docker already installed"
fi

# Install Docker Compose
print_status "Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    print_success "Docker Compose installed successfully"
else
    print_warning "Docker Compose already installed"
fi

# Install Nginx
print_status "Installing Nginx..."
sudo apt install -y nginx

# Install Certbot for SSL
print_status "Installing Certbot for SSL certificates..."
sudo apt install -y certbot python3-certbot-nginx

# Configure firewall
print_status "Configuring firewall..."
sudo ufw --force enable
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force reload

# Create application directory
print_status "Creating application directory..."
sudo mkdir -p /var/www/$APP_NAME
sudo chown -R $USER:$USER /var/www/$APP_NAME

# Copy application files (assuming this script is run from the project directory)
print_status "Copying application files..."
cp -r . /var/www/$APP_NAME/
cd /var/www/$APP_NAME

# Create environment file
print_status "Setting up environment configuration..."
if [ ! -f .env.local ]; then
    cat > .env.local << EOF
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://$DOMAIN

# Email Configuration (Update with your credentials)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Resend API (for transactional emails)
RESEND_API_KEY=your-resend-api-key

# AI Services
FAL_KEY=your-fal-ai-key
GEMINI_API_KEY=your-gemini-api-key

# Production settings
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
EOF
    print_warning "Created .env.local template. Please update with your actual credentials!"
else
    print_warning ".env.local already exists"
fi

# Build and start the application
print_status "Building and starting the application..."
docker-compose down 2>/dev/null || true
docker-compose build --no-cache
docker-compose up -d

# Wait for application to start
print_status "Waiting for application to start..."
sleep 30

# Check if application is running
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    print_success "Application is running on port 3000"
else
    print_error "Application failed to start. Check logs with: docker-compose logs"
    exit 1
fi

# Configure Nginx
print_status "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/$APP_NAME > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Set up SSL certificate
print_status "Setting up SSL certificate..."
if [ "$DOMAIN" != "yourdomain.com" ]; then
    sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive
    print_success "SSL certificate configured"
else
    print_warning "SSL setup skipped. Update DOMAIN and EMAIL variables and run: sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com"
fi

# Set up log rotation
print_status "Setting up log rotation..."
sudo tee /etc/logrotate.d/$APP_NAME > /dev/null <<EOF
/var/www/$APP_NAME/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 $USER $USER
    postrotate
        docker-compose restart app
    endscript
}
EOF

# Create monitoring script
print_status "Creating monitoring script..."
sudo tee /usr/local/bin/monitor-$APP_NAME > /dev/null <<EOF
#!/bin/bash
# Health check script for $APP_NAME

APP_STATUS=\$(docker-compose ps | grep "Up" | wc -l)
if [ \$APP_STATUS -eq 0 ]; then
    echo "Application is down! Restarting..."
    cd /var/www/$APP_NAME
    docker-compose restart
    # Send alert (configure as needed)
    # curl -X POST -H 'Content-type: application/json' --data '{"text":"'$APP_NAME' restarted on server"}' YOUR_SLACK_WEBHOOK_URL
fi
EOF
sudo chmod +x /usr/local/bin/monitor-$APP_NAME

# Set up cron job for monitoring
print_status "Setting up monitoring cron job..."
(crontab -l ; echo "*/5 * * * * /usr/local/bin/monitor-$APP_NAME") | crontab -

# Create backup script
print_status "Creating backup script..."
sudo tee /usr/local/bin/backup-$APP_NAME > /dev/null <<EOF
#!/bin/bash
# Backup script for $APP_NAME

BACKUP_DIR="/var/backups/$APP_NAME"
DATE=\$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="\$APP_NAME-\$DATE"

mkdir -p \$BACKUP_DIR

# Backup application files
tar -czf \$BACKUP_DIR/\$BACKUP_NAME-files.tar.gz -C /var/www $APP_NAME

# Backup database if using one (add your database backup commands here)
# Example for PostgreSQL:
# docker exec postgres pg_dump -U username database > \$BACKUP_DIR/\$BACKUP_NAME-db.sql

# Clean up old backups (keep last 7 days)
find \$BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: \$BACKUP_NAME"
EOF
sudo chmod +x /usr/local/bin/backup-$APP_NAME

# Set up daily backup
(crontab -l ; echo "0 2 * * * /usr/local/bin/backup-$APP_NAME") | crontab -

print_success "Deployment completed successfully!"
echo ""
echo "🎉 Next steps:"
echo "1. Update /var/www/$APP_NAME/.env.local with your actual credentials"
echo "2. Update DOMAIN and EMAIL variables in this script if needed"
echo "3. Run SSL setup: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo "4. Point your domain DNS to this server's IP address"
echo "5. Test the application: curl https://$DOMAIN"
echo ""
echo "📊 Useful commands:"
echo "- View logs: docker-compose logs -f"
echo "- Restart app: docker-compose restart"
echo "- Update app: git pull && docker-compose build && docker-compose up -d"
echo "- Monitor: /usr/local/bin/monitor-$APP_NAME"
echo ""
echo "🔒 Security notes:"
echo "- SSH key authentication is recommended"
echo "- Keep system updated: sudo apt update && sudo apt upgrade"
echo "- Monitor logs regularly"
echo ""
print_success "Deployment script completed!"
