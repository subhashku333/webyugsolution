import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHero({
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="gradient-hero pt-32 pb-20 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1 text-sm text-white/60 mb-6"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} />}
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-white/80 text-lg max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
