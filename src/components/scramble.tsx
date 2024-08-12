'use client';

import { RefreshCcwIcon } from 'lucide-react';
import { randomScrambleForEvent } from 'cubing/scramble'; 
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export async function Scramble({
  solveFinished,
  setSolveFinished,
}: {
  solveFinished: boolean,
  setSolveFinished: React.Dispatch<React.SetStateAction<boolean>>,
}) {
  const [scramble, setScramble] = useState('');
  setScramble((await randomScrambleForEvent('333')).toString());

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Scramble</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={async () => setScramble((await randomScrambleForEvent('333')).toString())}
        >
          <RefreshCcwIcon className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
      <div className="mt-4 text-2xl font-bold text-center">{scramble}</div>
    </div>
  )
}