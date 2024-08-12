'use client';

import { SettingsIcon } from 'lucide-react'
import { useState } from 'react';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Logo } from '@/components/logo'
import { Timer } from '@/components/timer'
import { Scramble } from '@/components/scramble'
import { setRandomScramble } from '@/lib/scrambleActions';

export default function Home() {
  const [solveFinished, setSolveFinished] = useState(false);
  const [scramble, setScramble] = useState('');
  const [firstLoad, setFirstLoad] = useState(false);

  if (firstLoad === false) {
    setRandomScramble(setScramble);
    setFirstLoad(true);
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b bg-card">
        <div className="flex items-center gap-2">
          <Logo className="text-foreground"/>
          <h1 className="text-lg tracking-tight font-bold">Purrfectus</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <SettingsIcon className="w-5 h-5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-row w-full h-full gap-4 p-4">
        <Card className="p-4 flex-1 w-1/4">
          <CardContent className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Past Solves</h2>
            <ScrollArea className="flex-1">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span>12.45</span>
                  <span className="text-muted-foreground">2023-04-15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>15.23</span>
                  <span className="text-muted-foreground">2023-04-12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>17.89</span>
                  <span className="text-muted-foreground">2023-04-08</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>19.45</span>
                  <span className="text-muted-foreground">2023-04-05</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>21.12</span>
                  <span className="text-muted-foreground">2023-03-30</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>23.78</span>
                  <span className="text-muted-foreground">2023-03-25</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>25.34</span>
                  <span className="text-muted-foreground">2023-03-20</span>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        <div className="flex flex-col items-center justify-center gap-4 w-2/4">
          <Card className="p-6 flex-1 w-full">
            <CardContent className="h-full">
              <Timer
                solveFinished={solveFinished}
                setSolveFinished={setSolveFinished}
                scramble={scramble}
                setScramble={setScramble}
              />
            </CardContent>
          </Card>
        </div>
        <Card className="p-4 w-1/4 h-full">
          <CardContent>
            <Scramble
              scramble={scramble}
              setScramble={setScramble}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}