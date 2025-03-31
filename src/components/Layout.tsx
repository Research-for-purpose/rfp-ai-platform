import { AppSidebar } from "@/components/AppSidebar"
import { SiteHeader } from "@/components/navigation/SiteHeader"
import { SidebarProvider } from "@/components/ui/sidebar"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="[--header-height:calc(theme(spacing.14))] bg-background text-foreground">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          {children}
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Layout