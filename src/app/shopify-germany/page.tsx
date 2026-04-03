"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import ShopifyPricingPackages from "@/components/shopify/ShopifyPricingPackages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, ShieldCheck, Clock, Star,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Settings, Layers,
  Globe, HeadphonesIcon, Award, ChevronRight, MessageCircle, Phone,
  AlertTriangle, Send, Lock, CreditCard, FileCheck, Truck
} from "lucide-react";
import { toast } from "sonner";
import shopifyLogo from "@/assets/shopify-logo.png";

const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStep1 = (e: React.FormEvent) => { e.preventDefault(); if (email) setStep(2); };
  const handleStep2 = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); toast.success("We'll be in touch within 24 hours!"); };

  const isDark = variant === "dark";
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Vielen Dank!</p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Shopify experts will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">
            Get Free Audit <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required placeholder="Your name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option>
            <option>Under €10K</option>
            <option>€10K – €50K</option>
            <option>€50K – €250K</option>
            <option>€250K+</option>
          </select>
          <Button type="submit" className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            Get My Free Growth Plan <Send className="w-4 h-4" />
          </Button>
        </form>
      )}
    </div>
  );
};

const ShopifyGermany = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(145,40%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(145,60%,40%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <img src={shopifyLogo.src} alt="Shopify Partner" className="h-4 w-auto" /> Zertifizierter Shopify Partner
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Shopify Entwicklung für{" "}
                <span className="bg-gradient-to-r from-[hsl(145,60%,50%)] to-[hsl(165,70%,45%)] bg-clip-text text-transparent">
                  Deutsche Marken
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed" data-speakable>
                GDPR-konforme, hochkonvertierende Shopify-Stores für den deutschen Markt. Klarna, Trusted Shops & lokale Zahlungsarten inklusive.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["DSGVO-konform", "Klarna & SOFORT", "Trusted Shops", "DACH-Markt Expertise"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[hsl(145,60%,50%)]" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}><InlineLeadForm id="hero-de" variant="dark" /></motion.div>

              <motion.p variants={fadeUp} className="text-xs text-[hsl(145,60%,50%)]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Begrenzte kostenlose Audits für deutsche Marken in diesem Monat
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "€142B", label: "German E-Commerce Market 2026", icon: TrendingUp },
                { value: "87%", label: "Online Shoppers in Germany", icon: BarChart3 },
                { value: "68%", label: "Mobile Commerce Share", icon: Rocket },
                { value: "#1", label: "E-Commerce Market in Europe", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(145,60%,50%)] mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "300+", label: "Stores Launched" },
              { val: "€50M+", label: "Client Revenue Generated" },
              { val: "DACH", label: "Market Expertise" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "100%", label: "DSGVO-Konform" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <WebDevClients />

      {/* WHY SHOPIFY IN GERMANY */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Warum Shopify?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Why Shopify Is the Best Choice for German E-Commerce
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">
              Germany is Europe's largest e-commerce market at €142 billion. Shopify provides the speed, compliance, and scalability German brands need.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Lock, title: "DSGVO / GDPR Compliance", desc: "Built-in GDPR tools, cookie consent management, Impressum & Datenschutz — full German legal compliance out of the box." },
              { icon: CreditCard, title: "German Payment Methods", desc: "Klarna, SOFORT, Giropay, PayPal, Kauf auf Rechnung — all the payment methods German shoppers expect." },
              { icon: FileCheck, title: "Trusted Shops Integration", desc: "Buyer protection badges, verified reviews, and legal text packages that build trust with German consumers." },
              { icon: Globe, title: "DACH Multi-Market", desc: "Sell across Germany, Austria & Switzerland with localized content, EUR/CHF currencies, and regional shipping." },
              { icon: Truck, title: "DHL, Hermes & DPD", desc: "Native integrations with all major German carriers. Automated shipping labels, tracking, and returns." },
              { icon: Layers, title: "ERP & DATEV Integration", desc: "Connect Shopify with SAP, DATEV, lexoffice, and German accounting systems for automated bookkeeping." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Unsere Leistungen</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Shopify Services for the German Market
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Shopify Store Launch", desc: "Premium German-market stores with DSGVO compliance, local payments, and Trusted Shops from day one.", link: "/shopify-themes" },
              { icon: Rocket, title: "Shopify Plus Deutschland", desc: "Enterprise commerce for high-volume German brands. Custom checkout, B2B wholesale, and automation.", link: "/shopify-plus" },
              { icon: RefreshCw, title: "Platform Migration", desc: "Migrate from Magento, JTL, Oxid, or WooCommerce. Full SEO preservation and zero downtime." },
              { icon: BarChart3, title: "CRO & Optimization", desc: "Data-driven conversion optimization tailored to German shopper behavior and expectations." },
              { icon: Palette, title: "Custom UX Design", desc: "German-market UX with Vertrauenssiegel, transparent pricing, and Widerrufsbelehrung compliance." },
              { icon: Globe, title: "DACH Expansion", desc: "Multi-market stores for Germany, Austria & Switzerland with localized checkout and regional fulfillment." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                {s.link && (
                  <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(30,90%,45%)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready to Scale Your German E-Commerce?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free Shopify growth plan tailored to the German market. DSGVO-konform, keine Verpflichtung.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid-de" variant="dark" /></div>
        </div>
      </section>

      <ShopifyPricingPackages
        currency="€"
        prices={["750", "2,900", "7,500"]}
        headlinePrice="€750"
        descOverrides={{
          0: "Quick-launch store using a premium ready-made theme — ideal for startups entering the German market.",
        }}
        featureOverrides={{
          "Payment Gateway (PayTabs / Telr)": "Payment Gateway (Klarna / Stripe)",
          "Local UAE Shipping Setup": "Local German Shipping Setup (DHL / Hermes)",
          "Multi-Currency Support (AED, USD, EUR)": "Multi-Currency Support (EUR, USD, GBP)",
          "Multi-Language (English / Arabic)": "Multi-Language (German / English)",
        }}
      />

      {/* LOCAL CHALLENGES */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">German Market Challenges</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
              Challenges We Solve for German Brands
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "DSGVO / GDPR Compliance", desc: "German data protection is among the strictest globally. We implement compliant cookie consent, privacy policies, data deletion workflows, and Auftragsverarbeitungsverträge (AVV)." },
              { title: "Klarna & Invoice Payment", desc: "70% of German shoppers prefer Klarna or Kauf auf Rechnung. We integrate all local payment methods to maximize conversion rates." },
              { title: "Trusted Shops & Vertrauenssiegel", desc: "German consumers look for trust badges before purchasing. We handle Trusted Shops certification, EHI, and TÜV integration." },
              { title: "German Tax & Accounting", desc: "Complex VAT rules, DATEV integration, and German bookkeeping requirements. We connect Shopify with lexoffice, sevDesk, and DATEV." },
            ].map((c) => (
              <motion.div key={c.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Häufig gestellte Fragen</motion.h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Is Shopify GDPR-compliant for German stores?", a: "Yes. Shopify provides GDPR-compliant data handling, cookie consent, and privacy tools. We implement Trusted Shops integration, Impressum, and Datenschutz pages for full German legal compliance." },
              { q: "Can you integrate Klarna and German payment methods?", a: "Absolutely. We integrate Klarna, SOFORT, Giropay, PayPal, and all major German payment methods including invoice payment (Kauf auf Rechnung)." },
              { q: "How much does Shopify development cost in Germany?", a: "Standard stores start at €5,000–€10,000. Custom Plus implementations range from €25,000–€60,000+. We provide detailed quotes after a free consultation." },
              { q: "Do you support Trusted Shops certification?", a: "Yes. We handle full Trusted Shops integration including buyer protection badge, review collection, and legal text generation." },
              { q: "Can you build a multilingual store for DACH markets?", a: "Yes. We build stores supporting German, Austrian, and Swiss markets with localized content, EUR/CHF currencies, and regional shipping rules." },
              { q: "How long does it take to launch a Shopify store in Germany?", a: "Standard stores launch in 4–6 weeks. Complex Shopify Plus builds with ERP integration take 8–14 weeks." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(145,40%,12%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Starten Sie Ihren Shopify-Erfolg in Deutschland
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">
              Join 300+ brands that chose Globify. Get your free Shopify growth plan — DSGVO-konform, keine Verpflichtung.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final-de" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="w-4 h-4" /> Book Strategy Call
              </Button>
              <a href="https://wa.me/919544086877?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopify%20development%20for%20Germany." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs text-white/40 mt-6">🔒 Your data is secure. We never share your information.</motion.p>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-dev" links={["shopify-themes", "shopify-plus", "shopify-apps", "ecommerce", "digital-marketing", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default ShopifyGermany;
