'use client';

/**
 * Alphabet Navigation Component
 * A-Z quick navigation for glossary terms
 */

import { cn } from '@/lib/utils';

interface AlphabetNavProps {
  availableLetters: string[];
  activeLetter?: string;
  onLetterClick: (letter: string) => void;
}

export function AlphabetNav({
  availableLetters,
  activeLetter,
  onLetterClick,
}: AlphabetNavProps) {
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="sticky top-16 z-10 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap gap-1 justify-center">
          {allLetters.map((letter) => {
            const isAvailable = availableLetters.includes(letter);
            const isActive = letter === activeLetter;

            return (
              <button
                key={letter}
                onClick={() => isAvailable && onLetterClick(letter)}
                disabled={!isAvailable}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded text-sm font-medium transition-all',
                  isAvailable
                    ? 'hover:bg-primary-100 hover:text-primary-700 cursor-pointer'
                    : 'text-neutral-300 cursor-not-allowed',
                  isActive && 'bg-primary-600 text-white hover:bg-primary-700 hover:text-white'
                )}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
