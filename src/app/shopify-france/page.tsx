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
  ArrowRight, CheckCircle, TrendingUp, Zap, Clock, Star,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Layers,
  Globe, ChevronRight, MessageCircle, Phone,
  AlertTriangle, Send, Lock, CreditCard, Truck, ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import shopifyLogo from "@/assets/shopify-logo.png";

const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStep1 = (e: React.FormEvent) => { e.preventDefault(); if (email) setStep(2); };
  const handleStep2 = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead'); toast.success("We'll be in touch within 24 hours!"); };

  const isDark = variant === "dark";
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Merci!</p>
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

const ShopifyFrance = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(230,60%,18%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(230,60%,50%)]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <img src={shopifyLogo.src} alt="Shopify Partner" className="h-4 w-auto" /> Partenaire Shopify Certifié
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Développement Shopify pour{" "}
                <span className="bg-gradient-to-r from-[hsl(230,70%,60%)] to-[hsl(200,80%,55%)] bg-clip-text text-transparent">
                  les Marques Françaises
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed" data-speakable>
                RGPD-compliant Shopify stores built for French consumers. Carte Bancaire, Colissimo, Alma BNPL — all integrated from day one.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-white/60">
                {["RGPD-Conforme", "Carte Bancaire & Alma", "Colissimo & Chronopost", "Francophone Markets"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[hsl(230,70%,60%)]" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}><InlineLeadForm id="hero-fr" variant="dark" /></motion.div>

              <motion.p variants={fadeUp} className="text-xs text-[hsl(230,70%,60%)]/80 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Limited free audits available for French brands this month
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "€112B", label: "French E-Commerce Market 2026", icon: TrendingUp },
                { value: "82%", label: "French Adults Shop Online", icon: BarChart3 },
                { value: "55%", label: "Mobile Commerce Share", icon: Rocket },
                { value: "#3", label: "E-Commerce Market in Europe", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-[hsl(230,70%,60%)] mb-3" />
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
              { val: "FR/BE/CH", label: "Francophone Expertise" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "100%", label: "RGPD-Conforme" },
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

      {/* WHY SHOPIFY IN FRANCE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Pourquoi Shopify?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Why Shopify Is Ideal for French E-Commerce
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: CreditCard, title: "Carte Bancaire & Alma", desc: "CB is used in 80% of French online payments. We integrate CB, Alma BNPL, PayPal, and Apple Pay for maximum conversion." },
              { icon: Lock, title: "RGPD Compliance", desc: "Full CNIL-compliant data handling, cookie banners, CGV, mentions légales, and droit de rétractation — all handled." },
              { icon: Truck, title: "Colissimo & Chronopost", desc: "Native integrations with La Poste, Colissimo, Chronopost, Mondial Relay, and Relais Colis for French shipping." },
              { icon: Globe, title: "Francophone Markets", desc: "Expand to Belgium, Switzerland, Luxembourg, and French-speaking Africa with localized stores." },
              { icon: ShieldCheck, title: "French Consumer Trust", desc: "Avis Vérifiés integration, FEVAD membership badges, and transparent return policies build trust." },
              { icon: Layers, title: "ERP & Marketplace", desc: "Connect with Cdiscount, Fnac Marketplace, and French ERPs. Automate orders, inventory, and accounting." },
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
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Nos Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
              Shopify Services for French Brands
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShoppingCart, title: "Boutique Shopify", desc: "French-market stores with CB payments, RGPD compliance, and Colissimo from day one.", link: "/shopify-themes" },
              { icon: Rocket, title: "Shopify Plus France", desc: "Enterprise commerce for high-volume French brands with custom checkout and B2B wholesale.", link: "/shopify-plus" },
              { icon: RefreshCw, title: "Migration de Plateforme", desc: "Migrate from PrestaShop, Magento, or WooCommerce with full SEO preservation." },
              { icon: BarChart3, title: "CRO & Optimisation", desc: "Conversion optimization tailored to French shopper behavior and expectations." },
              { icon: Palette, title: "Design UX Français", desc: "UX designed for French consumers with transparent pricing, clear CGV, and trust elements." },
              { icon: Globe, title: "Expansion Francophone", desc: "Multi-market stores for France, Belgium, Switzerland & French-speaking Africa." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                {s.link && (
                  <Link href={s.link} className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ChevronRight className="w-3 h-3" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Prêt à Développer Votre E-Commerce en France?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Get a free Shopify growth plan tailored to the French market. RGPD-conforme, sans engagement.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid-fr" variant="dark" /></div>
        </div>
      </section>

      <ShopifyPricingPackages
        currency="€"
        prices={["750", "2,900", "7,500"]}
        headlinePrice="€750"
        descOverrides={{
          0: "Quick-launch store using a premium ready-made theme — ideal for startups entering the French market.",
        }}
        featureOverrides={{
          "Payment Gateway (PayTabs / Telr)": "Payment Gateway (Stripe / Mollie)",
          "Local UAE Shipping Setup": "Local French Shipping Setup (Colissimo / Mondial Relay)",
          "Multi-Currency Support (AED, USD, EUR)": "Multi-Currency Support (EUR, USD, GBP)",
          "Multi-Language (English / Arabic)": "Multi-Language (French / English)",
        }}
      />

      {/* LOCAL CHALLENGES */}
      <section className="py-16 md:py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Défis du Marché Français</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
              Challenges We Solve for French Brands
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Carte Bancaire Dominance", desc: "CB represents 80% of French online payments. We ensure seamless CB integration alongside Alma BNPL and PayPal for maximum conversion." },
              { title: "RGPD & CNIL Compliance", desc: "France's CNIL enforces strict RGPD rules. We implement compliant cookie consent, data processing agreements, and privacy-by-design architecture." },
              { title: "French Shipping Expectations", desc: "French shoppers expect Colissimo, Mondial Relay, and point relais delivery options. We integrate all carriers with real-time tracking." },
              { title: "PrestaShop Migration", desc: "Many French stores run on PrestaShop. We migrate products, customers, orders, and SEO rankings to Shopify with zero downtime." },
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Questions Fréquentes</motion.h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Is Shopify suitable for the French market?", a: "Yes. Shopify supports Carte Bancaire, French VAT, Colissimo shipping, and RGPD compliance — ideal for French e-commerce." },
              { q: "Can you integrate Carte Bancaire and Alma?", a: "Absolutely. We integrate CB, Alma BNPL, PayPal, Apple Pay, and all payment methods French shoppers expect." },
              { q: "How much does Shopify development cost in France?", a: "Standard stores start at €5,000–€10,000. Custom Plus implementations range from €25,000–€60,000+." },
              { q: "Do you handle French legal compliance?", a: "Yes. CGV, mentions légales, politique de confidentialité, and droit de rétractation — all French legal pages included." },
              { q: "Can you migrate from PrestaShop to Shopify?", a: "Yes. We've completed many PrestaShop-to-Shopify migrations preserving products, customers, orders, and SEO rankings." },
              { q: "How long does it take to launch in France?", a: "Standard stores launch in 4–6 weeks. Shopify Plus builds with marketplace integration take 8–14 weeks." },
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
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(220,20%,10%)] to-[hsl(230,60%,18%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Lancez Votre Succès Shopify en France</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">Join 300+ brands that chose Globify. Get your free Shopify growth plan — RGPD-conforme, sans engagement.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-6"><InlineLeadForm id="final-fr" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="w-4 h-4" /> Book Strategy Call
              </Button>
              <a href="https://wa.me/971547308673?text=Hi%20Globify%2C%20I%27m%20interested%20in%20Shopify%20development%20for%20France." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors" onClick={() => typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'contact_whatsapp')}>
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
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

export default ShopifyFrance;
