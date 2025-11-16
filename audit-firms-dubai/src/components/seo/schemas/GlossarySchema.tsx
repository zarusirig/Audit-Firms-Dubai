/**
 * Glossary Schema Component for SEO
 * Implements DefinedTermSet schema for rich snippets
 */

import { GlossaryTerm } from '@/lib/data/glossary';

interface GlossarySchemaProps {
  terms: GlossaryTerm[];
}

export function GlossarySchema({ terms }: GlossarySchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Audit & Financial Glossary - Dubai UAE',
    description:
      'Comprehensive glossary of audit, financial, tax, and compliance terms for businesses in Dubai and the UAE',
    publisher: {
      '@type': 'Organization',
      name: 'Farahat & Co',
      url: 'https://auditfirmsdubai.ae',
    },
    hasDefinedTerm: terms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: 'https://auditfirmsdubai.ae/glossary',
      ...(term.relatedTerms && {
        seeAlso: term.relatedTerms,
      }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
