import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToolTicker } from "@/components/tool-ticker";
import { WorkSection } from "@/components/work-section";

/** The whole page, as a list of its sections in the order they appear. */
export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ToolTicker />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
