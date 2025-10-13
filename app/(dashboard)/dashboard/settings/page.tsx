/**
 * SETTINGS PAGE
 * 
 * Dashboard configuration and preferences
 */

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, User, Bell, Shield, Palette, Globe } from "lucide-react"

export default function SettingsPage() {
  console.log('[Settings Page] Rendering settings page...')

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight gradient-text mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your dashboard preferences and account settings
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Settings */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-cyan-500" />
                <span className="gradient-text">Profile</span>
              </CardTitle>
              <CardDescription>Update your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                <Input id="name" placeholder="Your name" defaultValue="Admin User" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="admin@example.com" defaultValue="admin@ipd.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                <Input id="phone" placeholder="+91 1234567890" />
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-500" />
                <span className="gradient-text">Notifications</span>
              </CardTitle>
              <CardDescription>Configure how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive email alerts for new leads</p>
                </div>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Daily Summary</p>
                  <p className="text-xs text-muted-foreground">Get daily digest of activities</p>
                </div>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">SMS Alerts</p>
                  <p className="text-xs text-muted-foreground">Urgent notifications via SMS</p>
                </div>
                <input type="checkbox" className="toggle" />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="gradient-text">Security</span>
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="current-password" className="text-sm font-medium">Current Password</label>
                <Input id="current-password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <label htmlFor="new-password" className="text-sm font-medium">New Password</label>
                <Input id="new-password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
                <Input id="confirm-password" type="password" placeholder="••••••••" />
              </div>
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-500" />
                <span className="gradient-text">Appearance</span>
              </CardTitle>
              <CardDescription>Customize your dashboard look</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Theme</label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Light</Button>
                  <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600">Dark</Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Language</label>
                <select className="w-full px-3 py-2 rounded-md border border-border bg-background">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Time Zone</label>
                <select className="w-full px-3 py-2 rounded-md border border-border bg-background">
                  <option>Asia/Kolkata (IST)</option>
                  <option>America/New_York (EST)</option>
                  <option>Europe/London (GMT)</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Info */}
        <Card className="dashboard-card mt-6 tech-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-cyan-500" />
              <span className="gradient-text">Subscription Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Current Plan: <span className="text-muted-foreground">Standard</span></p>
                <p className="text-sm text-muted-foreground mt-1">
                  Upgrade to Premium to unlock advanced features
                </p>
              </div>
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                onClick={() => window.open('https://vedpragya.com', '_blank')}
              >
                Upgrade Now
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-center text-muted-foreground">
                Powered by{" "}
                <a 
                  href="https://vedpragya.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gradient-text font-semibold hover:underline"
                >
                  Vedpragya Bharat Pvt. Ltd.
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
