import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  size?: "large" | "small";
}

export function Hero({
  title,
  subtitle,
  actions,
  size = "small",
}: HeroProps) {
  return (
    <section
      className={`hero-dark flex items-center ${
        size === "large"
          ? "min-h-[85vh]"
          : "min-h-[45vh]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}

        {actions && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
