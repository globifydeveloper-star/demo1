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
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>!شكراً لك</p>
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
          <Input placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option>
            <option>Under SAR 50K</option>
            <option>SAR 50K – SAR 200K</option>
            <option>SAR 200K – SAR 1M</option>
            <option>SAR 1M+</option>
          </select>
          <Button type="submit" className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            Get My Free Growth Plan <Send className="w-4 h-4" />
          </Button>
        </form>
      )}
    </div>
  );
};

const ShopifyKSA = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(45,40%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(45,80%,50%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <img src={shopifyLogo.src} alt="Shopify Partner" className="h-4 w-auto" /> شريك Shopify معتمد
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                تطوير Shopify لـ{" "}
                <span className="bg-gradient-to-r from-[hsl(45,80%,50%)] to-[hsl(35,90%,55%)] bg-clip-text text-transparent">
                  السوق السعودي
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed" data-speakable>
                ZATCA-compliant, high-converting Shopify stores for Saudi Arabia. Mada, STC Pay, Tamara BNPL & full Arabic/English support included.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["ZATCA Compliant", "Mada & STC Pay", "Arabic RTL Support", "Vision 2030 Ready"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[hsl(45,80%,50%)]" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}><InlineLeadForm id="hero-ksa" variant="dark" /></motion.div>

              <motion.p variants={fadeUp} className="text-xs text-[hsl(45,80%,50%)]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Limited free audits for Saudi brands this month
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "SAR 80B+", label: "Saudi E-Commerce Market 2026", icon: TrendingUp },
                { value: "72%", label: "Internet Shoppers in KSA", icon: BarChart3 },
                { value: "76%", label: "Mobile Commerce Share", icon: Rocket },
                { value: "#1", label: "GCC E-Commerce Market", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(45,80%,50%)] mb-3" />
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
              { val: "SAR 180M+", label: "Client Revenue Generated" },
              { val: "GCC", label: "Market Expertise" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "100%", label: "ZATCA Compliant" },
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

      {/* WHY SHOPIFY IN KSA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">لماذا Shopify؟</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Why Shopify Is the Best Choice for Saudi E-Commerce
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">
              Saudi Arabia's e-commerce market exceeds SAR 80 billion. Shopify provides the speed, ZATCA compliance, and scalability Saudi brands need under Vision 2030.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Lock, title: "ZATCA E-Invoicing Compliance", desc: "Full Phase 2 ZATCA integration with QR code generation, XML e-invoicing, and 15% VAT automation for Saudi tax compliance." },
              { icon: CreditCard, title: "Saudi Payment Methods", desc: "Mada debit cards, STC Pay, Apple Pay, Tamara BNPL, and tabby — all the payment methods Saudi shoppers expect." },
              { icon: FileCheck, title: "Arabic RTL Storefront", desc: "Fully bilingual Arabic/English stores with proper RTL layout, Arabic typography, and localized checkout experiences." },
              { icon: Globe, title: "GCC Expansion Ready", desc: "Sell across Saudi Arabia, UAE, Bahrain & Kuwait with multi-currency support, regional shipping, and localized content." },
              { icon: Truck, title: "SMSA, Aramex & Naqel", desc: "Native integrations with all major Saudi carriers. Cash-on-delivery, same-day delivery, and automated tracking." },
              { icon: Layers, title: "ERP & SAP Integration", desc: "Connect Shopify with SAP, Oracle, Microsoft Dynamics, and Saudi accounting systems for automated operations." },
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
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">خدماتنا</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Shopify Services for the Saudi Market
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Shopify Store Launch", desc: "Premium Saudi-market stores with ZATCA compliance, Mada payments, and Arabic RTL from day one.", link: "/shopify-themes" },
              { icon: Rocket, title: "Shopify Plus KSA", desc: "Enterprise commerce for high-volume Saudi brands. Custom checkout, B2B wholesale, and automation.", link: "/shopify-plus" },
              { icon: RefreshCw, title: "Platform Migration", desc: "Migrate from Magento, Salla, Zid, or WooCommerce. Full SEO preservation and zero downtime." },
              { icon: BarChart3, title: "CRO & Optimization", desc: "Data-driven conversion optimization tailored to Saudi shopper behavior and cultural expectations." },
              { icon: Palette, title: "Custom Arabic UX Design", desc: "Saudi-market UX with RTL layout, Arabic calligraphy, trust signals, and Vision 2030 aesthetics." },
              { icon: Globe, title: "GCC Multi-Market", desc: "Multi-market stores for KSA, UAE & GCC with localized checkout and regional fulfillment centers." },
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
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(45,80%,45%)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready to Scale Your Saudi E-Commerce?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free Shopify growth plan tailored to the Saudi market. ZATCA-compliant, no obligation.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid-ksa" variant="dark" /></div>
        </div>
      </section>

      <ShopifyPricingPackages
        currency="SAR"
        prices={["3,000", "12,000", "30,000"]}
        headlinePrice="SAR 3,000"
        descOverrides={{
          0: "Quick-launch store using a premium ready-made theme — ideal for startups entering the Saudi market.",
        }}
        featureOverrides={{
          "Payment Gateway (PayTabs / Telr)": "Payment Gateway (Mada / STC Pay)",
          "Local UAE Shipping Setup": "Local Saudi Shipping Setup (SMSA / Aramex)",
          "Multi-Currency Support (AED, USD, EUR)": "Multi-Currency Support (SAR, USD, AED)",
          "Multi-Language (English / Arabic)": "Multi-Language (Arabic / English)",
        }}
      />

      {/* LOCAL CHALLENGES */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Saudi Market Challenges</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
              Challenges We Solve for Saudi Brands
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "ZATCA E-Invoicing Compliance", desc: "Saudi Arabia's ZATCA Phase 2 requires compliant e-invoicing with QR codes and XML reporting. We implement full integration so your store stays compliant automatically." },
              { title: "Mada & Local Payments", desc: "Over 60% of Saudi shoppers prefer Mada debit cards. We integrate Mada, STC Pay, Tamara BNPL, and cash-on-delivery to maximize your conversion rate." },
              { title: "Arabic RTL & Bilingual UX", desc: "Saudi consumers expect a seamless Arabic experience. We build proper RTL stores with Arabic typography, cultural design patterns, and bilingual navigation." },
              { title: "Saudi Tax & VAT Automation", desc: "15% VAT compliance, ZATCA reporting, and integration with Saudi accounting platforms like Qoyod and Wafeq for automated financial operations." },
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">الأسئلة الشائعة</motion.h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Is Shopify compliant with ZATCA e-invoicing in Saudi Arabia?", a: "Yes. We implement ZATCA Phase 2 e-invoicing integration, QR code generation on invoices, and full VAT 15% compliance for all Shopify stores in KSA." },
              { q: "Can you integrate Mada and STC Pay with Shopify?", a: "Absolutely. We integrate Mada debit cards, STC Pay, Apple Pay, Tamara BNPL, and all major Saudi payment methods for maximum conversion." },
              { q: "How much does Shopify development cost in Saudi Arabia?", a: "Starter stores begin at SAR 3,000. Growth packages at SAR 12,000. Enterprise Shopify Plus implementations from SAR 30,000+." },
              { q: "Do you build Arabic RTL Shopify stores?", a: "Yes. We build fully bilingual Arabic/English stores with proper RTL layout, Arabic typography, and localized checkout experiences." },
              { q: "Can you integrate Saudi shipping carriers with Shopify?", a: "Yes. We integrate SMSA Express, Aramex, Naqel, and J&T Express with automated tracking and cash-on-delivery support." },
              { q: "How long does it take to launch a Shopify store in KSA?", a: "Standard stores launch in 3–5 weeks. Complex Shopify Plus builds with ERP and ZATCA integration take 8–12 weeks." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(45,40%,12%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              ابدأ نجاحك مع Shopify في السعودية
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">
              Join 300+ brands that chose Globify. Get your free Shopify growth plan — ZATCA-compliant, no obligation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final-ksa" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="w-4 h-4" /> Book Strategy Call
              </Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopify%20development%20for%20Saudi%20Arabia." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors">
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

export default ShopifyKSA;
