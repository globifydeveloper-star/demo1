"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Server, Layers, Globe, Zap, ShieldCheck, Code2, BarChart3, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CrossLinkSection from "@/components/CrossLinkSection";

const stats = [
  { value: "$500M+", label: "GMV Managed" },
  { value: "40+", label: "Plus Stores" },
  { value: "99.99%", label: "Uptime" },
  { value: "< 200ms", label: "API Response" },
];

const capabilities = [
  { icon: Server, title: "Shopify Plus Migration", desc: "Seamless migration from Magento, WooCommerce, or custom platforms to Shopify Plus, preserving SEO equity, customer data, and order history." },
  { icon: Layers, title: "Headless Commerce (Hydrogen)", desc: "Decoupled storefronts built on Hydrogen/Oxygen or Next.js, powered by the Storefront API for unlimited design freedom and blazing speed." },
  { icon: Globe, title: "Multi-Store & Expansion", desc: "Shopify Plus expansion stores for international markets, localized pricing, language, payments, and tax compliance across 50+ countries." },
  { icon: Zap, title: "Shopify Flow & Launchpad", desc: "Automated workflows for flash sales, loyalty tiers, inventory routing, and fraud flagging, reducing manual ops by up to 80%." },
  { icon: ShieldCheck, title: "B2B & Wholesale Channels", desc: "Dedicated wholesale storefronts with volume pricing, net payment terms, quick-order forms, and company account management." },
  { icon: Code2, title: "Checkout Extensibility", desc: "Custom checkout experiences using Shopify Functions, dynamic discounts, shipping rules, payment customizations, and post-purchase upsells." },
];

const headlessVsTheme = [
  { feature: "Design Freedom", theme: "Limited to Liquid", headless: "Unlimited (React/Next.js)" },
  { feature: "Page Speed", theme: "Good (2–3s)", headless: "Exceptional (<1s)" },
  { feature: "Omnichannel", theme: "Web only", headless: "Web, mobile, kiosk, IoT" },
  { feature: "Personalization", theme: "Basic", headless: "AI-driven, real-time" },
  { feature: "SEO Control", theme: "Standard", headless: "Full SSR/SSG control" },
  { feature: "Development Cost", theme: "Lower", headless: "Higher (justified by scale)" },
];

const process = [
  { step: "01", title: "Platform Assessment", desc: "We audit your current stack, traffic patterns, and growth trajectory to confirm Plus/headless is the right move." },
  { step: "02", title: "Architecture Blueprint", desc: "Detailed technical architecture covering APIs, data flows, third-party integrations, and deployment strategy." },
  { step: "03", title: "Phased Build & Migrate", desc: "Incremental migration with zero-downtime cutover. We move data, redirect URLs, and validate every touchpoint." },
  { step: "04", title: "Optimize & Scale", desc: "Post-launch performance tuning, CDN configuration, and growth automation setup for sustained scaling." },
];

const ShopifyPlus = () => {
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Shopify Plus & Headless Commerce</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Enterprise Commerce Without the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Enterprise Headaches</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                Shopify Plus and headless architecture for brands doing $1M+ in revenue that need unlimited customization, global scalability, and sub-second page loads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get an Enterprise Assessment <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  See Headless Demo
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Shopify Plus Partner", "Hydrogen Certified", "Enterprise SLA"].map((item) => (
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

      {/* Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Enterprise Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">Everything You Need to Dominate at Scale</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">Shopify Plus gives you the platform. We give you the strategy, architecture, and execution to extract maximum ROI from it.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors group">
                <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Headless vs Theme Comparison */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Headless vs Traditional</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground leading-[1.1]">When Does Headless Make Sense?</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-section-dark-foreground/10">
                  <th className="text-left py-4 px-4 text-section-dark-foreground/60 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-section-dark-foreground/60 font-medium">Traditional Theme</th>
                  <th className="text-center py-4 px-4 text-primary font-semibold">Headless (Hydrogen)</th>
                </tr>
              </thead>
              <tbody>
                {headlessVsTheme.map((row) => (
                  <tr key={row.feature} className="border-b border-section-dark-foreground/5">
                    <td className="py-3 px-4 text-section-dark-foreground/80 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-section-dark-foreground/50">{row.theme}</td>
                    <td className="py-3 px-4 text-center text-section-dark-foreground/90">{row.headless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Migration & Launch</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1]">Zero-Downtime Migration in 4 Phases</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
                <span className="text-4xl font-bold text-primary/20 mb-3 block">{p.step}</span>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Enterprise Consultation</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready to Move to<br />Shopify Plus?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free platform assessment and migration roadmap. We'll analyze your current setup and show you the ROI of upgrading to Plus or going headless.</p>
              <div className="space-y-4">
                {["Free platform assessment & ROI analysis", "Migration roadmap with zero-downtime plan", "Headless vs traditional recommendation", "Enterprise SLA & dedicated support team"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our enterprise team will review your requirements and respond within 24 hours with a detailed assessment.</p>
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
                      <input required type="email" placeholder="john@enterprise.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Current Platform *</label>
                    <select required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select platform</option>
                      <option>Shopify (Basic/Standard)</option>
                      <option>Magento / Adobe Commerce</option>
                      <option>WooCommerce</option>
                      <option>BigCommerce</option>
                      <option>Custom / Headless</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Annual Revenue *</label>
                    <select required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select range</option>
                      <option>$500K – $1M</option>
                      <option>$1M – $5M</option>
                      <option>$5M – $20M</option>
                      <option>$20M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">What are your primary goals?</label>
                    <textarea rows={3} placeholder="e.g., Migrate to Plus, go headless, expand internationally, reduce page load times..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all">
                    <Send className="w-4 h-4" /> Get Your Free Enterprise Assessment
                  </button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-plus" links={["shopify-dev", "shopify-themes", "shopify-apps", "ecommerce", "erp", "ai-automation"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ShopifyPlus;
