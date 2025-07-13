"use client";

import * as React from "react";
import {
  AudioWaveform,
  ChartBar,
  Command,
  File,
  GalleryVerticalEnd,
  Home,
  Mail,
  Map,
  Package,
  PieChart,
  Settings2,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavQuickAccess } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "nova-desk",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: Package,
      isActive: false,
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: User,
      isActive: false,
    },
    { title: "Orders", url: "/dashboard/orders", icon: ShoppingCart },
    { title: "Analytics", url: "/dashboard/analytics", icon: ChartBar },
    { title: "Reports", url: "/dashboard/reports", icon: File },
    { title: "Team", url: "/dashboard/team", icon: Users },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],
  quickAccess: [
    {
      name: "Email Templates",
      url: "/dashboard/email-templates",
      icon: Mail,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavQuickAccess links={data.quickAccess} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
