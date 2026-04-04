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
  ArrowRight, CheckCircle, TrendingUp, Zap, Clock,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette,
  Globe, ChevronRight, MessageCircle, Phone,
  Send, Lock, CreditCard, FileCheck, Truck, Layers
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
  if (submitted) return (<div className="flex flex-col items-center gap-3 py-6"><CheckCircle className="w-12 h-12 text-primary" /><p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>!شكراً لك</p><p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Shopify experts will reach out within 24 hours.</p></div>);
  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">Get Free Audit <ArrowRight className="w-4 h-4" /></Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required placeholder="Your name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select required className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option><option>Under KWD 5K</option><option>KWD 5K – KWD 20K</option><option>KWD 20K – KWD 100K</option><option>KWD 100K+</option>
          </select>
          <Button type="submit" className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">Get My Free Growth Plan <Send className="w-4 h-4" /></Button>
        </form>
      )}
    </div>
  );
};

const ShopifyKuwait = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(175,30%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(175,60%,45%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <img src={shopifyLogo.src} alt="Shopify Partner" className="h-4 w-auto" /> شريك Shopify معتمد
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                تطوير Shopify لـ{" "}<span className="bg-gradient-to-r from-[hsl(175,60%,45%)] to-[hsl(195,70%,50%)] bg-clip-text text-transparent">السوق الكويتي</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed" data-speakable>
                High-converting Shopify stores for Kuwait. KNET payment integration, Arabic/English bilingual support, and GCC-wide expansion capabilities.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["KNET Integration", "Arabic RTL", "Tap Payments", "GCC Expansion"].map((t) => (<span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[hsl(175,60%,45%)]" /> {t}</span>))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero-kw" variant="dark" /></motion.div>
              <motion.p variants={fadeUp} className="text-xs text-[hsl(175,60%,45%)]/80 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Limited free audits for Kuwaiti brands this month</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "KWD 3B+", label: "Kuwait E-Commerce Market", icon: TrendingUp },
                { value: "98%", label: "Internet Penetration", icon: BarChart3 },
                { value: "82%", label: "Mobile Commerce Share", icon: Rocket },
                { value: "#2", label: "GCC Per Capita E-Commerce", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(175,60%,45%)] mb-3" /><p className="text-3xl font-bold text-white">{stat.value}</p><p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card border-b border-border py-6"><div className="container mx-auto px-6"><div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {[{ val: "300+", label: "Stores Launched" }, { val: "KWD 15M+", label: "Client Revenue Generated" }, { val: "GCC", label: "Market Expertise" }, { val: "4.9/5", label: "Client Rating" }, { val: "100%", label: "KNET Ready" }].map((s) => (<div key={s.label} className="text-center"><p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p><p className="text-xs text-muted mt-0.5">{s.label}</p></div>))}
      </div></div></section>

      <CaseStudiesSection />
      <WebDevClients />

      <section className="py-16 md:py-24 bg-background"><div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">لماذا Shopify؟</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Why Shopify Is Ideal for Kuwait E-Commerce</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted max-w-2xl mx-auto">Kuwait has one of the highest per-capita e-commerce spend rates in the GCC. Shopify gives Kuwaiti brands speed, KNET integration, and scale.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: CreditCard, title: "KNET & Tap Payments", desc: "Native KNET debit integration, Tap Payments, Apple Pay, and cash-on-delivery — the payment methods Kuwaiti shoppers trust." },
            { icon: Lock, title: "Kuwait Commerce Compliance", desc: "Full compliance with Kuwait Commerce Law, consumer protection regulations, and e-commerce licensing requirements." },
            { icon: FileCheck, title: "Arabic RTL Storefront", desc: "Bilingual Arabic/English stores with proper RTL layout, Kuwaiti dialect support, and localized checkout." },
            { icon: Globe, title: "GCC Multi-Market", desc: "Expand from Kuwait to KSA, UAE, Bahrain & Qatar with multi-currency, regional shipping, and localized content." },
            { icon: Truck, title: "Aramex & Fetchr", desc: "Integrations with Aramex, Fetchr, and local Kuwaiti couriers for same-day delivery and COD." },
            { icon: Layers, title: "ERP Integration", desc: "Connect Shopify with local accounting systems and ERPs for automated inventory and financial reporting." },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"><item.icon className="w-8 h-8 text-primary mb-4" /><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.desc}</p></motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="py-16 md:py-24 bg-card border-y border-border"><div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">خدماتنا</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Shopify Services for Kuwait</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: ShoppingCart, title: "Shopify Store Launch", desc: "Premium Kuwaiti-market stores with KNET, Arabic RTL, and local compliance from day one.", link: "/shopify-themes" },
            { icon: Rocket, title: "Shopify Plus Kuwait", desc: "Enterprise commerce for high-volume Kuwaiti brands with custom checkout and automation.", link: "/shopify-plus" },
            { icon: RefreshCw, title: "Platform Migration", desc: "Migrate from WooCommerce, Magento, or custom platforms. Full SEO preservation." },
            { icon: BarChart3, title: "CRO & Optimization", desc: "Conversion optimization tailored to Kuwaiti shopper behavior and preferences." },
            { icon: Palette, title: "Custom Arabic UX", desc: "Kuwaiti-market UX with RTL layout, Arabic design, and local trust signals." },
            { icon: Globe, title: "GCC Expansion", desc: "Multi-market stores for Kuwait and the broader GCC region." },
          ].map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
              <s.icon className="w-8 h-8 text-primary mb-4" /><h3 className="font-bold text-foreground mb-2">{s.title}</h3><p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
              {s.link && <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ChevronRight className="w-3 h-3" /></Link>}
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(175,60%,40%)]"><div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Ready to Scale Your Kuwaiti E-Commerce?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free Shopify growth plan for the Kuwait market.</p>
        <div className="flex justify-center"><InlineLeadForm id="mid-kw" variant="dark" /></div>
      </div></section>

      <ShopifyPricingPackages currency="KWD" prices={["250", "1,000", "2,500"]} headlinePrice="KWD 250"
        descOverrides={{ 0: "Quick-launch store — ideal for startups entering the Kuwaiti market." }}
        featureOverrides={{ "Payment Gateway (PayTabs / Telr)": "Payment Gateway (KNET / Tap)", "Local UAE Shipping Setup": "Local Kuwait Shipping (Aramex / Fetchr)", "Multi-Currency Support (AED, USD, EUR)": "Multi-Currency Support (KWD, USD, AED)", "Multi-Language (English / Arabic)": "Multi-Language (Arabic / English)" }}
      />

      <section className="py-16 md:py-24 section-dark"><div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Kuwait Market Challenges</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">Challenges We Solve for Kuwaiti Brands</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "KNET Payment Integration", desc: "KNET is the dominant payment method in Kuwait. We ensure seamless integration with fallback options for international cards." },
            { title: "Arabic RTL & Bilingual UX", desc: "Kuwaiti consumers expect a native Arabic experience with proper RTL layout and culturally relevant design patterns." },
            { title: "Last-Mile Delivery", desc: "Kuwait's delivery infrastructure requires integration with local couriers for same-day and next-day delivery with COD support." },
            { title: "Kuwait Commerce Regulations", desc: "Compliance with Kuwait Commerce Law, consumer protection, and e-commerce licensing for legal operation." },
          ].map((c) => (
            <motion.div key={c.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-bold text-white mb-2">{c.title}</h3><p className="text-sm text-white/60 leading-relaxed">{c.desc}</p></motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="py-16 md:py-24 bg-card border-y border-border"><div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">الأسئلة الشائعة</motion.h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Can you integrate KNET with Shopify in Kuwait?", a: "Yes. We integrate KNET, Tap Payments, Apple Pay, and all major Kuwaiti payment methods." },
            { q: "How much does Shopify development cost in Kuwait?", a: "Starter stores begin at KWD 250. Growth packages at KWD 1,000. Enterprise from KWD 2,500+." },
            { q: "Do you build Arabic RTL stores for Kuwait?", a: "Yes. Fully bilingual Arabic/English stores with proper RTL layout and localized checkout." },
            { q: "Can you integrate Kuwaiti shipping carriers?", a: "Yes. Aramex, Fetchr, and local couriers with COD and same-day delivery support." },
            { q: "Is Shopify suitable for the Kuwaiti market?", a: "Absolutely. Shopify supports KWD, Arabic, and integrates with all major Kuwaiti providers." },
            { q: "How long to launch a Shopify store in Kuwait?", a: "Standard stores launch in 3–5 weeks. Complex builds take 8–12 weeks." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted leading-relaxed pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div></section>

      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(175,30%,12%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">ابدأ نجاحك مع Shopify في الكويت</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">Join 300+ brands that chose Globify. Get your free Shopify growth plan for Kuwait.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final-kw" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"><Phone className="w-4 h-4" /> Book Strategy Call</Button>
              <a href="https://wa.me/919544086877?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopify%20development%20for%20Kuwait." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-dev" links={["shopify-themes", "shopify-plus", "shopify-apps", "ecommerce", "digital-marketing", "ai-automation"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default ShopifyKuwait;
