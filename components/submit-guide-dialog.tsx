"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function SubmitGuideDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Submit Entry
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>How to Submit an Entry</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <ol className="list-decimal list-inside space-y-3">
            <li>Fork the repository on GitHub</li>
            <li>Create a new branch with a descriptive name (e.g., <code>add-chatgpt-example</code>)</li>
            <li>Add your entry following the existing format in the <code>data/</code> directory</li>
            <li>Commit your changes and push to your fork</li>
            <li>Open a Pull Request against the main repository</li>
          </ol>
          <div className="pt-4">
            <Button asChild>
              <a 
                href="https://github.com/yourusername/yourrepo/fork" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Contributing
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 