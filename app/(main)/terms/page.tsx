import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service | IPD Education",
  description: "Terms of Service for IPD Education",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            By accessing and using IPD Education's services, you agree to be bound by these Terms of Service. 
            If you do not agree with any part of these terms, please do not use our services.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Our Services</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>IPD Education provides:</p>
          <ul>
            <li>Educational counseling for studying abroad</li>
            <li>University application assistance</li>
            <li>Visa guidance and support</li>
            <li>Accommodation assistance</li>
            <li>Education loan and forex services</li>
            <li>Test preparation guidance</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>User Responsibilities</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and truthful information</li>
            <li>Maintain the confidentiality of your account</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not misuse our services or website</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Service Fees</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Fees for our services will be communicated clearly before you commit to using them. 
            Payment terms and refund policies will be outlined in your service agreement.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            IPD Education provides guidance and support services. The final decision for university admissions 
            rests with the respective institutions. We cannot guarantee admission or visa approval.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after 
            changes constitutes acceptance of the new terms.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            For questions about these Terms of Service:
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
