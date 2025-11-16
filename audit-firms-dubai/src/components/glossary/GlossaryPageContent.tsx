'use client';

/**
 * Glossary Page Content Component
 * Main glossary display with categories and terms
 */

import { useState, useRef, useEffect } from 'react';
import {
  GlossaryCategory,
  GlossaryTerm,
  ALL_GLOSSARY_TERMS,
  TERMS_BY_LETTER,
  AVAILABLE_LETTERS,
} from '@/lib/data/glossary';
import { AlphabetNav } from './AlphabetNav';
import { GlossarySearch } from './GlossarySearch';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GlossaryPageContentProps {
  categories: GlossaryCategory[];
}

export function GlossaryPageContent({ categories }: GlossaryPageContentProps) {
  const [activeLetter, setActiveLetter] = useState<string | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchResults, setSearchResults] = useState<GlossaryTerm[] | null>(null);
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());
  const letterRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    setSearchResults(null);
    setSelectedCategory('all');

    letterRefs.current[letter]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchResults(null);
    setActiveLetter(undefined);
  };

  const handleSearchResults = (results: GlossaryTerm[]) => {
    setSearchResults(results);
    setActiveLetter(undefined);
    setSelectedCategory('all');
  };

  const handleClearSearch = () => {
    setSearchResults(null);
  };

  const toggleTerm = (slug: string) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(slug)) {
      newExpanded.delete(slug);
    } else {
      newExpanded.add(slug);
    }
    setExpandedTerms(newExpanded);
  };

  // Get display terms based on filters
  const getDisplayTerms = (): { letter: string; terms: GlossaryTerm[] }[] => {
    let terms = ALL_GLOSSARY_TERMS;

    // Apply search filter
    if (searchResults !== null) {
      terms = searchResults;
    }
    // Apply category filter
    else if (selectedCategory !== 'all') {
      terms = terms.filter((term) => term.category === selectedCategory);
    }

    // Group by letter
    const grouped: Record<string, GlossaryTerm[]> = {};
    terms.forEach((term) => {
      const letter = term.term[0].toUpperCase();
      if (!grouped[letter]) {
        grouped[letter] = [];
      }
      grouped[letter].push(term);
    });

    return Object.entries(grouped)
      .map(([letter, terms]) => ({ letter, terms }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  };

  const displayGroups = getDisplayTerms();

  return (
    <div className="min-h-screen">
      {/* Search Bar */}
      <section className="bg-neutral-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <GlossarySearch
              allTerms={ALL_GLOSSARY_TERMS}
              onSearchResults={handleSearchResults}
              onClearSearch={handleClearSearch}
            />
          </div>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <AlphabetNav
        availableLetters={AVAILABLE_LETTERS}
        activeLetter={activeLetter}
        onLetterClick={handleLetterClick}
      />

      {/* Category Filters */}
      <section className="bg-white border-b border-neutral-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryFilter('all')}
            >
              All Terms
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter(category.id)}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Search Results Info */}
            {searchResults !== null && (
              <div className="mb-6 text-center text-neutral-600">
                Found <strong>{searchResults.length}</strong> term
                {searchResults.length !== 1 ? 's' : ''}
              </div>
            )}

            {/* No Results */}
            {displayGroups.length === 0 && (
              <div className="text-center py-12 text-neutral-600">
                <p className="text-lg">No terms found matching your criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchResults(null);
                    setSelectedCategory('all');
                    setActiveLetter(undefined);
                  }}
                  className="mt-4"
                >
                  Clear filters
                </Button>
              </div>
            )}

            {/* Terms by Letter */}
            {displayGroups.map(({ letter, terms }) => (
              <div
                key={letter}
                ref={(el) => {
                  letterRefs.current[letter] = el;
                }}
                className="mb-12"
              >
                {/* Letter Header */}
                <h2 className="mb-6 text-4xl font-bold text-primary-900 border-b-2 border-primary-200 pb-2">
                  {letter}
                </h2>

                {/* Terms List */}
                <div className="space-y-4">
                  {terms.map((term) => {
                    const isExpanded = expandedTerms.has(term.slug);
                    const categoryInfo = categories.find((c) => c.id === term.category);

                    return (
                      <div
                        key={term.slug}
                        className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-primary-900 mb-2">
                              {term.term}
                            </h3>
                            {categoryInfo && (
                              <span className="inline-block mb-3 text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                {categoryInfo.title}
                              </span>
                            )}
                            <p className="text-neutral-700 leading-relaxed">
                              {term.definition}
                            </p>

                            {/* Related Terms */}
                            {term.relatedTerms && term.relatedTerms.length > 0 && (
                              <div className="mt-4">
                                <button
                                  onClick={() => toggleTerm(term.slug)}
                                  className="flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                                >
                                  {isExpanded ? (
                                    <>
                                      <ChevronUp className="h-4 w-4" />
                                      Hide related terms
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="h-4 w-4" />
                                      Show related terms
                                    </>
                                  )}
                                </button>

                                {isExpanded && (
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {term.relatedTerms.map((relatedTerm) => (
                                      <span
                                        key={relatedTerm}
                                        className="inline-block rounded bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                                      >
                                        {relatedTerm}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Examples */}
                            {term.examples && term.examples.length > 0 && isExpanded && (
                              <div className="mt-3 border-l-2 border-primary-200 pl-4">
                                <p className="text-sm font-medium text-neutral-600 mb-1">
                                  Example:
                                </p>
                                {term.examples.map((example, idx) => (
                                  <p key={idx} className="text-sm text-neutral-600 italic">
                                    {example}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
