import { GraduationCap, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { LeadDashboard } from "@/components/journey-modal/lead-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" asChild className="sm:hidden">
              <a href="/">
                <ArrowLeft className="h-4 w-4" />
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <div>
                <span className="text-lg sm:text-xl font-bold">StudyAbroad Pro</span>
                <span className="text-xs sm:text-sm text-muted-foreground ml-2 hidden sm:inline">Dashboard</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <a href="/">Home</a>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <LeadDashboard />
      </main>
    </div>
  )
}
