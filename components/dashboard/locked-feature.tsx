/**
 * LOCKED FEATURE COMPONENT
 * 
 * Displays upgrade prompt for premium features
 * Shows benefits and contact information for Vedpragya Bharat Pvt. Ltd.
 * 
 * Note: This is a Client Component to support interactive buttons
 */

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Crown, Check, ExternalLink, Globe } from "lucide-react"

interface LockedFeatureProps {
  featureName: string
  featureDescription: string
  benefits: string[]
  icon?: React.ReactNode
}

export function LockedFeature({ 
  featureName, 
  featureDescription, 
  benefits,
  icon 
}: LockedFeatureProps) {
  console.log(`[LockedFeature] Rendering locked feature: ${featureName}`)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        {/* Main Lock Card */}
        <Card className="dashboard-card tech-border relative overflow-hidden">
          {/* Scan effect */}
          <div className="scan-effect"></div>
          
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                {icon || <Lock className="h-10 w-10 text-white" />}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Crown className="h-6 w-6 text-yellow-500" />
                <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wide">
                  Premium Feature
                </span>
              </div>
              
              <CardTitle className="text-4xl font-bold gradient-text">
                {featureName}
              </CardTitle>
              
              <CardDescription className="text-lg">
                {featureDescription}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Benefits Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">What You'll Get:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                  >
                    <Check className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="text-center space-y-4 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Unlock this feature and many more premium capabilities
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8"
                onClick={() => window.open('https://vedpragya.com', '_blank')}
              >
                <Crown className="mr-2 h-5 w-5" />
                Upgrade to Premium
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="gradient-text text-center">Upgrade with Vedpragya</CardTitle>
            <CardDescription className="text-center">
              Visit our website to unlock premium features and elevate your experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Website Card */}
            <a 
              href="https://vedpragya.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all group cursor-pointer"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold mb-2 text-muted-foreground">Visit us at</p>
                <p className="text-2xl font-bold gradient-text flex items-center gap-2 justify-center">
                  vedpragya.com
                  <ExternalLink className="h-5 w-5" />
                </p>
              </div>
            </a>

            {/* Company Info */}
            <div className="mt-8 pt-6 border-t border-border text-center space-y-2">
              <p className="text-lg font-bold gradient-text">
                Vedpragya Bharat Pvt. Ltd.
              </p>
              <p className="text-sm text-muted-foreground">
                Empowering businesses with cutting-edge technology solutions
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                <span className="activity-dot"></span>
                <span>Trusted by leading organizations worldwide</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Comparison */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-center">Premium vs Standard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Standard */}
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-border">
                  <h3 className="font-semibold text-lg">Standard Plan</h3>
                  <p className="text-sm text-muted-foreground">What you have now</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Basic Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Lead Management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>University Database</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Announcements</span>
                  </li>
                </ul>
              </div>

              {/* Premium */}
              <div className="space-y-4 p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30">
                <div className="text-center pb-4 border-b border-cyan-500/30">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Crown className="h-5 w-5 text-yellow-500" />
                    <h3 className="font-semibold text-lg gradient-text">Premium Plan</h3>
                  </div>
                  <p className="text-sm text-cyan-400">Everything in Standard, plus:</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="font-medium">Advanced Analytics & Insights</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="font-medium">Automated Email Campaigns</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="font-medium">AI-Powered Assistant</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="font-medium">Custom Reports & Exports</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="font-medium">CRM Integrations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="font-medium">Priority Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
