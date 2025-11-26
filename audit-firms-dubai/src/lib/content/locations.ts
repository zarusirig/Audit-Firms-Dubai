// Location page content data structure

export interface LocationDetails {
  name: string
  address: string
  phone: string
  email: string
  hours: string
  coordinates: {
    lat: number
    lng: number
  }
  mapUrl: string
}

export interface LocationPageContent {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]

  // Hero Section
  heroHeadline: string
  heroSubheadline: string
  heroDescription: string
  heroImage?: string

  // Location Details
  location: LocationDetails

  // About This Location
  aboutTitle: string
  aboutContent: string[]

  // Why This Location
  whyThisLocation: {
    title: string
    description: string
  }[]

  // Nearby Landmarks
  nearbyLandmarks: string[]

  // Directions & Parking
  directions: {
    byMetro: string
    byCar: string
    parking: string
  }

  // Services at This Location
  servicesOffered: string[]

  // Client Focus
  clientFocus: string[]
}

export const LOCATIONS: Record<string, LocationPageContent> = {
  'dubai': {
    slug: 'dubai',
    title: 'Dubai Head Office - Deira',
    metaTitle: 'Audit Firm in Dubai - Head Office Deira | Farahat & Co',
    metaDescription: 'Head Office of Farahat & Co in Dubai. Located at Rigga Road, Deira. Comprehensive audit, tax, and advisory services. Call +971 4 250 0251',
    keywords: [
      'audit firm dubai head office',
      'auditors in deira',
      'rigga road auditors',
      'farahat co head office',
      'dubai audit firm main office',
      'tax consultants deira',
    ],

    heroHeadline: 'Dubai Head Office',
    heroSubheadline: 'Rigga Road, Deira',
    heroDescription: 'Our main headquarters located in the heart of Deira at Rigga Road. Serving businesses across Dubai with certified audit, tax, and advisory services since 1985.',
    heroImage: '/images/locations/downtown-dubai-hero.jpg',

    location: {
      name: 'Farahat & Co - Dubai Head Office',
      address: 'IBIS Hotel Building Office Entrance 5th Floor, Office No.: 5001, Rigga Road Dubai, P.O. Box 4647, U.A.E',
      phone: '+971 4 250 0251',
      email: 'info@auditfirmsdubai.ae',
      hours: 'Monday - Friday: 9:00 AM - 7:00 PM',
      coordinates: { lat: 25.2643, lng: 55.3153 },
      mapUrl: 'https://maps.google.com/?q=25.2643,55.3153',
    },

    aboutTitle: 'About Our Dubai Head Office',
    aboutContent: [
      'Our Head Office on Rigga Road in Deira serves as the central hub for Farahat & Co operations. From this strategic location, we oversee our network of branches and provide high-level advisory and audit services to key clients.',
      'Located in one of Dubai\'s most established commercial districts, our Deira office is easily accessible and houses our senior partners and core audit teams.',
      'We offer a full range of services including external audit, internal audit, VAT consultancy, and liquidation services, supported by a multilingual team of experts.',
    ],

    whyThisLocation: [
      {
        title: 'Central Hub',
        description: 'The heart of our operations, housing senior leadership and specialized departments.',
      },
      {
        title: 'Long-Standing Presence',
        description: 'Established in Deira since 1985, deeply rooted in Dubai\'s business history.',
      },
      {
        title: 'Comprehensive Services',
        description: 'Access to our full range of audit, tax, and advisory specialists under one roof.',
      },
      {
        title: 'Easy Access',
        description: 'Centrally located on Rigga Road with excellent public transport and metro connectivity.',
      },
    ],

    nearbyLandmarks: [
      'Al Rigga Metro Station - 5 min walk',
      'Al Ghurair Centre - 10 min walk',
      'City Centre Deira - 5 min drive',
      'Dubai Creek - 10 min drive',
      'Dubai International Airport - 15 min drive',
    ],

    directions: {
      byMetro: 'Take the Red Line to Al Rigga Metro Station. Our office is a short walk from the station, located in the IBIS Hotel Building.',
      byCar: 'From Sheikh Zayed Road, take the Garhoud Bridge towards Deira. Follow signs for Al Rigga Road. The IBIS Hotel Building is prominent on the main road.',
      parking: 'Public parking is available along Al Rigga Road. Paid parking zones are active. Some buildings may offer visitor parking.',
    },

    servicesOffered: [
      'External Audit & Assurance',
      'Internal Audit',
      'VAT & Tax Consultancy',
      'Liquidation Services',
      'Business Setup & Registration',
      'Feasibility Studies',
      'Accounting & Bookkeeping',
      'Forensic Accounting',
    ],

    clientFocus: [
      'Trading & Contracting Companies',
      'Retail & Wholesale Businesses',
      'Manufacturing Units',
      'Service Providers',
      'Family Businesses',
      'International Branches',
    ],
  },

  'sharjah': {
    slug: 'sharjah',
    title: 'Sharjah Office',
    metaTitle: 'Audit Firm in Sharjah - Certified Auditors | Farahat & Co',
    metaDescription: 'Leading audit firm in Sharjah. Located at Clock Tower. providing audit, tax, and accounting services to Sharjah businesses. Call +971 6 5637720',
    keywords: [
      'audit firm sharjah',
      'auditors in sharjah',
      'accounting firm sharjah',
      'sharjah tax consultants',
      'clock tower sharjah auditors',
      'external audit sharjah',
    ],

    heroHeadline: 'Audit Firm in Sharjah',
    heroSubheadline: 'Serving Sharjah & Northern Emirates',
    heroDescription: 'Professional audit and accounting services for businesses in Sharjah. Conveniently located near the iconic Clock Tower, we serve companies across industrial, trading, and service sectors.',
    heroImage: '/images/locations/sharjah-hero.jpg',

    location: {
      name: 'Farahat & Co - Sharjah Office',
      address: 'Clock Tower, Sharjah, P.O. Box 3035, U.A.E',
      phone: '+971 6 5637720',
      email: 'info@auditfirmsdubai.ae',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      coordinates: { lat: 25.3571, lng: 55.3910 },
      mapUrl: 'https://maps.google.com/?q=25.3571,55.3910',
    },

    aboutTitle: 'About Our Sharjah Office',
    aboutContent: [
      'Our Sharjah office is strategically positioned to serve the growing business community in Sharjah and the Northern Emirates. Located near the Clock Tower, we provide accessible professional services.',
      'Sharjah represents a vital industrial and cultural hub in the UAE. Our team understands the specific local regulations and business environment, offering tailored support to industrial zones, free zones (like SAIF Zone, Hamriyah), and mainland companies.',
      'We bring the same high standards of quality and compliance to our Sharjah clients, ensuring their financial statements meet all regulatory requirements.',
    ],

    whyThisLocation: [
      {
        title: 'Local Expertise',
        description: 'Deep understanding of Sharjah Economic Development Department (SEDD) regulations.',
      },
      {
        title: 'Industrial Focus',
        description: 'Specialized experience with Sharjah\'s robust industrial and manufacturing sectors.',
      },
      {
        title: 'Free Zone Knowledge',
        description: 'Expertise in SAIF Zone and Hamriyah Free Zone audits and compliance.',
      },
      {
        title: 'Northern Emirates Reach',
        description: 'Serving clients in Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah from this hub.',
      },
    ],

    nearbyLandmarks: [
      'Sharjah Clock Tower - Adjacent',
      'Sharjah Rolla Square - 5 min drive',
      'Sharjah Corniche - 10 min drive',
      'King Faisal Mosque - 10 min drive',
    ],

    directions: {
      byMetro: 'Sharjah does not have a metro system. Public buses and taxis are available. The Clock Tower is a well-known landmark.',
      byCar: 'The office is located at the Clock Tower roundabout area. Accessible from Al Wahda Street or Corniche Road.',
      parking: 'Public parking is available in the area. Mawaqif paid parking zones apply.',
    },

    servicesOffered: [
      'Statutory Audit (SEDD)',
      'Free Zone Audit (SAIF/Hamriyah)',
      'VAT Compliance & Tax Agent Services',
      'Industrial Accounting',
      'Inventory Audit',
      'Cost Audit',
    ],

    clientFocus: [
      'Industrial & Manufacturing',
      'Import/Export & Trading',
      'Construction & Contracting',
      'Logistics & Warehousing',
      'Real Estate',
    ],
  },

  'difc': {
    slug: 'difc',
    title: 'DIFC Office - Dubai International Financial Centre',
    metaTitle: 'Audit Firm in DIFC Dubai - DFSA Approved Auditors | Farahat & Co',
    metaDescription: 'Leading audit firm in DIFC with DFSA expertise. Financial services audit, regulatory compliance, IFRS reporting. Gate Village office. Call +971 4 250 0251',
    keywords: [
      'audit firm difc',
      'dfsa approved auditors',
      'difc auditors',
      'financial services audit difc',
      'gate village auditors',
      'difc compliance audit',
      'ifrs audit difc',
      'regulatory audit dubai',
    ],

    heroHeadline: 'Audit Firm in DIFC',
    heroSubheadline: 'Dubai International Financial Centre',
    heroDescription: 'Premier audit services for DIFC-registered companies and financial institutions. Our Gate Village office specializes in DFSA compliance, IFRS reporting, and regulatory audits.',
    heroImage: '/images/locations/difc-hero.jpg',

    location: {
      name: 'Farahat & Co - DIFC Office',
      address: 'Gate Village 10, Level 2, Dubai International Financial Centre, Dubai, UAE',
      phone: '+971 4 250 0251',
      email: 'difc@farahatco.com',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      coordinates: { lat: 25.2127, lng: 55.2805 },
      mapUrl: 'https://maps.google.com/?q=25.2127,55.2805',
    },

    aboutTitle: 'About Our DIFC Office',
    aboutContent: [
      'Our DIFC office is strategically located in the heart of Dubai\'s premier financial district, serving the unique needs of financial institutions, investment firms, and regulated entities operating within the Dubai International Financial Centre.',
      'With deep expertise in DFSA regulations, IFRS reporting standards, and financial services compliance, our DIFC team provides specialized audit and assurance services tailored to the stringent requirements of the financial services industry.',
      'Since establishing our presence in DIFC, we have become trusted advisors to banks, asset managers, insurance companies, and fintech firms navigating the complex regulatory landscape of Dubai\'s leading financial free zone.',
    ],

    whyThisLocation: [
      {
        title: 'DFSA Expertise',
        description: 'Deep knowledge of Dubai Financial Services Authority regulations and compliance requirements specific to DIFC entities.',
      },
      {
        title: 'Financial Services Focus',
        description: 'Specialized experience auditing banks, asset managers, insurance companies, and investment firms.',
      },
      {
        title: 'IFRS Specialists',
        description: 'Expert team in International Financial Reporting Standards with focus on financial instruments and complex valuations.',
      },
      {
        title: 'Regulatory Compliance',
        description: 'Support with DFSA submissions, regulatory reporting, and ongoing compliance requirements.',
      },
      {
        title: 'Prime Location',
        description: 'Convenient Gate Village office with easy access to major financial institutions and corporate headquarters.',
      },
      {
        title: 'Industry Network',
        description: 'Strong connections within DIFC\'s financial community and regulatory bodies.',
      },
    ],

    nearbyLandmarks: [
      'Gate Village - 2 min walk',
      'Emirates Towers - 5 min walk',
      'Dubai Mall - 3 min drive',
      'Burj Khalifa - 5 min drive',
      'Financial Centre Metro Station - 3 min walk',
      'DIFC Courts - 4 min walk',
      'The Ritz-Carlton DIFC - 2 min walk',
    ],

    directions: {
      byMetro: 'Take the Red Line to Financial Centre Metro Station. Our office is a 3-minute walk from Exit 2. Head towards Gate Village, our office is in Building 10, Level 2.',
      byCar: 'From Sheikh Zayed Road, take the DIFC exit. Follow signs to Gate Village parking. Our office is in Gate Village 10. Valet parking available at building entrance.',
      parking: 'Dedicated parking available in DIFC underground parking. Valet service at Gate Village entrance. Visitor parking spaces in basement levels P1-P3. Complimentary parking validation for clients.',
    },

    servicesOffered: [
      'External Audit for DIFC Companies',
      'DFSA Regulatory Compliance',
      'IFRS Financial Reporting',
      'Internal Audit for Financial Institutions',
      'Risk Assessment & Controls Review',
      'Anti-Money Laundering (AML) Compliance',
      'Regulatory Submissions Support',
      'Asset Management Audit',
      'Insurance Company Audit',
      'Investment Fund Audit',
      'Capital Adequacy Reviews',
      'Solvency Assessments',
    ],

    clientFocus: [
      'Banks and Financial Institutions',
      'Asset Management Companies',
      'Insurance and Reinsurance Firms',
      'Investment Funds and Fund Managers',
      'Fintech and Digital Payment Companies',
      'Wealth Management Firms',
      'Private Equity and Venture Capital',
      'Corporate Treasury Departments',
      'Family Offices in DIFC',
      'Holding Companies',
    ],
  },

  'business-bay': {
    slug: 'business-bay',
    title: 'Business Bay Office - Corporate Audit Services',
    metaTitle: 'Audit Firm in Business Bay Dubai - Corporate Auditors | Farahat & Co',
    metaDescription: 'Professional audit firm in Business Bay Dubai. Corporate audit, VAT compliance, financial reporting. Bay Square office. Call +971 42 500 251',
    keywords: [
      'audit firm business bay',
      'business bay auditors',
      'corporate audit business bay',
      'vat audit business bay',
      'accounting firm business bay',
      'bay square auditors',
      'business bay financial services',
    ],

    heroHeadline: 'Audit Firm in Business Bay',
    heroSubheadline: 'Dubai\'s Corporate Business District',
    heroDescription: 'Comprehensive audit and accounting services for businesses in Business Bay. Our Bay Square office provides expert corporate audit, VAT compliance, and financial advisory services.',
    heroImage: '/images/locations/business-bay-hero.jpg',

    location: {
      name: 'Farahat & Co - Business Bay Office',
      address: 'Bay Square, Building 7, Office 401, Business Bay, Dubai, UAE',
      phone: '+971 4 250 0252',
      email: 'businessbay@farahatco.com',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM',
      coordinates: { lat: 25.1872, lng: 55.2631 },
      mapUrl: 'https://maps.google.com/?q=25.1872,55.2631',
    },

    aboutTitle: 'About Our Business Bay Office',
    aboutContent: [
      'Located in the dynamic Business Bay district, our office serves a diverse portfolio of corporate clients including trading companies, professional services firms, technology startups, and multinational corporations with UAE operations.',
      'Business Bay is home to thousands of businesses spanning various industries, and our strategic location allows us to provide responsive, accessible audit and advisory services to companies throughout this vibrant commercial hub.',
      'Our Business Bay team specializes in serving SMEs and mid-market companies, offering the perfect blend of technical expertise and personalized client service that growing businesses need.',
    ],

    whyThisLocation: [
      {
        title: 'Corporate Focus',
        description: 'Extensive experience serving trading companies, professional services, and corporate entities.',
      },
      {
        title: 'SME Expertise',
        description: 'Specialized services for small and medium enterprises with growth ambitions.',
      },
      {
        title: 'VAT Compliance',
        description: 'Expert VAT audit and FTA compliance services for Business Bay companies.',
      },
      {
        title: 'Quick Response',
        description: 'Same-day consultations available for urgent compliance and advisory needs.',
      },
      {
        title: 'Convenient Access',
        description: 'Easy access from Sheikh Zayed Road and Dubai Water Canal, with ample parking.',
      },
      {
        title: 'Multi-Industry Experience',
        description: 'Serve diverse sectors including trading, technology, professional services, and retail.',
      },
    ],

    nearbyLandmarks: [
      'Bay Square - Same Building',
      'Dubai Water Canal - 2 min walk',
      'Business Bay Metro Station - 8 min walk',
      'Burj Khalifa - 10 min drive',
      'Dubai Mall - 8 min drive',
      'Downtown Dubai - 5 min drive',
      'Executive Towers - 3 min walk',
    ],

    directions: {
      byMetro: 'Take the Red Line to Business Bay Metro Station. Exit towards Al Khail Road. Our office is an 8-minute walk or short taxi ride to Bay Square Building 7.',
      byCar: 'From Sheikh Zayed Road, take Business Bay exit. Follow signs to Bay Square. Our office is in Building 7, 4th Floor. GPS coordinates: 25.1872, 55.2631',
      parking: 'Free parking available in Bay Square underground parking (Levels B1-B3). Visitor parking spaces near elevator lobbies. Street parking also available on Marasi Drive.',
    },

    servicesOffered: [
      'External Audit for LLCs and Branches',
      'VAT Audit and FTA Compliance',
      'Internal Audit and Controls Review',
      'Corporate Tax Advisory',
      'Management Accounts Preparation',
      'Due Diligence for M&A',
      'Financial Statement Preparation',
      'Bookkeeping and Accounting',
      'Company Formation Support',
      'CFO Advisory Services',
      'Business Valuation',
      'Financial Forecasting',
    ],

    clientFocus: [
      'Trading and Distribution Companies',
      'Professional Services Firms',
      'Technology and IT Companies',
      'Marketing and Advertising Agencies',
      'Consulting Firms',
      'E-commerce Businesses',
      'Import/Export Companies',
      'Manufacturing Representatives',
      'Service Providers',
      'Startup and Scale-ups',
    ],
  },

  'dubai-marina': {
    slug: 'dubai-marina',
    title: 'Dubai Marina Office - Waterfront Business Services',
    metaTitle: 'Audit Firm in Dubai Marina - Business Audit Services | Farahat & Co',
    metaDescription: 'Audit services in Dubai Marina. External audit, internal audit, business advisory. Marina Plaza office. Serving Marina and JBR businesses. Call +971 42 500 251',
    keywords: [
      'audit firm dubai marina',
      'dubai marina auditors',
      'marina audit services',
      'jbr auditors',
      'dubai marina accounting',
      'marina business services',
    ],

    heroHeadline: 'Audit Firm in Dubai Marina',
    heroSubheadline: 'Serving Dubai\'s Waterfront Business Community',
    heroDescription: 'Professional audit and business advisory services for Dubai Marina companies. Convenient Marina Plaza location serving businesses across Marina, JBR, and surrounding areas.',
    heroImage: '/images/locations/dubai-marina-hero.jpg',

    location: {
      name: 'Farahat & Co - Dubai Marina Office',
      address: 'Marina Plaza, Office 2105, Dubai Marina, Dubai, UAE',
      phone: '+971 4 250 0253',
      email: 'marina@farahatco.com',
      hours: 'Sunday - Thursday: 8:30 AM - 6:00 PM',
      coordinates: { lat: 25.0805, lng: 55.1397 },
      mapUrl: 'https://maps.google.com/?q=25.0805,55.1397',
    },

    aboutTitle: 'About Our Dubai Marina Office',
    aboutContent: [
      'Our Dubai Marina office serves the vibrant business community in one of Dubai\'s most iconic waterfront destinations. From Marina Plaza, we provide audit and advisory services to hospitality businesses, retail establishments, property management companies, and professional services operating in the Marina district.',
      'The Marina area is known for its concentration of hospitality, tourism, and lifestyle businesses, and our team has developed specialized expertise in serving these dynamic industries with their unique accounting and compliance requirements.',
      'We understand the fast-paced nature of Marina businesses and provide flexible, responsive service to match the energy of this thriving commercial district.',
    ],

    whyThisLocation: [
      {
        title: 'Hospitality Expertise',
        description: 'Specialized experience in restaurant, hotel, and tourism business audits.',
      },
      {
        title: 'Property Management',
        description: 'Expert service charge audits and property management compliance.',
      },
      {
        title: 'Retail Focus',
        description: 'Comprehensive understanding of retail operations and inventory management.',
      },
      {
        title: 'Flexible Hours',
        description: 'Extended hours and weekend appointments available for hospitality clients.',
      },
      {
        title: 'Waterfront Location',
        description: 'Prime Marina Plaza office with stunning views and easy access.',
      },
      {
        title: 'Tourism Industry',
        description: 'Experience with tour operators, yacht charters, and leisure businesses.',
      },
    ],

    nearbyLandmarks: [
      'Marina Mall - 3 min walk',
      'The Walk JBR - 5 min drive',
      'Dubai Marina Metro - 5 min walk',
      'Marina Beach - 8 min walk',
      'Jumeirah Beach Residence - 5 min drive',
      'Address Dubai Marina - 2 min walk',
      'Emirates Golf Club - 8 min drive',
    ],

    directions: {
      byMetro: 'Take the Red Line to Dubai Marina Metro Station. Exit towards Marina Walk. Marina Plaza is a 5-minute walk along the waterfront promenade.',
      byCar: 'From Sheikh Zayed Road, take Dubai Marina exit. Follow signs to Marina Plaza. Parking available in building basement. GPS: 25.0805, 55.1397',
      parking: 'Covered parking in Marina Plaza basement levels B1-B4. Valet parking at main entrance. Marina Walk public parking within 3-minute walk. Visitor parking validation provided.',
    },

    servicesOffered: [
      'Restaurant and F&B Audit',
      'Hotel and Hospitality Audit',
      'Retail Business Audit',
      'Property Management Audit',
      'Service Charge Audits',
      'Tourism Dirham Compliance',
      'Inventory Management Systems',
      'Revenue Recognition for Hospitality',
      'POS System Integration',
      'Cash Flow Management',
      'Seasonal Business Planning',
      'Multi-Location Consolidation',
    ],

    clientFocus: [
      'Restaurants and Cafes',
      'Hotels and Serviced Apartments',
      'Retail Stores and Boutiques',
      'Property Management Companies',
      'Yacht Charter Companies',
      'Tour Operators',
      'Spa and Wellness Centers',
      'Beach Clubs and Leisure',
      'Event Management Companies',
      'Marina Service Providers',
    ],
  },

  'jlt': {
    slug: 'jlt',
    title: 'JLT Office - Jumeirah Lakes Towers',
    metaTitle: 'Audit Firm in JLT Dubai - Jumeirah Lakes Towers Auditors | Farahat & Co',
    metaDescription: 'Professional audit firm in JLT Dubai. Corporate audit, free zone compliance, business advisory. Cluster J office. Call +971 42 500 251',
    keywords: [
      'audit firm jlt',
      'jumeirah lakes towers auditors',
      'jlt accounting services',
      'jlt audit services',
      'cluster j auditors',
      'dmcc audit',
      'jlt business services',
    ],

    heroHeadline: 'Audit Firm in JLT',
    heroSubheadline: 'Jumeirah Lakes Towers Business District',
    heroDescription: 'Comprehensive audit and business services for JLT companies. Our Cluster J office serves corporates, free zone entities, and SMEs across the JLT business community.',
    heroImage: '/images/locations/jlt-hero.jpg',

    location: {
      name: 'Farahat & Co - JLT Office',
      address: 'Cluster J, Goldcrest Executive Tower, Office 1204, Jumeirah Lakes Towers, Dubai, UAE',
      phone: '+971 4 250 0254',
      email: 'jlt@farahatco.com',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 1:00 PM',
      coordinates: { lat: 25.0692, lng: 55.1422 },
      mapUrl: 'https://maps.google.com/?q=25.0692,55.1422',
    },

    aboutTitle: 'About Our JLT Office',
    aboutContent: [
      'Jumeirah Lakes Towers has evolved into one of Dubai\'s major business hubs, and our JLT office is perfectly positioned to serve the diverse mix of companies that call this district home.',
      'From our Cluster J location, we provide full-spectrum audit, accounting, and advisory services to businesses ranging from DMCC free zone entities to mainland LLCs, professional services firms to technology companies.',
      'Our JLT team understands the unique mix of free zone and mainland regulations that many JLT businesses navigate, providing expert guidance on compliance requirements across different jurisdictions.',
    ],

    whyThisLocation: [
      {
        title: 'Free Zone Expertise',
        description: 'Extensive experience with DMCC and other free zone regulations and audit requirements.',
      },
      {
        title: 'Technology Sector',
        description: 'Specialized knowledge in IT, software, and technology company audits.',
      },
      {
        title: 'Mid-Market Focus',
        description: 'Tailored services for growing companies with 10-200 employees.',
      },
      {
        title: 'Cost-Effective',
        description: 'Competitive pricing structure aligned with JLT business community needs.',
      },
      {
        title: 'Metro Accessible',
        description: 'Just steps from JLT Metro Station with excellent public transport links.',
      },
      {
        title: 'Multi-National Clients',
        description: 'Experience serving regional offices of international corporations.',
      },
    ],

    nearbyLandmarks: [
      'DMCC Metro Station - 2 min walk',
      'JLT Metro Station - 5 min walk',
      'Dubai Marina - 10 min walk',
      'Ibn Battuta Mall - 10 min drive',
      'Media City - 5 min drive',
      'Internet City - 7 min drive',
      'Jumeirah Beach - 15 min drive',
    ],

    directions: {
      byMetro: 'Take the Red Line to DMCC Metro Station. Use Exit 1 towards Cluster J. Goldcrest Executive Tower is directly connected to the metro via covered walkway.',
      byCar: 'From Sheikh Zayed Road, take JLT exit and follow signs to Cluster J. Enter from Sheikh Zayed Road service road. Parking available in tower basement.',
      parking: 'Multi-level basement parking in Goldcrest Executive (B1-B5). Visitor parking on lower levels. Metro parking available at DMCC station. Street parking on cluster roads.',
    },

    servicesOffered: [
      'DMCC Free Zone Audit',
      'Mainland Company Audit',
      'Technology Company Audit',
      'Professional Services Audit',
      'Multi-Jurisdiction Compliance',
      'Transfer Pricing Advisory',
      'International Tax Planning',
      'Business Setup Support',
      'Virtual CFO Services',
      'Quarterly Reviews',
      'Management Reporting',
      'Payroll Services',
    ],

    clientFocus: [
      'DMCC Free Zone Companies',
      'Technology and Software Firms',
      'Trading and Distribution',
      'Professional Services',
      'Marketing and Media Agencies',
      'Regional Headquarters',
      'Consulting Firms',
      'Engineering Companies',
      'Telecommunications',
      'Business Services Providers',
    ],
  },

  'downtown-dubai': {
    slug: 'downtown-dubai',
    title: 'Downtown Dubai Office - Premium Business Services',
    metaTitle: 'Audit Firm in Downtown Dubai - Burj Khalifa District Auditors | Farahat & Co',
    metaDescription: 'Premium audit firm in Downtown Dubai. Corporate audit, financial advisory, high-net-worth services. Boulevard Plaza office. Call +971 42 500 251',
    keywords: [
      'audit firm downtown dubai',
      'downtown auditors',
      'burj khalifa auditors',
      'boulevard plaza audit',
      'premium audit services dubai',
      'downtown business services',
    ],

    heroHeadline: 'Audit Firm in Downtown Dubai',
    heroSubheadline: 'Burj Khalifa District',
    heroDescription: 'Premium audit and advisory services in the heart of Downtown Dubai. Our Boulevard Plaza office provides sophisticated financial services for corporates and high-net-worth clients.',
    heroImage: '/images/locations/downtown-dubai-hero.jpg',

    location: {
      name: 'Farahat & Co - Downtown Dubai Office',
      address: 'Boulevard Plaza, Tower 1, Level 15, Downtown Dubai, UAE',
      phone: '+971 4 250 0255',
      email: 'downtown@farahatco.com',
      hours: 'Sunday - Thursday: 8:00 AM - 7:00 PM',
      coordinates: { lat: 25.1944, lng: 55.2793 },
      mapUrl: 'https://maps.google.com/?q=25.1944,55.2793',
    },

    aboutTitle: 'About Our Downtown Dubai Office',
    aboutContent: [
      'Our Downtown Dubai office occupies a prestigious address in Boulevard Plaza, serving an elite clientele of multinational corporations, luxury brands, high-net-worth individuals, and sophisticated businesses that demand the highest standards of professional service.',
      'Located in the shadow of the iconic Burj Khalifa, this office embodies our commitment to excellence and provides a fitting environment for complex audit engagements, strategic advisory services, and confidential financial consultations.',
      'The Downtown team specializes in serving large corporates, family offices, luxury retail, real estate developers, and high-value transactions requiring discretion and expertise.',
    ],

    whyThisLocation: [
      {
        title: 'Premium Service',
        description: 'White-glove service standards for sophisticated clients and complex engagements.',
      },
      {
        title: 'Large Corporate',
        description: 'Extensive experience auditing multinational corporations and large enterprises.',
      },
      {
        title: 'Family Office',
        description: 'Specialized services for UHNW families, private wealth, and succession planning.',
      },
      {
        title: 'Luxury Retail',
        description: 'Expert knowledge of luxury brand accounting, inventory, and franchise operations.',
      },
      {
        title: 'Prestigious Address',
        description: 'Premium Boulevard Plaza office with panoramic Burj Khalifa views.',
      },
      {
        title: 'Confidentiality',
        description: 'Private meeting rooms and absolute discretion for sensitive matters.',
      },
    ],

    nearbyLandmarks: [
      'Burj Khalifa - 3 min walk',
      'Dubai Mall - 5 min walk',
      'Dubai Opera - 4 min walk',
      'Dubai Fountain - 6 min walk',
      'Burj Khalifa Metro - 10 min walk',
      'Souk Al Bahar - 5 min walk',
      'Address Downtown - 2 min walk',
    ],

    directions: {
      byMetro: 'Red Line to Burj Khalifa/Dubai Mall Metro Station. Take taxi or 10-minute walk to Boulevard Plaza. Private car service recommended for client meetings.',
      byCar: 'Enter Downtown Dubai via Mohammed Bin Rashid Boulevard. Boulevard Plaza has dedicated entrance from Emaar Boulevard. Valet parking recommended.',
      parking: 'Premium valet parking at Boulevard Plaza entrance. Reserved client parking spaces (advance booking). Dubai Mall parking with covered walkway access. Hourly parking in Boulevard underground.',
    },

    servicesOffered: [
      'Large Corporate Audit',
      'Group Consolidation',
      'IFRS Conversion',
      'Family Office Services',
      'Succession Planning',
      'Estate & Trust Audit',
      'Luxury Retail Audit',
      'Real Estate Development Audit',
      'IPO Readiness',
      'Transaction Advisory',
      'Forensic Investigation',
      'Litigation Support',
    ],

    clientFocus: [
      'Multinational Corporations',
      'Luxury Brands and Retailers',
      'Real Estate Developers',
      'Family Offices',
      'High-Net-Worth Individuals',
      'Private Investment Firms',
      'Hotel and Hospitality Groups',
      'Large Trading Groups',
      'Holding Companies',
      'Private Equity Backed Companies',
    ],
  },

  'abu-dhabi': {
    slug: 'abu-dhabi',
    title: 'Abu Dhabi Office - UAE Capital',
    metaTitle: 'Audit Firm in Abu Dhabi - ADGM Approved Auditors | Farahat & Co',
    metaDescription: 'Leading audit firm in Abu Dhabi with ADGM expertise. Government entities, oil & gas, healthcare audit. Corniche office. Call +971 2 555 1234',
    keywords: [
      'audit firm abu dhabi',
      'adgm approved auditors',
      'abu dhabi auditors',
      'government audit abu dhabi',
      'oil and gas audit uae',
      'healthcare audit abu dhabi',
      'statutory audit abu dhabi',
      'external audit adgm',
    ],

    heroHeadline: 'Audit Firm in Abu Dhabi',
    heroSubheadline: 'Serving the UAE Capital',
    heroDescription: 'Comprehensive audit and assurance services for Abu Dhabi-based businesses. Specialized expertise in government entities, oil & gas, healthcare, and ADGM regulatory compliance.',
    heroImage: '/images/locations/abu-dhabi-hero.jpg',

    location: {
      name: 'Farahat & Co - Abu Dhabi Office',
      address: 'No 16, 3rd Floor, Baynunah 2 Tower, Corniche Street, Next to British Embassy, Al-Hosn Area – Abu Dhabi, P.O. Box 107020, U.A.E.',
      phone: '+971 4 250 0251',
      email: 'info@auditfirmsdubai.ae',
      hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      coordinates: { lat: 24.4739, lng: 54.3457 },
      mapUrl: 'https://maps.google.com/?q=24.4739,54.3457',
    },

    aboutTitle: 'About Our Abu Dhabi Office',
    aboutContent: [
      'Our Abu Dhabi office serves as our gateway to the capital of the UAE, providing comprehensive audit and assurance services to a diverse range of clients including government entities, oil & gas companies, healthcare providers, and ADGM-registered businesses.',
      'With deep understanding of Abu Dhabi\'s unique regulatory environment including ADGM regulations, federal government requirements, and sector-specific compliance, our team delivers specialized audit services that meet the highest standards of quality and professionalism.',
      'We have established strong relationships with key regulatory bodies including the Department of Economic Development Abu Dhabi, Abu Dhabi Global Market (ADGM), and sector regulators such as the Department of Health (DOH) and ADNOC for oil & gas companies.',
    ],

    whyThisLocation: [
      {
        title: 'ADGM Expertise',
        description: 'Specialized knowledge of Abu Dhabi Global Market regulations and compliance requirements for financial services firms.',
      },
      {
        title: 'Government & Public Sector',
        description: 'Extensive experience auditing government entities, semi-government organizations, and public sector companies.',
      },
      {
        title: 'Oil & Gas Specialization',
        description: 'Deep industry expertise in upstream, midstream, and downstream oil & gas operations with understanding of ADNOC requirements.',
      },
      {
        title: 'Healthcare Compliance',
        description: 'DOH-approved auditors with expertise in healthcare provider compliance, HAAD regulations, and medical facility audits.',
      },
      {
        title: 'Strategic Location',
        description: 'Prime Corniche location providing easy access to government offices, major corporations, and regulatory bodies.',
      },
      {
        title: 'Bilingual Team',
        description: 'Arabic and English speaking professionals to serve both local and international clients seamlessly.',
      },
    ],

    nearbyLandmarks: [
      'Corniche Beach - 5 min walk',
      'Emirates Palace - 10 min drive',
      'ADGM Square - 8 min drive',
      'Abu Dhabi Mall - 6 min drive',
      'Department of Economic Development - 7 min drive',
      'Central Bank of UAE - 5 min drive',
      'Abu Dhabi National Exhibition Centre (ADNEC) - 15 min drive',
    ],

    directions: {
      byMetro: 'Abu Dhabi Metro is under construction. We recommend taxi or private car. Our office is located on the Corniche with clear signage.',
      byCar: 'From Sheikh Zayed Road (E11), take exit towards Abu Dhabi Corniche. Follow Corniche Road West. Al Manara Tower is on the right side with prominent entrance. Valet parking available.',
      parking: 'Dedicated parking in Al Manara Tower basement levels B1-B3. Visitor parking spaces available. Valet service at main entrance. Street parking along Corniche Road (metered).',
    },

    servicesOffered: [
      'External Audit for Abu Dhabi Companies',
      'ADGM Regulatory Compliance',
      'Government Entity Audits',
      'Oil & Gas Industry Audit',
      'Healthcare Provider Audits (DOH Approved)',
      'Internal Audit Services',
      'IFRS Financial Reporting',
      'Statutory Audit (DED Abu Dhabi)',
      'Construction & Real Estate Audit',
      'Manufacturing & Industrial Audit',
      'Education Sector Audit',
      'Hospitality & Tourism Audit',
    ],

    clientFocus: [
      'Government Entities and Semi-Government Organizations',
      'Oil & Gas Companies (ADNOC Partners)',
      'Healthcare Providers and Hospitals',
      'Construction and Real Estate Developers',
      'Manufacturing and Industrial Companies',
      'Educational Institutions',
      'Hotels and Hospitality Groups',
      'Trading and Distribution Companies',
      'Investment Companies and Family Offices',
      'Transportation and Logistics Companies',
      'Technology and Telecom Companies',
      'ADGM-Registered Financial Services Firms',
    ],
  },
}
