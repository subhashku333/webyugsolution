import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Heart, Lightbulb, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Heart,
    title: "Client-First",
    desc: "Your success is our success. We build long-term relationships by putting client goals at the heart of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay ahead of digital trends and constantly evolve our strategies to keep your business competitive.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work as an extension of your team, communicating openly and delivering insights that drive better decisions.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold our work to the highest standards — every campaign, every report, every result matters deeply to us.",
  },
];

const team = [
  {
    name: "Arjun Mehta",
    role: "CEO & Co-Founder",
    exp: "12 years in digital marketing",
    initials: "AM",
  },
  {
    name: "Sneha Kapoor",
    role: "Head of SEO",
    exp: "Google Certified Expert, 8 years",
    initials: "SK",
  },
  {
    name: "Vikram Singh",
    role: "Creative Director",
    exp: "Brand design & UX specialist",
    initials: "VS",
  },
  {
    name: "Nisha Rao",
    role: "PPC Specialist",
    exp: "Meta & Google Ads certified",
    initials: "NR",
  },
];

const certifications = [
  "ISO 9001 Certified Agency",
  "Google Premier Partner",
  "Meta Business Partner",
  "HubSpot Diamond Agency Partner",
];

const milestones = [
  { year: "2014", event: "WebYugSolution founded in Mumbai" },
  { year: "2016", event: "Crossed 50 clients milestone" },
  { year: "2018", event: "Opened second office in Bangalore" },
  { year: "2020", event: "Launched AI-powered analytics suite" },
  { year: "2022", event: "Named Top 10 Digital Agency in India" },
  { year: "2024", event: "500+ clients, 200+ projects delivered" },
];

export default function AboutPage() {
  return (
    <div>
      <title>About Us | WebYugSolution</title>
      <PageHero
        title="About WebYugSolution"
        description="A decade of digital excellence, helping brands grow smarter online."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5">
                From a Small Team to a Digital Powerhouse
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2014, WebYugSolution started with a simple mission:
                to make world-class digital marketing accessible to every
                business in India. What began as a two-person team in a Mumbai
                co-working space has grown into a 50-strong agency serving
                clients across 15+ countries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, we combine deep industry expertise with cutting-edge
                technology to deliver campaigns that generate real, measurable
                business impact — from startups to Fortune 500 companies.
              </p>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-primary flex-shrink-0"
                    />
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="WebYugSolution Team"
                className="rounded-2xl shadow-brand-lg w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border bg-white p-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl gradient-card flex items-center justify-center mb-4">
                  <Lightbulb size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative,
                  data-driven digital marketing strategies that generate real
                  growth, build lasting brand equity, and create measurable
                  impact in a rapidly evolving digital world.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-white p-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl gradient-card flex items-center justify-center mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Asia's most trusted digital marketing agency —
                  recognized not just for exceptional campaigns, but for the
                  long-term partnerships we build and the transformative growth
                  we deliver for every client we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border card-hover text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon size={26} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground">
              A Decade of Growth
            </h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 md:text-right hidden md:block">
                  {i % 2 === 0 && (
                    <p className="text-foreground font-medium">{m.event}</p>
                  )}
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-card flex items-center justify-center text-white text-xs font-bold shadow-brand z-10">
                  {m.year}
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium md:hidden">
                    {m.event}
                  </p>
                  {i % 2 !== 0 && (
                    <p className="text-foreground font-medium hidden md:block">
                      {m.event}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              The People
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Meet Our Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border card-hover text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full gradient-card flex items-center justify-center text-white text-2xl font-display font-bold mx-auto mb-4 shadow-brand">
                      {member.initials}
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {member.exp}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
