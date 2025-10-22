import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getContactEmail, getMailtoHref } from "@/lib/contact"

export const metadata = {
  title: "Cookie Policy | IPD Education",
  description: "Cookie Policy for IPD Education",
}

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>What Are Cookies?</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            understanding how you use our site.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Types of Cookies We Use</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3 className="text-lg font-semibold mt-4">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic 
            features like page navigation and access to secure areas.
          </p>

          <h3 className="text-lg font-semibold mt-4">Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting 
            and reporting information anonymously.
          </p>

          <h3 className="text-lg font-semibold mt-4">Functionality Cookies</h3>
          <p>
            These cookies enable the website to provide enhanced functionality and personalization, 
            such as remembering your preferences.
          </p>

          <h3 className="text-lg font-semibold mt-4">Marketing Cookies</h3>
          <p>
            These cookies are used to track visitors across websites to display relevant advertisements.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Managing Cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            You can control and manage cookies in various ways. Most browsers allow you to:
          </p>
          <ul>
            <li>See what cookies are stored on your device</li>
            <li>Delete cookies individually or all at once</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Accept or decline cookies when visiting a site</li>
          </ul>
          <p>
            Please note that blocking all cookies may impact your experience on our website and 
            limit the services we can provide.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Third-Party Cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            We may use third-party services such as Google Analytics to help us analyze how visitors 
            use our site. These third parties may place cookies on your device.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            If you have questions about our use of cookies:
            <br />
            Email: <a href={getMailtoHref()} className="underline">{getContactEmail()}</a>
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
