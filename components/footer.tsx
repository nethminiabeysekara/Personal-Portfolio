import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Your Name. All rights reserved.</p>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <p>Made with</p>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
            <p>and modern web technologies</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

