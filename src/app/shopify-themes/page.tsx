"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Palette, Smartphone, Zap, ShoppingCart, BarChart3, Globe, Layers, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CrossLinkSection from "@/components/CrossLinkSection";

const stats = [
  { value: "300+", label: "Stores Designed" },
  { value: "45%", label: "Avg Conversion Lift" },
  { value: "2.1s", label: "Avg Load Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  { icon: Palette, title: "Bespoke Theme Design", desc: "Pixel-perfect storefronts crafted from scratch to match your brand identity, audience behavior, and conversion goals, no cookie-cutter templates." },
  { icon: Smartphone, title: "Mobile-First UX", desc: "70% of e-commerce traffic is mobile. Every theme we build is designed mobile-first with thumb-friendly navigation and lightning-fast checkout." },
  { icon: Zap, title: "Speed Optimization", desc: "Sub-2-second load times through optimized Liquid code, lazy loading, minimal JavaScript, and CDN-ready asset delivery." },
  { icon: ShoppingCart, title: "Conversion-Optimized Checkout", desc: "Streamlined cart and checkout flows with trust signals, urgency elements, and frictionless payment options to maximize AOV." },
  { icon: BarChart3, title: "A/B Testing Integration", desc: "Built-in split-testing capabilities so you can continuously optimize layouts, CTAs, and product pages for higher conversions." },
  { icon: Globe, title: "Multi-Language & Multi-Currency", desc: "Internationalized themes supporting RTL layouts, dynamic currency conversion, and localized content for UAE, India, and global markets." },
];

const process = [
  { step: "01", title: "Brand & UX Audit", desc: "Deep-dive into your brand, competitors, and customer journey to define the design strategy." },
  { step: "02", title: "Wireframes & Prototyping", desc: "Interactive prototypes tested with real users before a single line of code is written." },
  { step: "03", title: "Theme Development", desc: "Custom Liquid + Shopify 2.0 sections built with performance and SEO baked in." },
  { step: "04", title: "QA & Launch", desc: "Cross-browser testing, speed audits, and a guided launch with 30-day post-launch support." },
];

const results = [
  { metric: "3.2x", label: "Conversion Rate Increase", brand: "Fashion D2C brand in UAE" },
  { metric: "68%", label: "Faster Page Load", brand: "Health & wellness Shopify store" },
  { metric: "$2.4M", label: "Revenue in First Year", brand: "Luxury accessories brand launch" },
];

const ShopifyThemes = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead'); };

  return (
    <div className="min-h-screen">
      
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--hero-foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Custom Shopify Themes</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Your Store Deserves More Than a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Template</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                Bespoke Shopify storefronts engineered for conversions, not just aesthetics. We design every pixel to turn browsers into buyers and first-timers into loyalists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get a Custom Theme Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  See Our Work
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Shopify 2.0 Certified", "Mobile-First Design", "Sub-2s Load Times"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-hero-foreground/40"><CheckCircle2 className="w-3.5 h-3.5 text-primary" />{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-section-dark border-y border-section-dark-foreground/[0.06] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-section-dark-foreground/40 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Themes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Why Go Custom?</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">Templates Cost You Revenue</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">Generic themes mean generic conversions. Stores using custom themes see 2–4× higher conversion rates because every element is tailored to their audience.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors group">
                <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground leading-[1.1]">From Concept to Conversion in 4 Steps</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative p-6 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/[0.03]">
                <span className="text-4xl font-bold text-primary/20 mb-3 block">{p.step}</span>
                <h3 className="font-semibold text-section-dark-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-section-dark-foreground/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1]">Numbers That Speak Louder Than Pixels</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {results.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-2xl border border-border bg-card">
                <div className="text-4xl font-bold text-primary mb-2">{r.metric}</div>
                <div className="font-semibold text-sm mb-1">{r.label}</div>
                <div className="text-xs text-muted-foreground">{r.brand}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Your Custom Theme</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready for a Store That<br />Actually Converts?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Tell us about your brand and we'll respond within 24 hours with a theme strategy, conversion roadmap, and transparent pricing.</p>
              <div className="space-y-4 mb-10">
                {["Free UX audit of your current store", "Custom theme mockup within 5 days", "Shopify 2.0 sections & performance guarantee", "30-day post-launch support included"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our design team will review your requirements and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label>
                      <input required type="email" placeholder="john@brand.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Current Shopify Store URL</label>
                    <input type="url" placeholder="https://yourstore.myshopify.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">What's your biggest design challenge?</label>
                    <textarea rows={3} placeholder="e.g., Low mobile conversions, outdated theme, poor brand consistency..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Budget Range</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select range</option>
                      <option>$5K – $15K</option>
                      <option>$15K – $30K</option>
                      <option>$30K – $50K</option>
                      <option>$50K+</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    <Send className="w-4 h-4" /> Get My Custom Theme Quote
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-themes" links={["shopify-dev", "shopify-plus", "shopify-apps", "ecommerce", "digital-marketing", "cro"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ShopifyThemes;
