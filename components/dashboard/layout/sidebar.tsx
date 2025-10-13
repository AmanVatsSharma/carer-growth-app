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
    {
      label: "Settings",
      href: "#",
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
      <SidebarBody className="justify-between gap-10 border-r border-border/50">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
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
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
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
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
        <span className="text-white font-bold text-lg">I</span>
      </div>
    </a>
  );
};
