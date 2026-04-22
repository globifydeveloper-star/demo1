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
import { ArrowRight, CheckCircle, TrendingUp, Zap, Clock, BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Globe, ChevronRight, MessageCircle, Phone, Send, Lock, CreditCard, FileCheck, Truck, Layers } from "lucide-react";
import { toast } from "sonner";
import shopifyLogo from "@/assets/shopify-logo.png";

const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const [step, setStep] = useState(1); const [email, setEmail] = useState(""); const [submitted, setSubmitted] = useState(false);
  const handleStep1 = (e: React.FormEvent) => { e.preventDefault(); if (email) setStep(2); };
  const handleStep2 = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); toast.success("¡Gracias! We'll be in touch within 24 hours!"); };
  const isDark = variant === "dark";
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";
  if (submitted) return (<div className="flex flex-col items-center gap-3 py-6"><CheckCircle className="w-12 h-12 text-primary" /><p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>¡Gracias!</p><p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Shopify experts will reach out within 24 hours.</p></div>);
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
            <option value="">Monthly revenue range</option><option>Under €10K</option><option>€10K – €50K</option><option>€50K – €250K</option><option>€250K+</option>
          </select>
          <Button type="submit" className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">Get My Free Growth Plan <Send className="w-4 h-4" /></Button>
        </form>
      )}
    </div>
  );
};

