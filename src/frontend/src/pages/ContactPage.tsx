import { CircuitPattern, PageHero } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight,
  Linkedin,
  Mail,
  MessageSquare,
  User,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`CyberAstras Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:info@cyberastras.com?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email client...", {
      description: "Your message is pre-filled and ready to send.",
    });
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Get In"
        titleHighlight="Touch"
        subtitle="Ready to protect your business online? Get in touch and we will reply within 24 hours."
      />

      <section
        id="contact"
        className="relative py-24"
        style={{ background: "oklch(0.11 0.018 205)" }}
      >
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
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-24"
            >
              <h2
                className="font-display text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight mb-6"
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
                className="text-base leading-relaxed max-w-sm mb-10"
                style={{ color: "oklch(0.65 0.02 210)" }}
              >
                Ready to protect your business online? Get in touch and we will
                reply within 24 hours with a plan built around your needs.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                {[
                  { label: "Email", value: "info@cyberastras.com", icon: Mail },
                  {
                    label: "Response Time",
                    value: "Within 24 hours",
                    icon: Zap,
                  },
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

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "oklch(0.83 0.15 192 / 0.1)",
                      border: "1px solid oklch(0.83 0.15 192 / 0.25)",
                    }}
                  >
                    <Linkedin
                      size={16}
                      style={{ color: "var(--cyber-cyan)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest font-mono mb-0.5"
                      style={{ color: "oklch(0.5 0.02 210)" }}
                    >
                      LinkedIn
                    </div>
                    <a
                      href="https://www.linkedin.com/company/cyberastras"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors duration-200"
                      style={{ color: "var(--cyber-cyan)" }}
                    >
                      /company/cyberastras
                    </a>
                  </div>
                </div>
              </div>

              {/* Security note */}
              <div
                className="mt-10 flex items-start gap-3 p-4 rounded-lg"
                style={{
                  background: "oklch(0.83 0.15 192 / 0.06)",
                  border: "1px solid oklch(0.83 0.15 192 / 0.2)",
                }}
              >
                <Mail
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--cyber-cyan)" }}
                />
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.60 0.02 210)" }}
                >
                  Clicking &lsquo;Send Message&rsquo; will open your email app
                  with your message pre-filled. Just hit send and we will get
                  back to you within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
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
                <div className="mb-7">
                  <div className="flex items-center gap-2 mb-1">
                    <Mail size={16} style={{ color: "var(--cyber-cyan)" }} />
                    <span
                      className="text-xs font-bold uppercase tracking-widest font-mono"
                      style={{ color: "var(--cyber-cyan)" }}
                    >
                      Direct Message
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-black uppercase tracking-wide text-foreground">
                    Send Us a Message
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
                      className="font-body bg-transparent rounded-lg h-11"
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
                      className="font-body bg-transparent rounded-lg h-11"
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
                      placeholder="Describe your security requirements or questions..."
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="font-body bg-transparent rounded-lg resize-none"
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
                    className="w-full font-display font-black uppercase tracking-widest text-sm rounded-lg h-12 transition-all duration-300"
                    style={{
                      background: "oklch(0.83 0.15 192)",
                      color: "oklch(0.10 0.015 200)",
                      boxShadow:
                        "0 0 24px oklch(0.83 0.15 192 / 0.4), 0 4px 16px oklch(0 0 0 / 0.3)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Send Message <ChevronRight size={16} />
                    </span>
                  </Button>

                  {sent && (
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
                      <Mail size={14} /> Your email app should have opened. Just
                      hit send!
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
