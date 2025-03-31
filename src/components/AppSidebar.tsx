import * as React from "react"
import {
  Home,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Settings2,
  NotebookTabs,
  Sparkle
} from "lucide-react"

import { NavMain } from "@/components/navigation/NavMenu"
import { NavProjects } from "@/components/navigation/NavProjects"
import { NavSecondary } from "@/components/navigation/NavSecondary"
import { NavUser } from "@/components/navigation/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import rfpLogo from "@/assets/rfp-logo.png"

const data = {
  user: {
    name: "Lev",
    email: "levmisiliuk@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "AI Chatbot",
      url: "#",
      icon: Sparkle,
    },
    {
      title: "Introduction",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Key Resources",
      url: "#",
      icon: NotebookTabs,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    }
  ],
  adminTabs: [
    {
      name: "Alerts settings",
      url: "#",
      icon: Frame,
    },
    {
      name: "User managment",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Map",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
                  <img src={rfpLogo} alt="" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Research For Purpose</span>
                  <span className="truncate text-xs">Production</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects adminTabs={data.adminTabs} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