const ShopifySpain = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(0,40%,12%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(0,80%,50%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(45,90%,50%)]/10 blur-[100px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <img src={shopifyLogo.src} alt="Shopify Partner" className="h-4 w-auto" /> Partner Certificado de Shopify
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Desarrollo Shopify para{" "}<span className="bg-gradient-to-r from-[hsl(0,80%,50%)] to-[hsl(45,90%,50%)] bg-clip-text text-transparent">Marcas Españolas</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed" data-speakable>
                GDPR/LOPD-compliant Shopify stores for Spain. Bizum, Redsys, Correos & SEUR. Full Spanish/English bilingual support.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["LOPD/GDPR", "Bizum & Redsys", "Correos Integration", "LATAM Expansion"].map((t) => (<span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[hsl(0,80%,50%)]" /> {t}</span>))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero-es" variant="dark" /></motion.div>
              <motion.p variants={fadeUp} className="text-xs text-[hsl(0,80%,50%)]/80 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Auditorías gratuitas limitadas para marcas españolas</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "€72B", label: "Spain E-Commerce Market 2026", icon: TrendingUp },
                { value: "76%", label: "Online Shoppers in Spain", icon: BarChart3 },
                { value: "62%", label: "Mobile Commerce Share", icon: Rocket },
                { value: "#4", label: "E-Commerce Market in Europe", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(0,80%,50%)] mb-3" /><p className="text-3xl font-bold text-white">{stat.value}</p><p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card border-b border-border py-6"><div className="container mx-auto px-6"><div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {[{ val: "300+", label: "Stores Launched" }, { val: "€30M+", label: "Client Revenue" }, { val: "EU", label: "Market Expertise" }, { val: "4.9/5", label: "Rating" }, { val: "100%", label: "LOPD Compliant" }].map((s) => (<div key={s.label} className="text-center"><p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p><p className="text-xs text-muted mt-0.5">{s.label}</p></div>))}
      </div></div></section>

      <CaseStudiesSection /><WebDevClients />

      <section className="py-16 md:py-24 bg-background"><div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">¿Por qué Shopify?</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Why Shopify for Spanish E-Commerce</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: CreditCard, title: "Bizum & Redsys", desc: "Bizum mobile payments, Redsys card processing, Sequra BNPL — all Spanish payment methods." },
            { icon: Lock, title: "LOPD/GDPR Compliance", desc: "Full LOPD and GDPR compliance with AEAT tax reporting and cookie consent." },
            { icon: FileCheck, title: "Spanish Localization", desc: "Full Spanish/English stores with localized checkout and legal compliance." },
            { icon: Globe, title: "LATAM Expansion", desc: "Leverage Spanish language to expand into Latin American markets." },
            { icon: Truck, title: "Correos, SEUR & MRW", desc: "All major Spanish carriers with automated tracking and returns." },
            { icon: Layers, title: "AEAT & Tax Integration", desc: "Spanish tax authority reporting, SII integration, and local accounting." },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"><item.icon className="w-8 h-8 text-primary mb-4" /><h3 className="font-bold text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.desc}</p></motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="py-16 md:py-24 bg-card border-y border-border"><div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Nuestros Servicios</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Shopify Services for Spain</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: ShoppingCart, title: "Shopify Store Launch", desc: "Premium Spanish stores with Bizum, Redsys, and LOPD compliance.", link: "/shopify-themes" },
            { icon: Rocket, title: "Shopify Plus España", desc: "Enterprise commerce for high-volume Spanish brands.", link: "/shopify-plus" },
            { icon: RefreshCw, title: "Platform Migration", desc: "Migrate from PrestaShop, Magento, or WooCommerce. Full SEO preservation." },
            { icon: BarChart3, title: "CRO & Optimization", desc: "Conversion optimization for Spanish shoppers." },
            { icon: Palette, title: "Custom Spanish UX", desc: "Spanish-market UX with local trust signals and design." },
            { icon: Globe, title: "LATAM Expansion", desc: "Multi-market stores for Spain and Latin America." },
          ].map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
              <s.icon className="w-8 h-8 text-primary mb-4" /><h3 className="font-bold text-foreground mb-2">{s.title}</h3><p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
              {s.link && <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ChevronRight className="w-3 h-3" /></Link>}
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-[hsl(0,80%,45%)]"><div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">¿Listo para escalar tu e-commerce en España?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Free Shopify growth plan for Spain. LOPD-compliant, sin compromiso.</p>
        <div className="flex justify-center"><InlineLeadForm id="mid-es" variant="dark" /></div>
      </div></section>

      <ShopifyPricingPackages currency="€" prices={["750", "2,900", "7,500"]} headlinePrice="€750"
        descOverrides={{ 0: "Quick-launch store — ideal for startups entering the Spanish market." }}
        featureOverrides={{ "Payment Gateway (PayTabs / Telr)": "Payment Gateway (Bizum / Redsys)", "Local UAE Shipping Setup": "Local Spanish Shipping (Correos / SEUR)", "Multi-Currency Support (AED, USD, EUR)": "Multi-Currency Support (EUR, USD, GBP)", "Multi-Language (English / Arabic)": "Multi-Language (Spanish / English)" }}
      />

      <section className="py-16 md:py-24 section-dark"><div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Spanish Market Challenges</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">Challenges We Solve for Spanish Brands</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Bizum & Redsys Integration", desc: "Over 25 million Bizum users in Spain. We integrate Bizum alongside Redsys for card processing and BNPL options." },
            { title: "LOPD/GDPR Compliance", desc: "Spain's LOPD adds requirements on top of GDPR. We implement full compliance with AEPD guidelines." },
            { title: "Correos & Spanish Logistics", desc: "Correos, SEUR, MRW, and GLS integration with returns management and Canary Islands shipping." },
            { title: "AEAT Tax Reporting", desc: "SII real-time tax reporting, IVA compliance, and integration with Spanish accounting platforms." },
          ].map((c) => (
            <motion.div key={c.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-bold text-white mb-2">{c.title}</h3><p className="text-sm text-white/60 leading-relaxed">{c.desc}</p></motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="py-16 md:py-24 bg-card border-y border-border"><div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Preguntas Frecuentes</motion.h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Can you integrate Bizum and Redsys?", a: "Yes. Full Bizum, Redsys, and Sequra BNPL integration." },
            { q: "How much does Shopify cost in Spain?", a: "From €750 starter to €7,500+ enterprise." },
            { q: "Is Shopify LOPD/GDPR-compliant?", a: "Yes, with our full LOPD and GDPR implementation." },
            { q: "Which shipping carriers for Spain?", a: "Correos, SEUR, MRW, and GLS with returns management." },
            { q: "Do you build Spanish-language stores?", a: "Yes. Full Spanish/English bilingual stores." },
            { q: "How long to launch?", a: "4–6 weeks standard, 8–14 weeks enterprise." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted leading-relaxed pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div></section>

      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(0,40%,12%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Comienza tu éxito con Shopify en España</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">Join 300+ brands that chose Globify. LOPD-compliant, sin compromiso.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final-es" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"><Phone className="w-4 h-4" /> Book Strategy Call</Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopify%20development%20for%20Spain." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-dev" links={["shopify-themes", "shopify-plus", "shopify-apps", "ecommerce", "digital-marketing", "ai-automation"]} variant="light" />
      <Footer /><MobileFloatingCTA />
    </>
  );
};

export default ShopifySpain;
