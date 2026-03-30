import { AstraIcon, CircuitPattern, ServiceCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type BlogPost, getPublishedPosts } from "@/data/blogPosts";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crosshair,
  Eye,
  Globe,
  Lock,
  MessageSquare,
  Server,
  Target,
  Wifi,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// Services data for teaser (short descriptions)
const homeServices = [
  {
    icon: Target,
    title: "Penetration Testing",
    description:
      "We test your systems the same way a real hacker would — finding weak spots before someone with bad intentions does.",
  },
  {
    icon: Lock,
    title: "Vulnerability Assessment",
    description:
      "We scan your systems to find security gaps, rank them by risk, and tell you exactly what needs to be fixed first.",
  },
  {
    icon: Wifi,
    title: "WiFi Security",
    description:
      "We test your wireless network for weak points that could let outsiders get in.",
  },
  {
    icon: Globe,
    title: "Web Application Security",
    description:
      "We deeply test your website and web apps for known security issues like weak logins and data leaks.",
  },
];

export default function HomePage() {
  const latestPosts = getPublishedPosts().slice(0, 2);
  const [selected, setSelected] = useState<BlogPost | null>(null);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center circuit-bg"
        style={{
          background: "oklch(0.10 0.015 200)",
          overflowX: "clip",
          overflowY: "visible",
        }}
      >
        <CircuitPattern />

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.83 0.15 192 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.76 0.10 75 / 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest font-mono"
                  style={{
                    background: "oklch(0.83 0.15 192 / 0.1)",
                    border: "1px solid oklch(0.83 0.15 192 / 0.3)",
                    color: "var(--cyber-cyan)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
                    style={{ background: "var(--cyber-cyan)" }}
                  />
                  Cyber Defense Redefined
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-6 text-foreground"
              >
                Ancient{" "}
                <span
                  className="text-glow-cyan"
                  style={{ color: "var(--cyber-cyan)" }}
                >
                  Strength,
                </span>
                <br />
                Digital{" "}
                <span
                  className="text-glow-gold"
                  style={{ color: "oklch(0.76 0.10 75)" }}
                >
                  Protection.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                CyberAstras brings the strength and precision of ancient Astras
                to online security. We find the weaknesses in your systems
                before hackers do — and help you fix them before any damage is
                done.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/services">
                  <Button
                    className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-7 py-3 h-auto transition-all duration-300 hover:scale-105"
                    style={{
                      background: "oklch(0.83 0.15 192)",
                      color: "oklch(0.10 0.015 200)",
                      boxShadow:
                        "0 0 24px oklch(0.83 0.15 192 / 0.5), 0 4px 16px oklch(0 0 0 / 0.3)",
                    }}
                  >
                    Explore Our Services
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-7 py-3 h-auto transition-all duration-300 hover:scale-105"
                    style={{
                      background: "transparent",
                      border: "1px solid oklch(0.83 0.15 192 / 0.4)",
                      color: "var(--cyber-cyan)",
                    }}
                  >
                    Get Protected
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Astra Image — visible on all screen sizes, no clipping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center relative mt-10 lg:mt-0"
            >
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, oklch(0.83 0.15 192 / 0.06) 0%, transparent 70%)",
                }}
              />
              {/* No overflow-hidden and no max-w constraints so image is never clipped */}
              <div
                className="relative z-10 w-full rounded-xl"
                style={{
                  border: "1px solid oklch(0.25 0.035 210 / 0.6)",
                  boxShadow:
                    "0 0 0 1px oklch(0.83 0.15 192 / 0.08), 0 20px 60px oklch(0 0 0 / 0.5)",
                  background: "oklch(0.10 0.015 200)",
                }}
              >
                <motion.img
                  src="/assets/uploads/image-1.png"
                  alt="CyberAstras — Ancient strength, digital protection"
                  className="w-full block rounded-xl"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0 8px 24px oklch(0 0 0 / 0.4))",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.10 0.015 200))",
          }}
        />
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section
        className="relative py-20"
        style={{ background: "oklch(0.10 0.015 200)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.83 0.15 192) 1px, transparent 1px), linear-gradient(90deg, oklch(0.83 0.15 192) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-4 px-3 py-1 rounded"
              style={{
                color: "var(--cyber-cyan)",
                background: "oklch(0.83 0.15 192 / 0.08)",
                border: "1px solid oklch(0.83 0.15 192 / 0.2)",
              }}
            >
              Who We Are
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Our <span style={{ color: "var(--cyber-cyan)" }}>Purpose</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl p-8 relative overflow-hidden"
              style={{
                background: "oklch(0.13 0.022 205)",
                border: "1px solid oklch(0.25 0.035 210 / 0.7)",
                boxShadow: "0 0 40px oklch(0.83 0.15 192 / 0.06)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                style={{
                  background:
                    "linear-gradient(90deg, var(--cyber-cyan), transparent)",
                }}
              />
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "oklch(0.83 0.15 192 / 0.1)",
                  border: "1px solid oklch(0.83 0.15 192 / 0.3)",
                }}
              >
                <Eye size={22} style={{ color: "var(--cyber-cyan)" }} />
              </div>
              <div
                className="text-xs font-bold uppercase tracking-[0.3em] font-mono mb-3"
                style={{ color: "var(--cyber-cyan)" }}
              >
                Our Vision
              </div>
              <h3 className="font-display text-xl font-black uppercase tracking-tight text-foreground mb-4">
                A Safer Digital World
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                We envision a world where every business — big or small — can
                operate online without fear of being hacked. Our goal is to make
                strong cybersecurity accessible to everyone, not just large
                corporations.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl p-8 relative overflow-hidden"
              style={{
                background: "oklch(0.13 0.022 205)",
                border: "1px solid oklch(0.25 0.035 210 / 0.7)",
                boxShadow: "0 0 40px oklch(0.76 0.10 75 / 0.06)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.76 0.10 75), transparent)",
                }}
              />
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "oklch(0.76 0.10 75 / 0.1)",
                  border: "1px solid oklch(0.76 0.10 75 / 0.3)",
                }}
              >
                <Crosshair size={22} style={{ color: "oklch(0.76 0.10 75)" }} />
              </div>
              <div
                className="text-xs font-bold uppercase tracking-[0.3em] font-mono mb-3"
                style={{ color: "oklch(0.76 0.10 75)" }}
              >
                Our Mission
              </div>
              <h3 className="font-display text-xl font-black uppercase tracking-tight text-foreground mb-4">
                Protect Before They Strike
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                Our mission is to find and fix security weaknesses in your
                systems before attackers can exploit them. We bring the
                precision and dedication of a true expert to every engagement —
                giving you real answers, plain language reports, and peace of
                mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section
        className="relative py-24"
        style={{ background: "oklch(0.11 0.018 205)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.83 0.15 192) 1px, transparent 1px), linear-gradient(90deg, oklch(0.83 0.15 192) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-4 px-3 py-1 rounded"
              style={{
                color: "var(--cyber-cyan)",
                background: "oklch(0.83 0.15 192 / 0.08)",
                border: "1px solid oklch(0.83 0.15 192 / 0.2)",
              }}
            >
              What We Do
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground mb-4">
              Our <span style={{ color: "var(--cyber-cyan)" }}>Services</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "oklch(0.65 0.02 210)" }}
            >
              We offer a focused set of security services for businesses of all
              sizes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {homeServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link to="/services">
              <Button
                className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-8 py-3 h-auto transition-all duration-300 hover:scale-105"
                style={{
                  background: "oklch(0.83 0.15 192)",
                  color: "oklch(0.10 0.015 200)",
                  boxShadow: "0 0 20px oklch(0.83 0.15 192 / 0.4)",
                }}
              >
                View All Services <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section
        className="relative py-24"
        style={{ background: "oklch(0.10 0.015 200)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-5 px-3 py-1 rounded"
                style={{
                  color: "var(--cyber-cyan)",
                  background: "oklch(0.83 0.15 192 / 0.08)",
                  border: "1px solid oklch(0.83 0.15 192 / 0.2)",
                }}
              >
                About
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground mb-6">
                Meet The{" "}
                <span
                  className="text-glow-gold"
                  style={{ color: "oklch(0.76 0.10 75)" }}
                >
                  Founder
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                Deepak Sharma is the founder and sole consultant at CyberAstras.
                With years of industry-level experience protecting real
                businesses, he works hands-on with every client — making sure
                your systems are safe.
              </p>
              {[
                { icon: Zap, text: "Years of industry-level experience" },
                { icon: Server, text: "You work directly with the expert" },
                {
                  icon: MessageSquare,
                  text: "Plain language reports, every time",
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "oklch(0.83 0.15 192 / 0.1)",
                      border: "1px solid oklch(0.83 0.15 192 / 0.25)",
                    }}
                  >
                    <Icon size={14} style={{ color: "var(--cyber-cyan)" }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.73 0.02 210)" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
              <div className="mt-8">
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-7 py-3 h-auto transition-all duration-300 hover:scale-105"
                    style={{
                      background: "transparent",
                      border: "1px solid oklch(0.76 0.10 75 / 0.5)",
                      color: "oklch(0.76 0.10 75)",
                    }}
                  >
                    Learn More About Us{" "}
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Founder photo — no overflow-hidden on parent to prevent clipping */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div
                className="rounded-xl"
                style={{
                  border: "1px solid oklch(0.25 0.035 210)",
                  boxShadow:
                    "0 0 0 1px oklch(0.83 0.15 192 / 0.1), 0 20px 60px oklch(0 0 0 / 0.5)",
                  background: "oklch(0.10 0.015 200)",
                }}
              >
                <img
                  src="/assets/uploads/image-1.png"
                  alt="Deepak Sharma — Founder & CyberSecurity Consultant at CyberAstras"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    borderRadius: "0.75rem 0.75rem 0 0",
                  }}
                />
                <div
                  className="px-5 py-4 rounded-b-xl"
                  style={{
                    background: "oklch(0.10 0.015 200)",
                    borderTop: "1px solid oklch(0.25 0.035 210 / 0.5)",
                  }}
                >
                  <p className="font-display font-bold text-sm uppercase tracking-wide text-foreground">
                    Deepak Sharma
                  </p>
                  <p
                    className="text-xs font-mono mt-0.5"
                    style={{ color: "oklch(0.55 0.02 210)" }}
                  >
                    Founder & CyberSecurity Consultant
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BLOG TEASER ===== */}
      <section
        className="relative py-24"
        style={{ background: "oklch(0.11 0.018 205)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-4 px-3 py-1 rounded"
              style={{
                color: "var(--cyber-cyan)",
                background: "oklch(0.83 0.15 192 / 0.08)",
                border: "1px solid oklch(0.83 0.15 192 / 0.2)",
              }}
            >
              Insights
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Latest{" "}
              <span
                style={{
                  color: "var(--cyber-cyan)",
                  textShadow: "0 0 20px oklch(0.83 0.15 192 / 0.5)",
                }}
              >
                Articles
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {latestPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{
                  background: "oklch(0.12 0.018 205)",
                  border: "1px solid oklch(0.83 0.15 192 / 0.12)",
                  borderTop: "3px solid oklch(0.83 0.15 192 / 0.5)",
                  transition:
                    "border-top-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderTopColor = "oklch(0.83 0.15 192)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 8px 32px oklch(0.83 0.15 192 / 0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderTopColor = "oklch(0.83 0.15 192 / 0.5)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded"
                      style={{
                        color: "var(--cyber-cyan)",
                        background: "oklch(0.83 0.15 192 / 0.1)",
                        border: "1px solid oklch(0.83 0.15 192 / 0.2)",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "oklch(0.50 0.02 210)" }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base leading-snug text-foreground mb-3">
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "oklch(0.58 0.02 210)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{
                      borderTop: "1px solid oklch(0.25 0.035 210 / 0.4)",
                    }}
                  >
                    <span
                      className="text-xs font-mono"
                      style={{ color: "oklch(0.45 0.02 210)" }}
                    >
                      {post.author}
                    </span>
                    <button
                      type="button"
                      data-ocid="home.blog.read_more.button"
                      onClick={() => setSelected(post)}
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest font-mono transition-all duration-200 hover:gap-2.5"
                      style={{ color: "var(--cyber-cyan)" }}
                    >
                      Read More <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link to="/blog">
              <Button
                variant="outline"
                className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-8 py-3 h-auto transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  border: "1px solid oklch(0.83 0.15 192 / 0.4)",
                  color: "var(--cyber-cyan)",
                }}
              >
                View All Posts <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section
        className="relative py-24"
        style={{ background: "oklch(0.10 0.015 200)" }}
      >
        <CircuitPattern />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.83 0.15 192 / 0.05) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-5 px-3 py-1 rounded"
              style={{
                color: "var(--cyber-cyan)",
                background: "oklch(0.83 0.15 192 / 0.08)",
                border: "1px solid oklch(0.83 0.15 192 / 0.2)",
              }}
            >
              Get In Touch
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground mb-5">
              Ready to Protect{" "}
              <span style={{ color: "var(--cyber-cyan)" }}>Your Business?</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.65 0.02 210)" }}
            >
              Send us a message and we will get back to you within 24 hours with
              a plan built around your needs.
            </p>
            <Link to="/contact">
              <Button
                className="font-display font-bold uppercase tracking-widest text-sm rounded-full px-10 py-4 h-auto transition-all duration-300 hover:scale-105"
                style={{
                  background: "oklch(0.83 0.15 192)",
                  color: "oklch(0.10 0.015 200)",
                  boxShadow:
                    "0 0 30px oklch(0.83 0.15 192 / 0.5), 0 4px 20px oklch(0 0 0 / 0.3)",
                }}
              >
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Full Article Dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent
          className="z-[200] max-w-2xl max-h-[85vh] overflow-y-auto"
          style={{
            background: "oklch(0.12 0.018 205)",
            border: "1px solid oklch(0.83 0.15 192 / 0.2)",
            color: "var(--foreground)",
          }}
        >
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded"
                    style={{
                      color: "var(--cyber-cyan)",
                      background: "oklch(0.83 0.15 192 / 0.1)",
                      border: "1px solid oklch(0.83 0.15 192 / 0.2)",
                    }}
                  >
                    {selected.category}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "oklch(0.50 0.02 210)" }}
                  >
                    {selected.date}
                  </span>
                </div>
                <DialogTitle
                  className="font-display font-bold text-lg leading-snug text-foreground"
                  style={{ textAlign: "left" }}
                >
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                {selected.content.split("\n\n").map((para, idx) => (
                  <p
                    // biome-ignore lint/suspicious/noArrayIndexKey: paragraph order is stable
                    key={idx}
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.68 0.02 210)" }}
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>

              <div
                className="mt-6 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid oklch(0.25 0.035 210 / 0.4)" }}
              >
                <span
                  className="text-xs font-mono"
                  style={{ color: "oklch(0.45 0.02 210)" }}
                >
                  {selected.author} &mdash; CyberAstras
                </span>
                <Button
                  size="sm"
                  onClick={() => setSelected(null)}
                  className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-5 h-8"
                  style={{
                    background: "oklch(0.83 0.15 192)",
                    color: "oklch(0.10 0.015 200)",
                  }}
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
