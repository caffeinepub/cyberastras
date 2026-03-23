import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import { encryptText } from "@/lib/crypto";
import {
  ArrowRight,
  ChevronRight,
  Github,
  Globe,
  Linkedin,
  Lock,
  Mail,
  Menu,
  MessageSquare,
  Server,
  Shield,
  ShieldCheck,
  Target,
  Twitter,
  User,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// --- Circuit board SVG background ---
const CircuitPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.07]"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Circuit board decorative background"
  >
    <defs>
      <pattern
        id="circuit"
        x="0"
        y="0"
        width="80"
        height="80"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M20 40h10M50 40h10M40 20v10M40 50v10"
          stroke="#00D1E8"
          strokeWidth="0.8"
          fill="none"
        />
        <circle cx="20" cy="40" r="2.5" fill="#00D1E8" />
        <circle cx="60" cy="40" r="2.5" fill="#00D1E8" />
        <circle cx="40" cy="20" r="2.5" fill="#00D1E8" />
        <circle cx="40" cy="60" r="2.5" fill="#00D1E8" />
        <rect
          x="34"
          y="34"
          width="12"
          height="12"
          rx="2"
          stroke="#00D1E8"
          strokeWidth="0.6"
          fill="none"
        />
        <path
          d="M10 10h15M10 70h15M55 10h15M55 70h15"
          stroke="#D9B25F"
          strokeWidth="0.4"
          fill="none"
          opacity="0.5"
        />
        <circle cx="10" cy="10" r="1.5" fill="#D9B25F" opacity="0.5" />
        <circle cx="70" cy="10" r="1.5" fill="#D9B25F" opacity="0.5" />
        <circle cx="10" cy="70" r="1.5" fill="#D9B25F" opacity="0.5" />
        <circle cx="70" cy="70" r="1.5" fill="#D9B25F" opacity="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

// --- Shield/Astra logo icon ---
const AstraIcon = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="CyberAstras shield icon"
  >
    <path
      d="M16 2L4 7v9c0 7 5.4 13.5 12 15.5C22.6 29.5 28 23 28 16V7L16 2z"
      fill="oklch(0.83 0.15 192 / 0.15)"
      stroke="oklch(0.83 0.15 192)"
      strokeWidth="1.5"
    />
    <path
      d="M16 8l-2 5H9l3.5 2.5L11 21l5-3.5L21 21l-1.5-5.5L23 13h-5z"
      fill="oklch(0.76 0.10 75)"
      opacity="0.9"
    />
  </svg>
);

// --- Service card ---
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    whileHover={{ y: -6 }}
    className="group relative rounded-lg p-6 transition-all duration-300 cursor-default"
    style={{
      background: "oklch(0.14 0.025 210)",
      border: "1px solid oklch(0.25 0.035 210)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.boxShadow =
        "0 0 0 1px oklch(0.83 0.15 192 / 0.5), 0 0 24px oklch(0.83 0.15 192 / 0.12), 0 8px 32px oklch(0 0 0 / 0.4)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.boxShadow = "none";
    }}
  >
    {/* Top accent line */}
    <div
      className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background:
          "linear-gradient(90deg, transparent, oklch(0.83 0.15 192), transparent)",
      }}
    />

    <div
      className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg"
      style={{
        background: "oklch(0.83 0.15 192 / 0.1)",
        border: "1px solid oklch(0.83 0.15 192 / 0.3)",
      }}
    >
      <Icon size={22} style={{ color: "var(--cyber-cyan)" }} />
    </div>

    <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-3 text-foreground">
      {title}
    </h3>
    <p
      className="text-sm leading-relaxed mb-4"
      style={{ color: "var(--cyber-text-muted)" }}
    >
      {description}
    </p>

    <button
      type="button"
      className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-all duration-200"
      style={{ color: "oklch(0.83 0.15 192)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.gap = "0.5rem";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.gap = "0.25rem";
      }}
    >
      Learn More <ArrowRight size={14} />
    </button>
  </motion.div>
);

// --- Nav link ---
const NavLink = ({
  href,
  children,
}: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    data-ocid="nav.link"
    className="text-sm font-semibold uppercase tracking-widest transition-colors duration-200 hover:text-foreground"
    style={{ color: "oklch(0.65 0.02 210)" }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.color = "oklch(0.83 0.15 192)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.02 210)";
    }}
  >
    {children}
  </a>
);

