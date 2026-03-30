import { PageHero } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Lock,
  ShieldCheck,
  Target,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";

const allServices = [
  {
    icon: Target,
    title: "Penetration Testing",
    shortDesc: "We test your systems the same way a real hacker would.",
    fullDesc:
      "We test your systems the same way a real hacker would — finding weak spots in your website, network, and apps before someone with bad intentions does. After testing, you get a clear report that explains every issue found and the steps to fix them, in plain language anyone can understand.",
    color: "var(--cyber-cyan)",
  },
  {
    icon: Lock,
    title: "Vulnerability Assessment",
    shortDesc: "We find and rank every security gap in your systems.",
    fullDesc:
      "We scan and manually review your systems to find security gaps, rank them by how dangerous they are, and tell you exactly what needs to be fixed first. This is ideal for businesses that want a full picture of their security health without an in-depth hacking simulation.",
    color: "var(--cyber-cyan)",
  },
  {
    icon: Wifi,
    title: "WiFi Security",
    shortDesc: "We test your wireless network for weak points.",
    fullDesc:
      "We test your wireless network for weak points that could let outsiders get in — including weak passwords, open hotspots, and router misconfigurations. A poorly secured WiFi network can give hackers a free pass into your business systems. We find those gaps and help you close them.",
    color: "var(--cyber-cyan)",
  },
  {
    icon: Globe,
    title: "Web Application Security",
    shortDesc: "We test your website and web apps for known security issues.",
    fullDesc:
      "We deeply test your website and web apps for known security issues — like weak logins, data leaks, and ways attackers could manipulate your system. Every issue is explained in plain terms with clear steps on how to fix it.",
    color: "var(--cyber-cyan)",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Awareness Training",
    shortDesc: "We teach your team how to spot and avoid online threats.",
    fullDesc:
      "Most security breaches happen because of human error — a clicked link, a shared password, or a convincing scam call. We train your team to recognise phishing emails, social engineering attacks, and insider threats, so your people become your strongest line of defence rather than your biggest risk.",
    color: "oklch(0.76 0.10 75)",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our"
        titleHighlight="Services"
        subtitle="A focused set of cybersecurity services designed for businesses of all sizes. Every service is delivered personally by our founder."
      />

      {/* Services list */}
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
          <div className="grid md:grid-cols-2 gap-8">
            {allServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-8 relative overflow-hidden"
                style={{
                  background: "oklch(0.13 0.022 205)",
                  border: "1px solid oklch(0.25 0.035 210 / 0.7)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px oklch(0.83 0.15 192 / 0.4), 0 0 30px oklch(0.83 0.15 192 / 0.1), 0 8px 32px oklch(0 0 0 / 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  }}
                />
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    background: "oklch(0.83 0.15 192 / 0.1)",
                    border: "1px solid oklch(0.83 0.15 192 / 0.25)",
                  }}
                >
                  <service.icon size={22} style={{ color: service.color }} />
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-[0.3em] font-mono mb-2"
                  style={{ color: service.color }}
                >
                  Service
                </div>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-foreground mb-4">
                  {service.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "oklch(0.65 0.02 210)" }}
                >
                  {service.fullDesc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20"
        style={{ background: "oklch(0.10 0.015 200)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground mb-4">
              Not sure which service is right for you?
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "oklch(0.65 0.02 210)" }}
            >
              Send us a message and we will help you figure out exactly what
              your business needs.
            </p>
            <Link to="/contact">
              <Button
                className="font-display font-bold uppercase tracking-widest text-xs rounded-full px-8 py-3 h-auto transition-all duration-300 hover:scale-105"
                style={{
                  background: "oklch(0.83 0.15 192)",
                  color: "oklch(0.10 0.015 200)",
                  boxShadow: "0 0 20px oklch(0.83 0.15 192 / 0.4)",
                }}
              >
                Contact Us <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
