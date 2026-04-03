"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Workflow, Cog, FileCheck, RefreshCw, Zap, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrossLinkSection from "@/components/CrossLinkSection";


const stats = [
  { value: "60%", label: "Avg Cost Reduction" },
  { value: "500+", label: "Workflows Automated" },
  { value: "10x", label: "Faster Processing" },
  { value: "99.5%", label: "Accuracy Rate" },
];

const capabilities = [
  { icon: FileCheck, title: "Document Processing", desc: "AI-powered extraction from invoices, contracts, and forms, eliminating manual data entry with 99%+ accuracy across Arabic and English documents." },
  { icon: Workflow, title: "Workflow Orchestration", desc: "End-to-end business process automation connecting your CRM, ERP, email, and custom systems with intelligent routing and exception handling." },
  { icon: RefreshCw, title: "Order & Fulfillment Automation", desc: "Automated order processing, inventory updates, shipping label generation, and customer notifications, reducing fulfillment time by 80%." },
  { icon: Cog, title: "HR & Employee Onboarding", desc: "Automate offer letters, document collection, account provisioning, training assignments, and compliance checks for new hires." },
  { icon: Zap, title: "Finance & Accounting", desc: "Automated invoice matching, expense approvals, reconciliation, and financial reporting, closing books 5× faster with fewer errors." },
  { icon: BarChart3, title: "Custom API Integrations", desc: "Connect any system via REST/GraphQL APIs, webhooks, and middleware, creating seamless data flows across your entire tech stack." },
];

const savings = [
  { task: "Invoice Processing", before: "15 min/invoice", after: "30 sec/invoice", saving: "97% time saved" },
  { task: "Order Entry", before: "8 min/order", after: "Instant", saving: "100% automated" },
  { task: "Employee Onboarding", before: "3 days", after: "2 hours", saving: "90% faster" },
  { task: "Report Generation", before: "4 hours/week", after: "Auto-generated", saving: "100% automated" },
];

const process = [
  { step: "01", title: "Process Audit", desc: "We map your current workflows, identify bottlenecks, and quantify the ROI of automating each process." },
  { step: "02", title: "Solution Design", desc: "Architecture and integration design with your existing tools, Microsoft 365, Zoho, SAP, Shopify, or custom systems." },
  { step: "03", title: "Build & Integrate", desc: "Agile development with weekly demos, automated testing, and progressive rollout to minimize disruption." },
  { step: "04", title: "Monitor & Scale", desc: "Real-time monitoring dashboards, error handling, and continuous optimization as your processes evolve." },
];

const ProcessAutomation = () => {
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">Process Automation</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-hero-foreground leading-[1.08] mb-6">
                Stop Paying People to Do{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">What Machines Do Better</span>
              </h1>
              <p className="text-hero-foreground/50 text-lg leading-relaxed mb-8 max-w-2xl">
                Intelligent process automation that eliminates manual work, reduces errors to near-zero, and frees your team to focus on growth, not paperwork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3">
                  Get a Free Process Audit <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#lead-capture" className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground/70 px-8 py-4 rounded-full font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all">
                  See ROI Calculator
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Power Automate & Zapier", "Custom API Integrations", "99.5% Accuracy"].map((item) => (
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
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">What We Automate</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-4">Every Manual Process Is a Cost You Can Eliminate</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">From simple task automation to complex multi-system orchestration, we build workflows that run flawlessly at any scale.</p>
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

      {/* ROI Table */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">ROI Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground leading-[1.1]">Before vs After Automation</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-section-dark-foreground/10">
                  <th className="text-left py-4 px-4 text-section-dark-foreground/60 font-medium">Task</th>
                  <th className="text-center py-4 px-4 text-section-dark-foreground/60 font-medium">Before</th>
                  <th className="text-center py-4 px-4 text-section-dark-foreground/60 font-medium">After</th>
                  <th className="text-center py-4 px-4 text-primary font-semibold">Impact</th>
                </tr>
              </thead>
              <tbody>
                {savings.map((row) => (
                  <tr key={row.task} className="border-b border-section-dark-foreground/5">
                    <td className="py-3 px-4 text-section-dark-foreground/80 font-medium">{row.task}</td>
                    <td className="py-3 px-4 text-center text-section-dark-foreground/50">{row.before}</td>
                    <td className="py-3 px-4 text-center text-section-dark-foreground/90">{row.after}</td>
                    <td className="py-3 px-4 text-center text-primary font-semibold">{row.saving}</td>
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
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1]">Automation That Pays for Itself in Weeks</h2>
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Start Automating</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-[1.1] mb-5">Ready to Eliminate<br />Manual Work?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Get a free process audit that identifies your highest-ROI automation opportunities with a clear implementation roadmap.</p>
              <div className="space-y-4">
                {["Free process audit & ROI analysis", "Integration assessment with your tools", "Implementation roadmap & timeline", "Fixed-price quotes, no surprises"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm text-foreground/70">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="p-10 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">Our automation team will analyze your processes and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-background space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label><input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                    <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email *</label><input required type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  </div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Which processes need automation? *</label><textarea required rows={3} placeholder="e.g., Invoice processing, order management, employee onboarding..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none" /></div>
                  <div><label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Current Tools</label><input type="text" placeholder="e.g., Zoho, SAP, Microsoft 365, Shopify..." className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors" /></div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all"><Send className="w-4 h-4" /> Get Your Free Process Audit</button>
                  <p className="text-[11px] text-muted-foreground/50 text-center">By submitting, you agree to our Privacy Policy. Response within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <CrossLinkSection currentPage="process-automation" links={["ai-automation", "ai-chatbots", "erp", "digital-transformation", "predictive-analytics"]} variant="light" />
      <Footer />
    </div>
  );
};

export default ProcessAutomation;
