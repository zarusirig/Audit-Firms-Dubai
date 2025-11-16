'use client';

/**
 * Glossary Search Component
 * Real-time search with fuzzy matching
 */

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { GlossaryTerm } from '@/lib/data/glossary';

interface GlossarySearchProps {
  allTerms: GlossaryTerm[];
  onSearchResults: (results: GlossaryTerm[]) => void;
  onClearSearch: () => void;
}

export function GlossarySearch({
  allTerms,
  onSearchResults,
  onClearSearch,
}: GlossarySearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery.trim()) {
      onClearSearch();
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allTerms.filter(
      (term) =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.relatedTerms?.some((rt) => rt.toLowerCase().includes(query))
    );

    onSearchResults(results);
  }, [searchQuery, allTerms, onSearchResults, onClearSearch]);

  const handleClear = () => {
    setSearchQuery('');
    onClearSearch();
  };

  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
      <Input
        type="text"
        placeholder="Search terms or definitions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-10 h-12 text-base"
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
          aria-label="Clear search"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
