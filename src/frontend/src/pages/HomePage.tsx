import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart2,
  FileText,
  Headphones,
  Mail,
  Monitor,
  Search,
  Share2,
  Shield,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
];

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search rankings with data-driven SEO strategies that drive organic traffic and qualified leads.",
  },
  {
    icon: BarChart2,
    title: "PPC Advertising",
    desc: "Maximize ROI with precision-targeted paid advertising campaigns across Google, Bing, and beyond.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your audience across all major social media platforms.",
  },
  {
    icon: Monitor,
    title: "Web Design & Dev",
    desc: "Stunning, conversion-optimized websites that reflect your brand and drive business results.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Compelling content strategies that attract, engage, and convert your target audience.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Automated email campaigns that nurture leads and keep your customers engaged.",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "We focus on measurable outcomes — traffic, leads, and revenue that impact your bottom line.",
  },
  {
    icon: TrendingUp,
    title: "Data-First Approach",
    desc: "Every decision is backed by analytics and real-time data insights, not guesswork.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    desc: "Monthly reports with clear metrics so you always know exactly what you're getting.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Your dedicated account manager is always just a call away, 5 days a week.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechNova India",
    text: "WebYugSolution transformed our digital presence. Our organic traffic increased by 280% within 6 months, and our leads doubled. Truly exceptional work!",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Director, EcoMart",
    text: "The PPC campaigns they ran for us delivered a 4.2x ROAS consistently. Their team understands our business goals deeply and delivers beyond expectations.",
  },
  {
    name: "Anjali Patel",
    role: "Founder, StyleHouse Boutique",
    text: "Our social media following grew from 2K to 48K followers in one year. The content strategy was spot-on and the engagement was phenomenal.",
  },
];

function StarRating() {
  return (
    <div className="flex mb-4">
      <Star size={16} className="text-amber-400 fill-amber-400" />
      <Star size={16} className="text-amber-400 fill-amber-400" />
      <Star size={16} className="text-amber-400 fill-amber-400" />
      <Star size={16} className="text-amber-400 fill-amber-400" />
      <Star size={16} className="text-amber-400 fill-amber-400" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <title>WebYugSolution | Digital Marketing Agency</title>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/hero-bg.dim_1400x700.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 India's Fastest Growing Digital Agency
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Grow Your Business with
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We craft data-driven digital marketing strategies that amplify
              your brand, generate qualified leads, and deliver measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-brand-lg px-8 py-4 text-base font-semibold"
                data-ocid="home.hero.primary_button"
              >
                <Link to="/contact">
                  Get Started Today <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-base font-semibold"
                data-ocid="home.hero.secondary_button"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive Digital Marketing Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From SEO to social media, we provide end-to-end digital marketing
              solutions tailored to your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full card-hover border-border group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <service.icon
                        size={22}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-brand-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                We Deliver Results, Not Just Promises
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over a decade of experience and hundreds of successful
                campaigns, WebYugSolution is your trusted partner for
                sustainable digital growth.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">
                  About Our Agency <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-border bg-white card-hover">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <d.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        {d.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{d.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border bg-white card-hover">
                  <CardContent className="p-6">
                    <StarRating />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-card flex items-center justify-center text-white font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">
                          {t.name}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award size={48} className="text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join 500+ businesses that trust WebYugSolution for their digital
              growth. Let's build something remarkable together.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              data-ocid="home.cta.button"
            >
              <Link to="/contact">
                Start Your Journey <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
