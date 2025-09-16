"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnnouncementData {
  announcementTitle: string;
  announcementContent: string;
  announcementActive: boolean;
}

export function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState<AnnouncementData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch("/api/website-settings");
        if (response.ok) {
          const data = await response.json();
          if (data.announcementActive && data.announcementTitle && data.announcementContent) {
            setAnnouncement({
              announcementTitle: data.announcementTitle,
              announcementContent: data.announcementContent,
              announcementActive: data.announcementActive,
            });
            setIsVisible(true);
          }
        }
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!announcement || !isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-semibold text-sm md:text-base">
              {announcement.announcementTitle}
            </span>
            <span className="hidden sm:inline text-sm opacity-90">
              {announcement.announcementContent}
            </span>
          </div>
          <div className="sm:hidden text-xs opacity-90 mt-1">
            {announcement.announcementContent}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="text-white hover:bg-white/20 ml-4"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}