import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  FileText,
  Mail,
  Monitor,
  Search,
  Share2,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Climb to the top of search results with our proven, white-hat SEO methodologies. We combine technical optimization, content strategy, and authoritative link building to achieve sustainable organic rankings.",
    features: [
      "Technical SEO Audit & Fixes",
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Local SEO & Google Business Profile",
      "Core Web Vitals Optimization",
      "Monthly Ranking Reports",
    ],
  },
  {
    icon: BarChart2,
    title: "PPC Advertising",
    desc: "Drive immediate, qualified traffic with precision-targeted pay-per-click campaigns. Our certified specialists manage your ad spend to maximize ROI across Google Ads, Bing Ads, and display networks.",
    features: [
      "Google & Bing Ads Management",
      "Remarketing Campaigns",
      "Shopping & Display Ads",
      "Landing Page Optimization",
      "A/B Testing & Bid Optimization",
      "Weekly Performance Reports",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a powerful social presence that drives brand awareness, engagement, and conversions. We create platform-specific strategies for Instagram, LinkedIn, Facebook, Twitter, and more.",
    features: [
      "Social Media Strategy Development",
      "Content Creation & Scheduling",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Partnerships",
      "Analytics & Sentiment Tracking",
    ],
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    desc: "Your website is your digital storefront. We design beautiful, fast, and conversion-optimized websites that make outstanding first impressions and turn visitors into customers.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Mobile-Responsive Design",
      "CMS Integration (WordPress, Shopify)",
      "Page Speed Optimization",
      "UI/UX Consulting",
    ],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Attract, engage, and convert with high-quality content that establishes your brand as an industry authority. From blog posts to video scripts, we craft content that resonates with your audience.",
    features: [
      "Content Strategy & Planning",
      "Blog Writing & Guest Posts",
      "Video Script & Production Support",
      "Infographics & Visual Content",
      "E-books & Whitepapers",
      "Content Distribution",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Nurture leads and retain customers with strategic email campaigns. We design automated workflows and personalized sequences that deliver the right message to the right person at the right time.",
    features: [
      "Email Strategy & Segmentation",
      "Campaign Design & Copywriting",
      "Marketing Automation (Klaviyo, HubSpot)",
      "A/B Testing Subject Lines",
      "Drip Sequences & Nurture Flows",
      "Deliverability Monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <title>Our Services | WebYugSolution</title>
      <PageHero
        title="Our Digital Marketing Services"
        description="Comprehensive, results-driven solutions for every aspect of your digital growth."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 rounded-xl gradient-card flex items-center justify-center flex-shrink-0 shadow-brand">
                        <service.icon size={26} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-display font-bold text-foreground mb-2">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-primary flex-shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link to="/contact">
                        Get a Quote <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute consultation and our experts will craft a
            custom digital growth plan for your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
          >
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
