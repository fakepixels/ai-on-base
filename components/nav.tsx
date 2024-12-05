import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SubmitGuideDialog } from "@/components/submit-guide-dialog"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-[80%] mx-auto items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">AI on Base</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-4 justify-end">
          <SubmitGuideDialog />
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/yourusername/yourrepo" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

