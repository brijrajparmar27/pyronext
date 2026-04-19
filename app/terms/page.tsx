import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pyronite",
  description: "Terms and conditions for Pyronite - Specialized Liferay DXP & Portal Solutions.",
};

export default function TermsPage() {
  return (
    <main className="container" style={{ paddingTop: "150px", paddingBottom: "8rem", minHeight: "100vh" }}>
      <div className="blog-container" style={{ margin: "0 auto" }}>
        <div className="blog-header">
          <span className="label">LEGAL</span>
          <h1>Terms and Conditions</h1>
        </div>
        
        <div className="blog-content">
          <p><strong>Effective Date:</strong> January 1, 2026</p>
          <p>
            Welcome to Pyronite. These Terms and Conditions govern your access to and use of our website (the "Site") and the Liferay DXP and Portal consulting services ("Services") provided by Pyronite ("Company," "we," "us," or "our").
            By accessing our Site or utilizing our Services, you agree to be bound by these Terms and Conditions.
          </p>

          <h2>1. Services Provided</h2>
          <p>
            Pyronite is a specialized IT consulting firm focusing on Liferay Digital Experience Platform (DXP) and enterprise portal solutions. 
            We provide strategic consulting, implementation, training, and support services to driving enterprise digital transformation.
            The specific scope of Services for any given client will be outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA).
          </p>

          <h2>2. Use of Our Website</h2>
          <p>
            You agree to use this Site for lawful purposes only and in a manner consistent with all applicable local, national, or international laws and regulations.
            You must not:
          </p>
          <ul>
            <li>Use the Site in any way that causes, or may cause, damage to the Site or impairment of the availability or accessibility of the Pyronite platform.</li>
            <li>Conduct any systematic or automated data collection activities (including scraping, data mining, data extraction) on or in relation to our Site without our express written consent.</li>
            <li>Use the Site to transmit or send unsolicited commercial communications.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on the Pyronite website, including but not limited to text, graphics, logos, images, digital downloads, data compilations, software, methodology, frameworks, and architecture patterns (particularly concerning Liferay implementations), is the property of Pyronite or its content suppliers and protected by international copyright laws.
          </p>

          <h2>4. Client Obligations</h2>
          <p>
            When engaging with Pyronite for consulting or development services, clients agree to:
          </p>
          <ul>
            <li>Provide timely, accurate, and complete information necessary for the execution of the agreed Services.</li>
            <li>Grant necessary access to systems, personnel, and resources as required for Liferay DXP deployment, auditing, or migration.</li>
            <li>Review deliverables within the timeframe stipulated in the respective Statement of Work.</li>
          </ul>

          <h2>5. Confidentiality</h2>
          <p>
            Given the nature of enterprise architecture and digital platforms, both Pyronite and the client agree to hold each other's proprietary commercial and technical information in strict confidence. This obligation extends beyond the termination of any active service agreements.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Pyronite shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul>
            <li>Your access to, use of, or inability to access or use the Site or Services.</li>
            <li>Any conduct or content of any third party on the Site or Services.</li>
            <li>Any unauthorized access, use, or alteration of your transmissions or content.</li>
          </ul>

          <h2>7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Pyronite, its parent company (CodeAlchemy), affiliates, and their respective officers, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs, or debts arising from your use of and access to the Site or your violation of any term of these Terms and Conditions.
          </p>

          <h2>8. Amendments</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. 
            By continuing to access or use our Site after any revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the local laws governing corporate businesses, without regard to its conflict of law provisions. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the competent courts in the jurisdiction Pyronite operates within.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:business@pyronite.in">business@pyronite.in</a></li>
            <li><strong>Website:</strong> <a href="/">www.pyronite.in</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
