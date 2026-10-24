import type { Metadata } from "next";
import { Cookie, AlertCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Information regarding the cookies utilized by Mattu Bridge and how visitors can manage cookie preferences.",
};

const cookieItems = [
  {
    title: "1. What Are Cookies",
    body: "Cookies are small text files placed on your device when you visit a website. They allow the website to recognize your browser, maintain session state, and deliver secure functionality.",
  },
  {
    title: "2. Strictly Necessary (Essential) Cookies",
    body: "These cookies are indispensable for the technical operation of the website, user authentication, form validation, and security tokens. They do not require prior consent under GDPR and cannot be disabled without impairing core functionality.",
  },
  {
    title: "3. Optional Analytical Cookies",
    body: "With your consent, non-essential performance cookies may be utilized to measure aggregated visitor counts and user navigation flow. This helps us optimize user guidance and resolve navigation bottlenecks. These cookies are disabled by default until you grant consent.",
  },
  {
    title: "4. Managing and Revoking Cookie Preferences",
    body: "You can modify or revoke your cookie choices at any time through your browser settings or by clearing your local storage preferences. Most web browsers allow you to block all cookies or alert you when a cookie is being saved.",
  },
  {
    title: "5. Policy Updates",
    body: "We may update this Cookie Policy from time to time to reflect technical modifications or legal developments. Updates are effective upon publication on this page.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Privacy &amp; Settings"
        title="Cookie Policy"
        description="Transparent information on how Mattu Bridge uses cookies and tracking technologies under European data protection legislation."
        imageUrl={images.viennaBuilding}
      />

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Cookie Compliance Notice:</p>
              <p>
                Under our strict GDPR policy, non-essential tracking cookies remain
                deactivated by default until explicit affirmative consent is provided.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {cookieItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 pb-6 last:border-b-0">
                <h2 className="font-display text-xl font-bold text-gray-950 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
