import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy | IPD Education",
  description: "Privacy Policy for IPD Education",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            IPD Education collects personal information when you submit inquiries, register for our services, 
            or contact us. This may include your name, email address, phone number, educational background, 
            and preferences for studying abroad.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>We use your personal information to:</p>
          <ul>
            <li>Provide educational counseling and guidance</li>
            <li>Connect you with universities and programs</li>
            <li>Send you relevant updates about study opportunities</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Data Protection</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized 
            access, alteration, disclosure, or destruction. Your data is stored securely and is only accessible 
            to authorized personnel.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with regulatory authorities</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            If you have any questions about our Privacy Policy, please contact us at:
            <br />
            Email: info@ipdeducation.in
            <br />
            Phone: +91 81235 92381
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground mt-8">
        Last updated: January 2025
      </p>
    </div>
  )
}
