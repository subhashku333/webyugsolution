import PageHero from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Category = "all" | "seo" | "webdesign" | "social" | "ppc";

const projects = [
  {
    id: 1,
    category: "seo" as Category,
    title: "Organic Traffic Tripled in 8 Months",
    client: "TechNova India",
    result: "+287% Organic Traffic",
    image: "/assets/generated/portfolio-seo.dim_600x400.jpg",
    tags: ["SEO", "Content"],
  },
  {
    id: 2,
    category: "webdesign" as Category,
    title: "E-Commerce Redesign Boosts Sales 150%",
    client: "EcoMart Retail",
    result: "+150% Conversion Rate",
    image: "/assets/generated/portfolio-ecommerce.dim_600x400.jpg",
    tags: ["Web Design", "UX"],
  },
  {
    id: 3,
    category: "social" as Category,
    title: "Instagram Followers from 2K to 48K",
    client: "StyleHouse Boutique",
    result: "2,300% Follower Growth",
    image: "/assets/generated/portfolio-social.dim_600x400.jpg",
    tags: ["Social Media", "Influencer"],
  },
  {
    id: 4,
    category: "ppc" as Category,
    title: "4.2x ROAS on Google Ads Campaign",
    client: "HealthPlus Pharma",
    result: "4.2x Return on Ad Spend",
    image: "/assets/generated/portfolio-ppc.dim_600x400.jpg",
    tags: ["PPC", "Google Ads"],
  },
  {
    id: 5,
    category: "seo" as Category,
    title: "Local SEO Dominance for Restaurant Chain",
    client: "SpiceRoute Restaurants",
    result: "+195% Local Searches",
    image: "/assets/generated/portfolio-seo.dim_600x400.jpg",
    tags: ["Local SEO", "GMB"],
  },
  {
    id: 6,
    category: "webdesign" as Category,
    title: "SaaS Landing Page Achieves 38% Signup Rate",
    client: "CloudDesk Software",
    result: "38% Signup Conversion",
    image: "/assets/generated/portfolio-ecommerce.dim_600x400.jpg",
    tags: ["Web Design", "CRO"],
  },
  {
    id: 7,
    category: "social" as Category,
    title: "LinkedIn B2B Campaign Generates 340 Leads",
    client: "FinServ Consultants",
    result: "340 Qualified B2B Leads",
    image: "/assets/generated/portfolio-social.dim_600x400.jpg",
    tags: ["LinkedIn Ads", "B2B"],
  },
  {
    id: 8,
    category: "ppc" as Category,
    title: "Meta Ads Scale: ₹50L Revenue in 3 Months",
    client: "FashionFirst India",
    result: "₹50L Revenue Generated",
    image: "/assets/generated/portfolio-ppc.dim_600x400.jpg",
    tags: ["Meta Ads", "E-Commerce"],
  },
];

const filters: { value: Category; label: string; ocid: string }[] = [
  { value: "all", label: "All Projects", ocid: "portfolio.all.tab" },
  { value: "seo", label: "SEO", ocid: "portfolio.seo.tab" },
  { value: "webdesign", label: "Web Design", ocid: "portfolio.webdesign.tab" },
  { value: "social", label: "Social Media", ocid: "portfolio.social.tab" },
  { value: "ppc", label: "PPC", ocid: "portfolio.ppc.tab" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <title>Portfolio | WebYugSolution</title>
      <PageHero
        title="Our Portfolio"
        description="Real results for real businesses. Explore our case studies and success stories."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <Tabs
              value={activeFilter}
              onValueChange={(v) => setActiveFilter(v as Category)}
            >
              <TabsList className="bg-secondary">
                {filters.map((f) => (
                  <TabsTrigger
                    key={f.value}
                    value={f.value}
                    data-ocid={f.ocid}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {f.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="group relative rounded-xl overflow-hidden border border-border shadow-xs hover:shadow-brand-lg transition-shadow duration-300 cursor-pointer"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 gradient-hero-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-white/20 text-white border-none"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-white font-display font-bold text-sm mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-xs mb-2">
                      {project.client}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-white font-medium">
                      <TrendingUp size={12} />
                      {project.result}
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mb-2">
                      {project.client}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-primary font-medium">
                      <TrendingUp size={12} />
                      {project.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