const staticBlogPosts = [
  {
    title: "Top Online Security Risks Every Business Should Know in 2026",
    category: "Web Security",
    excerpt:
      "Hackers are getting smarter with AI. Here is what every business needs to watch out for in 2026 to keep their websites safe.",
    author: "Deepak Sharma",
    date: "Jan 15, 2026",
  },
  {
    title:
      "How Fake Videos and Voice Clips Are Being Used to Trick People in 2026",
    category: "Awareness Training",
    excerpt:
      "Fake videos and voice clips are now being used to trick people. Learn how to teach your team to spot these new types of scams.",
    author: "Deepak Sharma",
    date: "Feb 3, 2026",
  },
  {
    title:
      "Security Testing Options Explained: Which One Does Your Business Need in 2026",
    category: "Penetration Testing",
    excerpt:
      "Not sure which security service you need? We explain the difference in simple terms so you can make the right choice for your business.",
    author: "Deepak Sharma",
    date: "Mar 10, 2026",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const contactRef = useRef<HTMLElement>(null);

  const submitInquiry = useSubmitInquiry();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const [encName, encEmail, encMsg] = await Promise.all([
      encryptText(form.name),
      encryptText(form.email),
      encryptText(form.message),
    ]);
    submitInquiry.mutate(
      { name: encName, email: encEmail, message: encMsg },
      {
        onSuccess: () => {
          toast.success("Message transmitted successfully!", {
            description: "We will respond within 24 hours.",
          });
          setForm({ name: "", email: "", message: "" });
          setErrors({});
        },
        onError: () => {
          toast.error("Transmission failed. Please try again.");
        },
      },
    );
  };

  const services = [
    {
      icon: Target,
      title: "Penetration Testing",
      description:
        "We test your systems the same way a real hacker would — finding weak spots in your website, network, and apps before someone with bad intentions does.",
    },
    {
      icon: Lock,
      title: "Vulnerability Assessment",
      description:
        "We scan and manually review your systems to find security gaps, rank them by risk, and tell you exactly what needs to be fixed first.",
    },
    {
      icon: Globe,
      title: "Web Application Security",
      description:
        "We deeply test your website and web apps for known security issues — like weak logins, data leaks, and ways attackers could manipulate your system.",
    },
    {
      icon: ShieldCheck,
      title: "Cyber Security Awareness Training",
      description:
        "We train your staff to spot fake emails, scam calls, and suspicious behavior — because your people are your first line of defense.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Toaster theme="dark" />

      {/* ===== HEADER ===== */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "oklch(0.10 0.015 200 / 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid oklch(0.25 0.035 210 / 0.6)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/assets/uploads/Untitled-3-1-1.png"
                alt="CyberAstras"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#blog">Blog</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center">
              <Button
                data-ocid="nav.primary_button"
                onClick={() => scrollTo("contact")}
                className="hidden md:inline-flex font-display font-bold uppercase tracking-widest text-xs rounded-full px-5 py-2 transition-all duration-300"
                style={{
                  background: "oklch(0.83 0.15 192)",
                  color: "oklch(0.10 0.015 200)",
                  boxShadow: "0 0 20px oklch(0.83 0.15 192 / 0.4)",
                }}
              >
                Get Started
              </Button>
              <button
                type="button"
                data-ocid="nav.toggle"
                className="md:hidden p-2 rounded"
                style={{ color: "var(--cyber-cyan)" }}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
              style={{
                background: "oklch(0.12 0.02 210)",
                borderTop: "1px solid oklch(0.25 0.035 210)",
              }}
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {["home", "services", "blog", "about", "contact"].map((id) => (
                  <button
                    key={id}
                    type="button"
                    data-ocid="nav.link"
                    onClick={() => scrollTo(id)}
                    className="text-left py-3 text-sm font-bold uppercase tracking-widest transition-colors"
                    style={{
                      color: "oklch(0.65 0.02 210)",
                      borderBottom: "1px solid oklch(0.25 0.035 210 / 0.4)",
                    }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
                <Button
                  data-ocid="nav.primary_button"
                  onClick={() => scrollTo("contact")}
                  className="mt-3 font-display font-bold uppercase tracking-widest text-xs rounded-full"
                  style={{
                    background: "oklch(0.83 0.15 192)",
                    color: "oklch(0.10 0.015 200)",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 circuit-bg overflow-hidden"
      >
        <CircuitPattern />

        {/* Radial glow orbs */}
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
                  Vigilance,
                </span>
                <br />
                Digital{" "}
                <span
                  className="text-glow-gold"
                  style={{ color: "oklch(0.76 0.10 75)" }}
                >
                  Forces.
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
                <Button
                  data-ocid="hero.primary_button"
                  onClick={() => scrollTo("services")}
                  className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-7 py-3 h-auto transition-all duration-300 hover:scale-105"
                  style={{
                    background: "oklch(0.83 0.15 192)",
                    color: "oklch(0.10 0.015 200)",
                    boxShadow:
                      "0 0 24px oklch(0.83 0.15 192 / 0.5), 0 4px 16px oklch(0 0 0 / 0.3)",
                  }}
                >
                  Explore Our Services
                </Button>
                <Button
                  data-ocid="hero.secondary_button"
                  onClick={() => scrollTo("contact")}
                  variant="outline"
                  className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-7 py-3 h-auto transition-all duration-300 hover:scale-105"
                  style={{
                    background: "transparent",
                    border: "1px solid oklch(0.83 0.15 192 / 0.5)",
                    color: "var(--cyber-cyan)",
                  }}
                >
                  Request Consultation
                </Button>
              </motion.div>
            </div>

            {/* Right: Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, oklch(0.83 0.15 192 / 0.08) 0%, transparent 70%)",
                }}
              />
              <motion.img
                src="/assets/generated/astra-hero-transparent.dim_600x500.png"
                alt="CyberAstras — Ancient Astra warrior digital illustration"
                className="relative z-10 w-full max-w-lg animate-float"
                style={{
                  filter:
                    "drop-shadow(0 0 40px oklch(0.83 0.15 192 / 0.35)) drop-shadow(0 0 80px oklch(0.76 0.10 75 / 0.15))",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.10 0.015 200))",
          }}
        />
      </section>

      {/* ===== SERVICES ===== */}
      <section
        id="services"
        className="relative py-24"
        style={{ background: "oklch(0.11 0.018 205)" }}
      >
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
            className="text-center mb-16"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-4 px-3 py-1 rounded"
              style={{
                color: "var(--cyber-cyan)",
                background: "oklch(0.83 0.15 192 / 0.08)",
                border: "1px solid oklch(0.83 0.15 192 / 0.2)",
              }}
            >
              Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Precision-Engineered
              <span
                className="text-glow-cyan ml-3"
                style={{ color: "var(--cyber-cyan)" }}
              >
                Defense
              </span>
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "oklch(0.65 0.02 210)" }}
            >
              Tailored security engagements for startups, SMBs, and enterprises.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="services.list"
          >
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="relative py-24 overflow-hidden">
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
                Meet The
                <br />
                <span
                  className="text-glow-gold"
                  style={{ color: "oklch(0.76 0.10 75)" }}
                >
                  Founder
                </span>
              </h2>

              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                Deepak Sharma is the founder and sole consultant at CyberAstras.
                With a deep passion for finding and fixing security flaws, he
                works hands-on with every client — from the first meeting to the
                final report — making sure your systems are safe.
              </p>

              {/* Feature list */}
              {[
                {
                  icon: Zap,
                  text: "Certified ethical hacker with hands-on experience",
                },
                {
                  icon: Server,
                  text: "Solo consultant — you work directly with the expert",
                },
                {
                  icon: Globe,
                  text: "Transparent, thorough reporting every engagement",
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
            </motion.div>

            {/* Right: Founder profile card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div
                className="rounded-xl overflow-hidden relative"
                style={{
                  border: "1px solid oklch(0.25 0.035 210)",
                  boxShadow:
                    "0 0 0 1px oklch(0.83 0.15 192 / 0.1), 0 20px 60px oklch(0 0 0 / 0.5)",
                }}
              >
                <img
                  src="/assets/uploads/image-1.png"
                  alt="Deepak Sharma — Founder & CyberSecurity Consultant at CyberAstras"
                  className="w-full object-cover object-center"
                  style={{ aspectRatio: "4/5" }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.10 0.015 200 / 0.92) 0%, transparent 55%)",
                  }}
                />

                {/* Founder info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="text-xs font-bold uppercase tracking-widest font-mono mb-1"
                    style={{ color: "var(--cyber-cyan)" }}
                  >
                    Founder & CyberSecurity Consultant
                  </div>
                  <div className="text-white font-black text-xl font-display uppercase tracking-wide">
                    Deepak Sharma
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded"
                      style={{
                        background: "oklch(0.83 0.15 192 / 0.15)",
                        border: "1px solid oklch(0.83 0.15 192 / 0.3)",
                        color: "var(--cyber-cyan)",
                      }}
                    >
                      <Shield size={10} />
                      6+ Years in Cybersecurity
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded"
                      style={{
                        background: "oklch(0.76 0.10 75 / 0.15)",
                        border: "1px solid oklch(0.76 0.10 75 / 0.3)",
                        color: "oklch(0.76 0.10 75)",
                      }}
                    >
                      CyberAstras
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path
                    d="M0 0h30M0 0v30"
                    stroke="oklch(0.76 0.10 75)"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 pointer-events-none">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path
                    d="M64 64H34M64 64V34"
                    stroke="oklch(0.83 0.15 192)"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ASTRAS ===== */}
      <section
        id="astras"
        className="relative py-24"
        style={{ background: "oklch(0.09 0.018 205)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.83 0.15 192) 1px, transparent 1px), linear-gradient(90deg, oklch(0.83 0.15 192) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <div
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono px-3 py-1 rounded"
              style={{
                color: "var(--cyber-cyan)",
                background: "oklch(0.83 0.15 192 / 0.08)",
                border: "1px solid oklch(0.83 0.15 192 / 0.2)",
              }}
            >
              Digital Arsenal
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div
              className="text-xs font-bold uppercase tracking-[0.4em] font-mono mb-5 px-4 py-1.5 rounded-full"
              style={{
                color: "var(--cyber-cyan)",
                background: "oklch(0.83 0.15 192 / 0.12)",
                border: "1px solid oklch(0.83 0.15 192 / 0.4)",
                boxShadow: "0 0 14px oklch(0.83 0.15 192 / 0.2)",
              }}
            >
              ✦ Main Astra ✦
            </div>
            <img
              src="/assets/generated/astra-trishul.dim_800x600.png"
              alt="Trishul — Main Astra"
              style={{
                maxWidth: "480px",
                width: "100%",
                filter:
                  "drop-shadow(0 0 32px oklch(0.83 0.15 192 / 0.7)) drop-shadow(0 0 8px oklch(0.83 0.15 192 / 0.5))",
              }}
              className="mb-8"
            />
            <h2
              className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight mb-2"
              style={{
                color: "var(--cyber-cyan)",
                textShadow: "0 0 24px oklch(0.83 0.15 192 / 0.6)",
              }}
            >
              Trishul
            </h2>
            <p
              className="text-lg font-mono uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.65 0.05 192)" }}
            >
              The Weapon of Precision
            </p>
            <p
              className="max-w-2xl text-base leading-relaxed"
              style={{ color: "oklch(0.62 0.02 210)" }}
            >
              In ancient mythology, the Trishul was used to strike with perfect
              accuracy across all three worlds. At CyberAstras, it represents
              our approach — spotting, targeting, and stopping threats at every
              level of your digital presence.
            </p>
            <div
              className="mt-10 w-64 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.83 0.15 192 / 0.6), transparent)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section id="blog" className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, oklch(0.83 0.15 192 / 0.04) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
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
              Cybersecurity{" "}
              <span
                style={{
                  color: "var(--cyber-cyan)",
                  textShadow: "0 0 20px oklch(0.83 0.15 192 / 0.5)",
                }}
              >
                Knowledge
              </span>
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto text-base"
              style={{ color: "oklch(0.65 0.02 210)" }}
            >
              Practical security insights from the field.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8" data-ocid="blog.list">
            {staticBlogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                data-ocid={`blog.item.${i + 1}`}
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
                  <h3 className="font-display font-bold text-base leading-snug mb-3 text-foreground">
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "oklch(0.60 0.02 210)" }}
                  >
                    {post.excerpt}
                  </p>
                  <a
                    href="#blog"
                    className="text-sm font-bold font-mono hover:opacity-75 transition-opacity duration-200"
                    style={{ color: "var(--cyber-cyan)" }}
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        ref={contactRef}
        className="relative py-24 overflow-hidden"
        style={{ background: "oklch(0.11 0.018 205)" }}
      >
        {/* Circuit bg */}
        <CircuitPattern />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, oklch(0.83 0.15 192 / 0.04) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-24"
            >
              <div
                className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-6 px-3 py-1 rounded"
                style={{
                  color: "var(--cyber-cyan)",
                  background: "oklch(0.83 0.15 192 / 0.08)",
                  border: "1px solid oklch(0.83 0.15 192 / 0.2)",
                }}
              >
                Contact
              </div>
              <h2
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.83 0.15 192) 0%, oklch(0.96 0.005 210) 50%, oklch(0.76 0.10 75) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Contact
              </h2>
              <p
                className="text-base leading-relaxed max-w-sm"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                Ready to protect your business online? Get in touch and we will
                reply within 24 hours with a plan built around your needs.
              </p>

              {/* Contact info */}
              <div className="mt-10 space-y-4">
                {[
                  {
                    label: "Email",
                    value: "info@cyberastras.com",
                    icon: Mail,
                  },
                  { label: "Response", value: "Within 24 hours", icon: Zap },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "oklch(0.83 0.15 192 / 0.1)",
                        border: "1px solid oklch(0.83 0.15 192 / 0.25)",
                      }}
                    >
                      <Icon size={16} style={{ color: "var(--cyber-cyan)" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest font-mono mb-0.5"
                        style={{ color: "oklch(0.5 0.02 210)" }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "oklch(0.73 0.02 210)" }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div
                className="rounded-xl p-8"
                style={{
                  background: "oklch(0.14 0.025 210)",
                  border: "1px solid oklch(0.25 0.035 210)",
                  boxShadow:
                    "0 0 40px oklch(0.83 0.15 192 / 0.05), 0 20px 60px oklch(0 0 0 / 0.4)",
                }}
              >
                {/* Card header */}
                <div className="mb-7">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={16} style={{ color: "var(--cyber-cyan)" }} />
                    <span
                      className="text-xs font-bold uppercase tracking-widest font-mono"
                      style={{ color: "var(--cyber-cyan)" }}
                    >
                      Secure Transmission
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-black uppercase tracking-wide text-foreground">
                    Secure Your Framework
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  data-ocid="contact.panel"
                >
                  {/* Name */}
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono"
                      style={{ color: "oklch(0.65 0.02 210)" }}
                    >
                      <User size={10} className="inline mr-1" />
                      Full Name
                    </label>
                    <Input
                      id="name"
                      data-ocid="contact.input"
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="font-body bg-transparent rounded-lg h-11 transition-all duration-200"
                      style={{
                        background: "oklch(0.10 0.015 200)",
                        border: errors.name
                          ? "1px solid oklch(0.577 0.245 27.325)"
                          : "1px solid oklch(0.25 0.035 210)",
                        color: "oklch(0.96 0.005 210)",
                      }}
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-xs mt-1.5"
                        style={{ color: "oklch(0.7 0.2 27)" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono"
                      style={{ color: "oklch(0.65 0.02 210)" }}
                    >
                      <Mail size={10} className="inline mr-1" />
                      Email Address
                    </label>
                    <Input
                      id="email"
                      data-ocid="contact.input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="font-body bg-transparent rounded-lg h-11 transition-all duration-200"
                      style={{
                        background: "oklch(0.10 0.015 200)",
                        border: errors.email
                          ? "1px solid oklch(0.577 0.245 27.325)"
                          : "1px solid oklch(0.25 0.035 210)",
                        color: "oklch(0.96 0.005 210)",
                      }}
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-xs mt-1.5"
                        style={{ color: "oklch(0.7 0.2 27)" }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono"
                      style={{ color: "oklch(0.65 0.02 210)" }}
                    >
                      <MessageSquare size={10} className="inline mr-1" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      data-ocid="contact.textarea"
                      placeholder="Describe your security requirements or concerns..."
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="font-body bg-transparent rounded-lg resize-none transition-all duration-200"
                      style={{
                        background: "oklch(0.10 0.015 200)",
                        border: errors.message
                          ? "1px solid oklch(0.577 0.245 27.325)"
                          : "1px solid oklch(0.25 0.035 210)",
                        color: "oklch(0.96 0.005 210)",
                      }}
                    />
                    {errors.message && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-xs mt-1.5"
                        style={{ color: "oklch(0.7 0.2 27)" }}
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    data-ocid="contact.submit_button"
                    type="submit"
                    disabled={submitInquiry.isPending}
                    className="w-full font-display font-black uppercase tracking-widest text-sm rounded-lg h-12 transition-all duration-300"
                    style={{
                      background: submitInquiry.isPending
                        ? "oklch(0.83 0.15 192 / 0.5)"
                        : "oklch(0.83 0.15 192)",
                      color: "oklch(0.10 0.015 200)",
                      boxShadow: submitInquiry.isPending
                        ? "none"
                        : "0 0 24px oklch(0.83 0.15 192 / 0.4), 0 4px 16px oklch(0 0 0 / 0.3)",
                    }}
                  >
                    {submitInquiry.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Transmit Message <ChevronRight size={16} />
                      </span>
                    )}
                  </Button>

                  {submitInquiry.isSuccess && (
                    <motion.div
                      data-ocid="contact.success_state"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center gap-2 text-sm p-3 rounded-lg"
                      style={{
                        background: "oklch(0.7 0.2 140 / 0.1)",
                        border: "1px solid oklch(0.7 0.2 140 / 0.3)",
                        color: "oklch(0.7 0.2 140)",
                      }}
                    >
                      <Shield size={14} /> Message received. We'll be in touch
                      shortly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          background: "oklch(0.09 0.012 200)",
          borderTop: "1px solid oklch(0.25 0.035 210 / 0.6)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AstraIcon size={28} />
                <span
                  className="font-display font-bold uppercase tracking-widest text-glow-cyan"
                  style={{ color: "var(--cyber-cyan)" }}
                >
                  CyberAstras
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "oklch(0.55 0.02 210)" }}
              >
                Combining ancient precision with modern cybersecurity to
                protect, detect, and eliminate real-world digital threats.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/cyberastras"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.link"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "oklch(0.14 0.025 210)",
                    border: "1px solid oklch(0.25 0.035 210)",
                    color: "oklch(0.65 0.02 210)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.83 0.15 192)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.83 0.15 192 / 0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 12px oklch(0.83 0.15 192 / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.65 0.02 210)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.25 0.035 210)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://twitter.com/cyberastras"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.link"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "oklch(0.14 0.025 210)",
                    border: "1px solid oklch(0.25 0.035 210)",
                    color: "oklch(0.65 0.02 210)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.83 0.15 192)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.83 0.15 192 / 0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 12px oklch(0.83 0.15 192 / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.65 0.02 210)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.25 0.035 210)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Twitter size={15} />
                </a>
                <a
                  href="https://github.com/cyberastras"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.link"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "oklch(0.14 0.025 210)",
                    border: "1px solid oklch(0.25 0.035 210)",
                    color: "oklch(0.65 0.02 210)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.83 0.15 192)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.83 0.15 192 / 0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 12px oklch(0.83 0.15 192 / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.65 0.02 210)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.25 0.035 210)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Github size={15} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="font-display font-bold uppercase tracking-widest text-xs mb-5 font-mono"
                style={{ color: "var(--cyber-cyan)" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "Services", "Blog", "About", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        data-ocid="nav.link"
                        className="text-sm flex items-center gap-2 transition-colors duration-200"
                        style={{ color: "oklch(0.55 0.02 210)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "oklch(0.83 0.15 192)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "oklch(0.55 0.02 210)";
                        }}
                      >
                        <ChevronRight
                          size={12}
                          style={{ color: "oklch(0.83 0.15 192 / 0.5)" }}
                        />
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                className="font-display font-bold uppercase tracking-widest text-xs mb-5 font-mono"
                style={{ color: "var(--cyber-cyan)" }}
              >
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Penetration Testing",
                  "Vulnerability Assessment",
                  "Web Application Security",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      data-ocid="nav.link"
                      className="text-sm flex items-center gap-2 transition-colors duration-200"
                      style={{ color: "oklch(0.55 0.02 210)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "oklch(0.83 0.15 192)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "oklch(0.55 0.02 210)";
                      }}
                    >
                      <ChevronRight
                        size={12}
                        style={{ color: "oklch(0.83 0.15 192 / 0.5)" }}
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid oklch(0.25 0.035 210 / 0.5)" }}
          >
            <p className="text-xs" style={{ color: "oklch(0.45 0.02 210)" }}>
              © {new Date().getFullYear()} CyberAstras. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "oklch(0.45 0.02 210)" }}>
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "oklch(0.83 0.15 192)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
