'use client';

import { useCallback, useState } from 'react';
import { useTimer } from 'react-use-precision-timer';
import { Azeret_Mono } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const azeret = Azeret_Mono({ subsets: ['latin'] });

export function Timer() {
  const [value, setValue] = useState({
    ms: 0,
    s: 0,
    m: 0,
  });
  const callback = useCallback(() => setValue({
    ms: stopwatch.getElapsedRunningTime() % 1000,
    s: Math.floor(stopwatch.getElapsedRunningTime() / 1000) % 60,
    m: Math.floor(stopwatch.getElapsedRunningTime() / 1000 / 60),
  }), []);
  const stopwatch = useTimer({delay: 1, startImmediately: false}, callback);
  const [isSpaceDown, setIsSpaceDown] = useState(false);
  const [solveFinished, setSolveFinished] = useState(false);

  const keyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ') {
      setSolveFinished(false);
      
      if (stopwatch.isRunning()) {
        stopwatch.stop();
        setSolveFinished(true);
      }

      setIsSpaceDown(true);
    }
  };

  const keyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ') {
      if (!stopwatch.isRunning() && solveFinished === false) {
        stopwatch.start();
      }

      setIsSpaceDown(false);
    }
  };

  return (
    <Button
      className={cn("h-full w-full flex flex-col items-center justify-center gap-4")}
      variant="timer"
      onKeyDown={(e) => keyDown(e)}
      onKeyUp={(e) => keyUp(e)}
    >
      {stopwatch.isRunning() || solveFinished === true || value.ms || value.s || value.m ? (
        <div className={cn("text-5xl font-bold mb-52", azeret.className, isSpaceDown && solveFinished === false ? "text-green-800" : "text-foreground")}>
          {value.m ? `${value.m}:` : ''}{value.s}.{value.ms}
        </div>
      ) : (
        <div className={cn("text-5xl font-bold mb-52", isSpaceDown ? "text-green-800" : "text-foreground")}>Start</div>
      )}
    </Button>
  );
}