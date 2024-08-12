'use client';

import { RefreshCcwIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { setRandomScramble } from '@/lib/scrambleActions';

export function Scramble({
  scramble,
  setScramble,
}: {
  scramble: string,
  setScramble: React.Dispatch<React.SetStateAction<string>>,
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Scramble</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setRandomScramble(setScramble)}
        >
          <RefreshCcwIcon className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
      <div suppressHydrationWarning className="mt-4 text-2xl font-bold text-center">{scramble}</div>
    </div>
  )
}