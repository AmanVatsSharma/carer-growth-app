/**
 * FUTURISTIC SIDEBAR COMPONENT
 * 
 * Modern collapsible sidebar with tech aesthetics
 * Features:
 * - Auto-expand on hover
 * - Cyan accent colors
 * - Smooth animations
 * - Icons for all navigation items
 */

"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSpeakerphone,
  IconMoneybag,
  IconSettings,
  IconUserBolt,
  IconSchool,
  IconChartBar,
  IconMail,
  IconRobot,
  IconFileAnalytics,
  IconPlugConnected,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/theme/mode-toggle";

export function SidebarDashboard() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-cyan-500" />
      ),
    },
    {
      label: "Leads",
      href: "/dashboard/leads",
      icon: (
        <IconMoneybag className="h-5 w-5 shrink-0 text-blue-500" />
      ),
    },
    {
      label: "Heavy Leads",
      href: "/dashboard/heavy-leads",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-purple-500" />
      ),
    },
    {
      label: "Universities",
      href: "/dashboard/universities",
      icon: (
        <IconSchool className="h-5 w-5 shrink-0 text-green-500" />
      ),
    },
    {
      label: "Announcements",
      href: "/dashboard/announcements",
      icon: (
        <IconSpeakerphone className="h-5 w-5 shrink-0 text-yellow-500" />
      ),
    },
  ];

  // Premium locked features - require upgrade from Vedpragya Bharat Pvt. Ltd.
  const premiumLinks = [
    {
      label: "Analytics",
      href: "/dashboard/analytics",
      icon: (
        <IconChartBar className="h-5 w-5 shrink-0 text-cyan-400" />
      ),
      locked: true,
    },
    {
      label: "Email Campaigns",
      href: "/dashboard/email-campaigns",
      icon: (
        <IconMail className="h-5 w-5 shrink-0 text-blue-400" />
      ),
      locked: true,
    },
    {
      label: "AI Assistant",
      href: "/dashboard/ai-assistant",
      icon: (
        <IconRobot className="h-5 w-5 shrink-0 text-purple-400" />
      ),
      locked: true,
    },
    {
      label: "Reports",
      href: "/dashboard/reports",
      icon: (
        <IconFileAnalytics className="h-5 w-5 shrink-0 text-green-400" />
      ),
      locked: true,
    },
    {
      label: "CRM Integration",
      href: "/dashboard/crm",
      icon: (
        <IconPlugConnected className="h-5 w-5 shrink-0 text-orange-400" />
      ),
      locked: true,
    },
  ];

  const settingsLinks = [
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-gray-400" />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-red-400" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 border-r border-border/50 sidebar-scrollbar">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto sidebar-scrollbar">
          {open ? <Logo /> : <LogoIcon />}
          
          {/* Main Links */}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>

          {/* Premium Section */}
          {open && (
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase">Premium</span>
                <span className="text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-0.5 rounded-full font-bold">PRO</span>
              </div>
              <div className="flex flex-col gap-2">
                {premiumLinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          )}

          {/* Settings Links */}
          <div className="mt-6 pt-6 border-t border-border/50 flex flex-col gap-2">
            {settingsLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="mb-5">
            <ModeToggle />
          </div>
          <SidebarLink
            link={{
              label: "Admin",
              href: "#",
              icon: (
                <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <a
      href="/dashboard"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal group"
    >
      <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-all">
        <span className="text-white font-bold text-lg">I</span>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold whitespace-pre gradient-text text-lg"
      >
        IPD Dashboard
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="/dashboard"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal group"
    >
      <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-all">
        <span className="text-white font-bold text-lg">I</span>
      </div>
    </a>
  );
};
