/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j4NKxJsfoMo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b bg-card">
        <div className="flex items-center gap-2">
          <CuboidIcon className="w-6 h-6 text-primary" />
          <h1 className="text-lg font-bold">Rubik's Cube Timer</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <SettingsIcon className="w-5 h-5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Display Format</span>
                <Select defaultValue="mm:ss.ms">
                  <SelectContent>
                    <SelectItem value="mm:ss.ms">mm:ss.ms</SelectItem>
                    <SelectItem value="ss.ms">ss.ms</SelectItem>
                    <SelectItem value="ms">ms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Sound Effects</span>
                <Switch defaultChecked />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Vibration</span>
                <Switch defaultChecked />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 grid grid-cols-[1fr_2fr_1fr] gap-4 p-4">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <CardContent>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Scramble</h2>
                <Button variant="ghost" size="icon">
                  <RefreshCcwIcon className="w-5 h-5 text-muted-foreground" />
                </Button>
              </div>
              <div className="mt-4 text-2xl font-bold text-center">R U R' U' F' U F</div>
            </CardContent>
          </Card>
          <Card className="p-4 flex-1">
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
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Card className="p-6 flex-1 w-full">
            <CardContent>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-4xl font-bold">12.45</div>
                <Button size="lg">Start</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <CardContent>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Best Times</h2>
                <Button variant="ghost" size="icon">
                  <RefreshCcwIcon className="w-5 h-5 text-muted-foreground" />
                </Button>
              </div>
              <div className="mt-4 grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold">1.</span>
                  <span>12.45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">2.</span>
                  <span>15.23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">3.</span>
                  <span>17.89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">4.</span>
                  <span>19.45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">5.</span>
                  <span>21.12</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Average Times</h2>
                <Button variant="ghost" size="icon">
                  <RefreshCcwIcon className="w-5 h-5 text-muted-foreground" />
                </Button>
              </div>
              <div className="mt-4 grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Ao5:</span>
                  <span>16.78</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Ao12:</span>
                  <span>18.23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Ao100:</span>
                  <span>19.45</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function CuboidIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
      <path d="M10 22v-8L2.25 9.15" />
      <path d="m10 14 11.77-6.87" />
    </svg>
  )
}


function RefreshCcwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}