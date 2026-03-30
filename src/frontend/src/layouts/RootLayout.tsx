import { AstraIcon } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useRouterState();

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname triggers on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
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
          <Link to="/" className="flex items-center">
            <img
              src="/assets/uploads/Untitled-3-1-1.png"
              alt="CyberAstras"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                data-ocid="nav.link"
                className="text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{
                  color: isActive(to)
                    ? "oklch(0.83 0.15 192)"
                    : "oklch(0.65 0.02 210)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.83 0.15 192)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive(to)
                    ? "oklch(0.83 0.15 192)"
                    : "oklch(0.65 0.02 210)";
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center">
            <Link to="/contact">
              <Button
                data-ocid="nav.primary_button"
                className="hidden md:inline-flex font-display font-bold uppercase tracking-widest text-xs rounded-full px-5 py-2 transition-all duration-300"
                style={{
                  background: "oklch(0.83 0.15 192)",
                  color: "oklch(0.10 0.015 200)",
                  boxShadow: "0 0 20px oklch(0.83 0.15 192 / 0.4)",
                }}
              >
                Get Protected
              </Button>
            </Link>
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
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  data-ocid="nav.link"
                  className="block py-3 text-left text-sm font-bold uppercase tracking-widest transition-colors"
                  style={{
                    color: isActive(to)
                      ? "oklch(0.83 0.15 192)"
                      : "oklch(0.65 0.02 210)",
                    borderBottom: "1px solid oklch(0.25 0.035 210 / 0.4)",
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link to="/contact">
                <Button
                  data-ocid="nav.primary_button"
                  className="mt-3 w-full font-display font-bold uppercase tracking-widest text-xs rounded-full"
                  style={{
                    background: "oklch(0.83 0.15 192)",
                    color: "oklch(0.10 0.015 200)",
                  }}
                >
                  Get Protected
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
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
                className="font-display font-bold uppercase tracking-widest"
                style={{ color: "var(--cyber-cyan)" }}
              >
                CyberAstras
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.55 0.02 210)" }}
            >
              Combining ancient precision with modern cybersecurity to protect,
              detect, and eliminate real-world digital threats.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.linkedin.com/company/cyberastras",
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                {
                  href: "https://twitter.com/cyberastras",
                  label: "Twitter",
                  Icon: Twitter,
                },
                {
                  href: "https://github.com/cyberastras",
                  label: "GitHub",
                  Icon: Github,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
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
                  <Icon size={15} />
                </a>
              ))}
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
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Services" },
                { to: "/blog" as const, label: "Blog" },
                { to: "/about" as const, label: "About" },
                { to: "/contact" as const, label: "Contact" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
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
                    {label}
                  </Link>
                </li>
              ))}
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
                "WiFi Security",
                "Web Application Security",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
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
                      style={{ color: "oklch(0.76 0.10 75 / 0.5)" }}
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(0.25 0.035 210 / 0.4)" }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: "oklch(0.40 0.02 210)" }}
          >
            © 2026 CyberAstras. All rights reserved.
          </p>
          <p
            className="text-xs font-mono flex items-center gap-2"
            style={{ color: "oklch(0.35 0.02 210)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.7 0.2 140)" }}
            />
            All transmissions encrypted
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout() {
  const { location } = useRouterState();

  // Scroll to top on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname triggers on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Toaster theme="dark" />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
