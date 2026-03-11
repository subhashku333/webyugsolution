import PageHero from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";

const featuredPost = {
  title: "The Complete SEO Strategy Guide for 2026: What's Actually Working",
  excerpt:
    "Search engines have fundamentally changed in the past 18 months. AI-generated content, SGE, and intent-based ranking mean that old-school SEO tactics no longer cut it. Here's our comprehensive guide to building an SEO strategy that wins in 2026.",
  category: "SEO",
  date: "March 5, 2026",
  readTime: "12 min read",
  image: "/assets/generated/blog-seo.dim_600x400.jpg",
  author: "Sneha Kapoor",
};

const posts = [
  {
    title: "10 Social Media Trends Dominating 2026 That Brands Can't Ignore",
    excerpt:
      "From AI-generated reels to niche micro-communities, social media is evolving faster than ever. We break down the top 10 trends shaping brand strategies this year.",
    category: "Social Media",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    image: "/assets/generated/blog-social.dim_600x400.jpg",
  },
  {
    title: "Why Your Google Ads ROAS Is Declining (And How to Fix It)",
    excerpt:
      "If your Google Ads performance has been slipping, you're not alone. Competition, audience fatigue, and poor Quality Scores are often the culprits.",
    category: "PPC",
    date: "Feb 20, 2026",
    readTime: "10 min read",
    image: "/assets/generated/portfolio-ppc.dim_600x400.jpg",
  },
  {
    title:
      "The Ultimate Web Design Checklist for High-Converting Landing Pages",
    excerpt:
      "A beautiful website means nothing if it doesn't convert. We've distilled 200+ A/B tests into this actionable checklist for landing pages that actually get leads.",
    category: "Web Design",
    date: "Feb 12, 2026",
    readTime: "7 min read",
    image: "/assets/generated/portfolio-ecommerce.dim_600x400.jpg",
  },
  {
    title: "Email Marketing in 2026: Personalization, AI, and Open Rates",
    excerpt:
      "Batch-and-blast email is dead. Modern email marketing uses AI personalization and behavioral triggers to achieve 35-50% open rates.",
    category: "Email Marketing",
    date: "Feb 5, 2026",
    readTime: "9 min read",
    image: "/assets/generated/blog-seo.dim_600x400.jpg",
  },
  {
    title: "Content Marketing ROI: How to Measure What Actually Matters",
    excerpt:
      "Most content marketing reports focus on vanity metrics like page views and shares. We show you how to tie your content directly to pipeline and revenue.",
    category: "Content",
    date: "Jan 28, 2026",
    readTime: "11 min read",
    image: "/assets/generated/blog-social.dim_600x400.jpg",
  },
  {
    title: "Local SEO for Multi-Location Businesses: A Practical Playbook",
    excerpt:
      "Managing local SEO across 10, 50, or 500 locations is a completely different beast. This guide covers scalable systems for citation management.",
    category: "SEO",
    date: "Jan 18, 2026",
    readTime: "14 min read",
    image: "/assets/generated/portfolio-seo.dim_600x400.jpg",
  },
];

const categories = [
  "SEO",
  "PPC",
  "Social Media",
  "Web Design",
  "Content",
  "Email Marketing",
];

export default function BlogPage() {
  return (
    <div>
      <title>Blog | WebYugSolution</title>
      <PageHero
        title="Digital Marketing Blog"
        description="Expert insights, strategies, and tips from the WebYugSolution team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Featured */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-border card-hover mb-10">
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-primary/10 text-primary border-none">
                        {featuredPost.category}
                      </Badge>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Calendar size={12} />
                        {featuredPost.date}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock size={12} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        By {featuredPost.author}
                      </span>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary p-0"
                      >
                        Read Article <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {posts.map((post, i) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Card className="h-full overflow-hidden border-border card-hover">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-primary/10 text-primary border-none text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-muted-foreground text-xs flex items-center gap-1">
                            <Clock size={11} />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-foreground text-sm mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar size={11} />
                            {post.date}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary p-0 h-auto text-xs"
                          >
                            Read More <ArrowRight size={13} className="ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-foreground mb-3">
                  Search
                </h3>
                <div className="flex gap-2">
                  <Input placeholder="Search articles..." className="text-sm" />
                  <Button size="sm" className="bg-primary">
                    Go
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-foreground mb-3">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-foreground mb-3">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.title} className="flex gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground line-clamp-2 leading-tight mb-1">
                          {post.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="gradient-card text-white">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Get weekly digital marketing tips delivered to your inbox.
                  </p>
                  <Input
                    placeholder="Your email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 mb-3 text-sm"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
