import { Switch, Route, Router, useLocation } from "wouter";
import { useState, useEffect, useCallback } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEO, seoData } from "@/components/SEO";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function useHashLocation(): [string, (to: string) => void] {
  const [loc, setLoc] = useState(() => window.location.hash.slice(1) || "/");

  useEffect(() => {
    const handler = () => setLoc(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate];
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function HomePage() {
  return (
    <>
      <SEO {...seoData.home} />
      <Home />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <SEO {...seoData.services} />
      <Services />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <SEO {...seoData.pricing} />
      <Pricing />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <SEO {...seoData.about} />
      <About />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <SEO {...seoData.contact} />
      <Contact />
    </>
  );
}

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router hook={useHashLocation}>
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
