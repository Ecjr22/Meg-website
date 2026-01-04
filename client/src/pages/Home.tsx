import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { IProvide } from "@/components/sections/IProvide";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <IProvide />
      <PricingPreview />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </Layout>
  );
}
