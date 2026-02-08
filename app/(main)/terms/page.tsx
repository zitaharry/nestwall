import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Nestwell",
  description: "Terms and conditions for using the Nestwell real estate platform.",
};

export default function TermsPage() {
  const lastUpdated = "February 8, 2026";

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <div className="space-y-6">
        <div className="space-y-2 border-b pb-8">
          <h1 className="text-4xl font-bold tracking-tight font-heading">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <section className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold font-heading">1. Introduction</h2>
          <p className="leading-7 text-muted-foreground">
            Welcome to Nestwell ("we," "our," or "us"). By accessing or using our platform, located at nestwell.com (the "Site"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <p className="leading-7 text-muted-foreground italic">
            Disclaimer: This project is for educational purposes only. We are not affiliated with Zillow Group, Inc.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">2. Description of Service</h2>
          <p className="leading-7 text-muted-foreground">
            Nestwell is a modern real estate platform that connects homebuyers with properties and real estate professionals. We provide tools for searching listings, saving favorites, and contacting agents.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">3. User Accounts</h2>
          <p className="leading-7 text-muted-foreground">
            To access certain features, such as saving favorites or listing properties, you must create an account via Clerk. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">4. Agent Subscriptions</h2>
          <p className="leading-7 text-muted-foreground">
            Real estate agents may subscribe to our "Agent Plan" for a monthly fee of $29. This subscription includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Unlimited property listings with image uploads</li>
            <li>Access to an Analytics Dashboard</li>
            <li>Lead management and professional profile features</li>
          </ul>
          <p className="leading-7 text-muted-foreground mt-2">
            Billing is managed through Clerk. Subscriptions are billed in advance on a monthly basis and are non-refundable except as required by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">5. Prohibited Activities</h2>
          <p className="leading-7 text-muted-foreground">
            Users agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Post false, inaccurate, or misleading property information.</li>
            <li>Use the service for any illegal or unauthorized purpose.</li>
            <li>Attempt to interfere with the proper working of the platform.</li>
            <li>Scrape or extract data from the platform without prior written consent.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">6. Intellectual Property</h2>
          <p className="leading-7 text-muted-foreground">
            All content on the platform, including text, graphics, logos, and software, is the property of Nestwell or its content suppliers and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">7. Limitation of Liability</h2>
          <p className="leading-7 text-muted-foreground">
            Nestwell provides the platform on an "as-is" basis. We do not guarantee the accuracy of property listings or the availability of the service. We are not liable for any damages arising from your use of the platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">8. Changes to Terms</h2>
          <p className="leading-7 text-muted-foreground">
            We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting the new terms on this page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold font-heading">9. Contact Us</h2>
          <p className="leading-7 text-muted-foreground">
            If you have any questions about these Terms, please contact us at support@nestwell.com.
          </p>
        </section>
      </div>
    </div>
  );
}
