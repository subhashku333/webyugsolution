import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  "SEO Optimization",
  "PPC Advertising",
  "Social Media Marketing",
  "Web Design & Development",
  "Content Marketing",
  "Email Marketing",
  "Full Digital Marketing Package",
  "Other / Consultation",
];

const budgets = [
  "Under ₹25,000/month",
  "₹25,000 – ₹50,000/month",
  "₹50,000 – ₹1,00,000/month",
  "₹1,00,000 – ₹2,50,000/month",
  "Above ₹2,50,000/month",
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Digital Avenue, Tech Park, Mumbai, Maharashtra 400001",
  },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@webyugsolution.com" },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9:00 AM – 7:00 PM IST",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutateAsync, isPending, isError } = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({
        name,
        email,
        phone,
        serviceInterest: `${service} | Budget: ${budget}`,
        message,
      });
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <title>Contact Us | WebYugSolution</title>
      <PageHero
        title="Get in Touch"
        description="Ready to grow your business? Let's have a conversation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Contact Info
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to launch a new campaign, redesign your
                website, or simply explore your options — we're here to help.
                Reach out and we'll respond within 24 hours.
              </p>

              <div className="space-y-5 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                        {info.label}
                      </div>
                      <div className="text-sm text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-border bg-brand-50 h-52 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Mumbai, Maharashtra
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border shadow-brand">
                <CardContent className="p-8">
                  {submitted ? (
                    <div
                      className="text-center py-12"
                      data-ocid="contact.form.success_state"
                    >
                      <CheckCircle2
                        size={64}
                        className="text-primary mx-auto mb-4"
                      />
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. Our team will get back to
                        you within 24 hours.
                      </p>
                      <Button
                        className="mt-6 bg-primary"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-1">
                          Request a Free Quote
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Fill out the form and we'll prepare a custom proposal
                          for you.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Arjun Sharma"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete="name"
                            data-ocid="contact.name.input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="arjun@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            data-ocid="contact.email.input"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          autoComplete="tel"
                          data-ocid="contact.phone.input"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Service Interested In *</Label>
                          <Select onValueChange={setService} required>
                            <SelectTrigger data-ocid="contact.service.select">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s} value={s}>
                                  {s}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Budget Range</Label>
                          <Select onValueChange={setBudget}>
                            <SelectTrigger data-ocid="contact.budget.select">
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgets.map((b) => (
                                <SelectItem key={b} value={b}>
                                  {b}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your business, goals, and what you're looking to achieve..."
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          data-ocid="contact.message.textarea"
                        />
                      </div>

                      {isError && (
                        <div
                          className="text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-lg"
                          data-ocid="contact.form.error_state"
                        >
                          Failed to send your message. Please try again or email
                          us directly.
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-primary hover:bg-primary/90 font-semibold py-6 text-base"
                        data-ocid="contact.submit_button"
                      >
                        {isPending ? (
                          <>
                            <Loader2
                              size={18}
                              className="mr-2 animate-spin"
                              data-ocid="contact.form.loading_state"
                            />
                            Sending your message...
                          </>
                        ) : (
                          "Send Message & Get Free Quote"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
