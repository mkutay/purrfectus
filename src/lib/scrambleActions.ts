import { randomScrambleForEvent } from 'cubing/scramble';
import cstimer from 'cstimer_module';

export function setRandomScramble(
  setScramble: React.Dispatch<React.SetStateAction<string>>
) {
  // setScramble((await randomScrambleForEvent('333')).toString());
  cstimer.setSeed(Math.floor(new Date().getTime() / 10).toString());
  setScramble(cstimer.getScramble('333'));
}