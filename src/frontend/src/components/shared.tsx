import { motion } from "motion/react";

// --- Circuit board SVG background ---
export const CircuitPattern = () => (
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
export const AstraIcon = ({ size = 32 }: { size?: number }) => (
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
export const ServiceCard = ({
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
        border: "1px solid oklch(0.83 0.15 192 / 0.25)",
      }}
    >
      <Icon size={22} style={{ color: "var(--cyber-cyan)" }} />
    </div>
    <h3 className="font-display font-bold text-base uppercase tracking-wide text-foreground mb-2">
      {title}
    </h3>
    <p
      className="text-sm leading-relaxed"
      style={{ color: "oklch(0.62 0.02 210)" }}
    >
      {description}
    </p>
  </motion.div>
);

// --- Page Hero Banner ---
export const PageHero = ({
  label,
  title,
  titleHighlight,
  subtitle,
}: {
  label: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
}) => (
  <section
    className="relative py-24 overflow-hidden"
    style={{ background: "oklch(0.10 0.015 200)" }}
  >
    <CircuitPattern />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, oklch(0.83 0.15 192 / 0.06) 0%, transparent 60%)",
      }}
    />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="inline-block text-xs font-bold uppercase tracking-[0.3em] font-mono mb-5 px-3 py-1 rounded"
          style={{
            color: "var(--cyber-cyan)",
            background: "oklch(0.83 0.15 192 / 0.08)",
            border: "1px solid oklch(0.83 0.15 192 / 0.2)",
          }}
        >
          {label}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground mb-4">
          {title}{" "}
          {titleHighlight && (
            <span style={{ color: "var(--cyber-cyan)" }}>{titleHighlight}</span>
          )}
        </h1>
        {subtitle && (
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.65 0.02 210)" }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);
