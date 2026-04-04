import { CircuitPattern, PageHero } from "@/components/shared";
import { Crosshair, Eye, Globe, Server, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About CyberAstras"
        title="Meet The"
        titleHighlight="Founder"
        subtitle="A solo cybersecurity expert who works directly with every client to keep their business safe online."
      />

      {/* Founder Section */}
      <section
        className="relative py-24"
        style={{ background: "oklch(0.11 0.018 205)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, oklch(0.83 0.15 192 / 0.04) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground mb-6">
                Deepak{" "}
                <span style={{ color: "oklch(0.76 0.10 75)" }}>Sharma</span>
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
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                Unlike big agencies where your project gets passed around, at
                CyberAstras you always deal directly with Deepak. That means
                faster answers, more thorough work, and someone who genuinely
                cares about your security outcome.
              </p>

              {/* Feature list */}
              {[
                {
                  icon: Zap,
                  title: "Industry-Level Experience",
                  text: "Years of experience protecting real businesses from cyber threats — not just theory.",
                },
                {
                  icon: Server,
                  title: "Solo Consultant",
                  text: "You work directly with the expert, start to finish. No handoffs, no surprises.",
                },
                {
                  icon: Globe,
                  title: "Clear Reporting",
                  text: "Every engagement ends with a plain language report explaining what was found and what to fix.",
                },
                {
                  icon: Shield,
                  title: "Client Privacy First",
                  text: "All information you share is treated with the highest level of confidentiality.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 mb-5 p-4 rounded-lg"
                  style={{
                    background: "oklch(0.13 0.022 205)",
                    border: "1px solid oklch(0.25 0.035 210 / 0.5)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "oklch(0.83 0.15 192 / 0.1)",
                      border: "1px solid oklch(0.83 0.15 192 / 0.25)",
                    }}
                  >
                    <Icon size={15} style={{ color: "var(--cyber-cyan)" }} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm uppercase tracking-wide text-foreground mb-1">
                      {title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.62 0.02 210)" }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right: Founder photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative lg:sticky lg:top-24"
            >
              <div
                className="rounded-xl"
                style={{
                  border: "1px solid oklch(0.25 0.035 210)",
                  boxShadow:
                    "0 0 0 1px oklch(0.83 0.15 192 / 0.1), 0 20px 60px oklch(0 0 0 / 0.5)",
                  background: "oklch(0.10 0.015 200)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/assets/uploads/image-1.png"
                  alt="Deepak Sharma — Founder & CyberSecurity Consultant at CyberAstras"
                  className="w-full object-contain block"
                />
                <div
                  className="px-5 py-4"
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
                  <p
                    className="mt-3 text-xs leading-relaxed"
                    style={{ color: "oklch(0.50 0.02 210)" }}
                  >
                    Years of industry-level experience protecting real
                    businesses from cyber threats.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission — detailed */}
      <section
        className="relative py-24"
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
              Our Direction
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Vision &{" "}
              <span style={{ color: "var(--cyber-cyan)" }}>Mission</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                A Safer Digital World
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                We envision a world where every business — big or small — can
                operate online without fear of being hacked. Our goal is to make
                strong cybersecurity accessible to everyone, not just large
                corporations.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.58 0.02 210)" }}
              >
                Technology should be a tool that helps your business grow — not
                a source of stress and risk. CyberAstras is here to make sure it
                stays that way for every client we work with.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                Protect Before They Strike
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                Our mission is to find and fix security weaknesses in your
                systems before attackers can exploit them. We bring the
                precision and dedication of a true expert to every engagement —
                giving you real answers, plain language reports, and peace of
                mind.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.58 0.02 210)" }}
              >
                Every business deserves to know exactly where they stand when it
                comes to security. We do not use confusing jargon or scare
                tactics — just honest, clear guidance you can act on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
