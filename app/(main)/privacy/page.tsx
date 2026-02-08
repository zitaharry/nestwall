
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nestwell",
  description: "Privacy policy for the Nestwell real estate platform.",
};

export default function PrivacyPage() {
  const lastUpdated = "February 8, 2026";

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <div className="space-y-6">
        <div className="space-y-2 border-b pb-8">
          <h1 className="text-4xl font-bold tracking-tight font-heading">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <section className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold font-heading">1. Introduction</h2>
          <p className="leading-7 text-muted-foreground">
            At Nestwell ("we," "our," or "us"), we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our real estate platform.
          </p>
          <p className="leading-7 text-muted-foreground italic">
            Disclaimer: This project is for educational purposes only. We are not affiliated with Zillow Group, Inc.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">2. Information We Collect</h2>
          <p className="leading-7 text-muted-foreground">
            We collect information to provide better services to our users:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Account Information:</strong> When you sign up via Clerk, we receive your name, email address, and profile image.
            </li>
            <li>
              <strong>Property Listings:</strong> If you are an agent, we collect the property details, images, and contact information you provide.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect information about how you interact with our site, including search queries and saved favorites.
            </li>
            <li>
              <strong>Payment Data:</strong> Subscription billing for the Agent Plan is handled securely by Clerk. We do not store your credit card details on our servers.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">3. How We Use Your Information</h2>
          <p className="leading-7 text-muted-foreground">
            We use the collected data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To provide and maintain our service, including property searches and map views.</li>
            <li>To manage your account and subscription via Clerk.</li>
            <li>To facilitate communication between homebuyers and real estate agents.</li>
            <li>To analyze platform performance and improve user experience.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">4. Third-Party Services</h2>
          <p className="leading-7 text-muted-foreground">
            We rely on trusted third-party providers to power Nestwell:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Clerk:</strong> Handles authentication and billing management.</li>
            <li><strong>Sanity:</strong> Used as our Content Management System for property data.</li>
            <li><strong>Mapbox:</strong> Provides interactive maps and geocoding services.</li>
          </ul>
          <p className="leading-7 text-muted-foreground">
            Each of these services has its own privacy policy governing how they handle your data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">5. Cookies and Tracking</h2>
          <p className="leading-7 text-muted-foreground">
            We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">6. Data Security</h2>
          <p className="leading-7 text-muted-foreground">
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">7. Your Rights</h2>
          <p className="leading-7 text-muted-foreground">
            You have the right to access, update, or delete the information we have on you. Most of this can be done directly within your account settings provided by Clerk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">8. Contact Us</h2>
          <p className="leading-7 text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at support@nestwell.com.
          </p>
        </section>
      </div>
    </div>
  );
}
