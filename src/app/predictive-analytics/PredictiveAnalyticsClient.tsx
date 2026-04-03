"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, TrendingUp, LineChart, Brain, Target, PieChart, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";


const stats = [
  { value: "92%", label: "Forecast Accuracy" },
  { value: "40%", label: "Inventory Cost Reduction" },
  { value: "3x", label: "Faster Decision Making" },
  { value: "200+", label: "ML Models Deployed" },
];

const capabilities = [
  { icon: TrendingUp, title: "Demand Forecasting", desc: "ML models that predict sales trends, seasonal patterns, and market shifts, enabling proactive inventory and marketing decisions with 92% accuracy." },
  { icon: Target, title: "Customer Segmentation", desc: "AI-driven clustering that identifies high-value segments, churn risks, and cross-sell opportunities, turning data into targeted revenue strategies." },
  { icon: LineChart, title: "Revenue Intelligence", desc: "Real-time dashboards combining sales, marketing, and operations data to surface growth opportunities and margin leaks you can't see manually." },
  { icon: Brain, title: "Price Optimization", desc: "Dynamic pricing models that analyze competitor prices, demand elasticity, and cost structures to maximize margins without losing conversions." },
  { icon: PieChart, title: "Marketing Attribution", desc: "Multi-touch attribution models that show true ROI across channels, from Meta Ads to email sequences, so you invest where it matters." },
  { icon: Activity, title: "Anomaly Detection", desc: "Real-time alerts for unusual patterns in transactions, inventory, website traffic, or operational metrics, catching issues before they become crises." },
];

const outcomes = [
  { metric: "35%", label: "Revenue Increase", desc: "E-commerce brand using demand forecasting to optimize stock and pricing" },
  { metric: "60%", label: "Reduced Stockouts", desc: "Supply chain company with ML-powered inventory optimization" },
  { metric: "4.2x", label: "Marketing ROI", desc: "D2C brand using attribution modeling to reallocate ad spend" },
];

const process = [
  { step: "01", title: "Data Audit & Strategy", desc: "We assess your data sources, quality, and gaps, then define the analytics roadmap aligned to your business KPIs." },
  { step: "02", title: "Data Engineering", desc: "Clean, transform, and unify data from all sources into a single analytics-ready data warehouse." },
  { step: "03", title: "Model Development", desc: "Build, train, and validate ML models tailored to your specific business context and data patterns." },
  { step: "04", title: "Deploy & Monitor", desc: "Production deployment with automated retraining, drift detection, and executive dashboards." },
];

const PredictiveAnalytics = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); };

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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Predictive Analytics</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Know What's Coming Before{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Your Competitors Do</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                Machine learning models that transform your raw data into actionable predictions, forecasting demand, optimizing prices, and surfacing opportunities your spreadsheets can't see.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get a Data Strategy Session <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  See Case Studies
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["92% Forecast Accuracy", "Real-Time Dashboards", "Custom ML Models"].map((item) => (
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
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Analytics Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">Data That Predicts, Not Just Reports</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">Move beyond backward-looking dashboards. Our ML models give you forward-looking intelligence that drives proactive business decisions.</p>
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

      {/* Results */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground leading-[1.1]">Analytics That Move the Bottom Line</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {outcomes.map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-2xl border border-section-dark-foreground/10 bg-section-dark-foreground/[0.03]">
                <div className="text-4xl font-bold text-primary mb-2">{r.metric}</div>
                <div className="font-semibold text-sm text-section-dark-foreground mb-1">{r.label}</div>
                <div className="text-xs text-section-dark-foreground/50">{r.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1]">From Raw Data to Actionable Intelligence</h2>
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Predicting</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready to Make<br />Data-Driven Decisions?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free data strategy session where we'll assess your data maturity, identify quick wins, and outline a roadmap to predictive intelligence.</p>
              <div className="space-y-4">
                {["Free data maturity assessment", "Quick-win identification in 48 hours", "Custom ML model recommendations", "ROI projection for your specific use case"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our data science team will review your needs and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label><input required type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">What do you want to predict? *</label>
                    <select required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Select focus area</option><option>Demand / Sales Forecasting</option><option>Customer Churn Prediction</option><option>Price Optimization</option><option>Marketing Attribution</option><option>Inventory Optimization</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Current data sources</label><input type="text" placeholder="e.g., Shopify, Google Analytics, CRM, ERP..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all"><Send className="w-4 h-4" /> Get Your Free Data Strategy</button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <CrossLinkSection currentPage="predictive-analytics" links={["ai-automation", "process-automation", "erp", "supply-chain", "ecommerce"]} variant="light" />
      <Footer />
    </div>
  );
};

export default PredictiveAnalytics;
