"use client";

import React, { ReactNode, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Types
export type BannerLayout =
  | "split"
  | "centered"
  | "left-graphic"
  | "right-graphic"
  | "video-hero"
  | "marquee-hero";

export type BannerTheme =
  | "light"
  | "dark"
  | "gradient"
  | "glass"
  | "brand";

export type BadgeProps = {
  text?: string;
  icon?: ReactNode;
  className?: string;
};

export type CTA = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  asChild?: boolean;
};

export type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "none" };

export type Decoration = {
  showBeams?: boolean;
  showRadials?: boolean;
  showNoise?: boolean;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
};

export type AdvancedBannerProps = {
  id?: string;
  layout?: BannerLayout;
  theme?: BannerTheme;
  eyebrow?: string | ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  media?: Media;
  marqueeItems?: string[]; // for marquee-hero
  badge?: BadgeProps;
  customCtas?: ReactNode; // optional custom CTA node to override default buttons
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  mediaClassName?: string;
  decoration?: Decoration;
  minHeight?: string; // e.g. "60vh", "80vh"
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function DebugLog({ id, layout, theme, media }: { id?: string; layout?: string; theme?: string; media?: Media }) {
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[AdvancedBanner]", { id, layout, theme, media });
  }
  return null;
}

export function AdvancedBanner({
  id,
  layout = "split",
  theme = "gradient",
  eyebrow,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  media = { type: "image", src: "/pictures/priscilla-du-preez-AOdELn6senM-unsplash.jpg" },
  marqueeItems,
  badge,
  customCtas,
  className,
  containerClassName,
  contentClassName,
  mediaClassName,
  decoration,
  minHeight = "70vh",
}: AdvancedBannerProps) {
  const themeClasses = useMemo(() => {
    switch (theme) {
      case "dark":
        return "bg-[#0B0B0F] text-white";
      case "light":
        return "bg-gradient-to-b from-slate-50 to-white text-slate-900";
      case "glass":
        return "relative bg-background/40 backdrop-blur-xl";
      case "brand":
        return "bg-gradient-to-b from-violet-600/10 via-indigo-600/10 to-emerald-600/10";
      case "gradient":
      default:
        return "bg-gradient-to-b from-[#0B0B0F] via-[#0b1020] to-[#0B0B0F] text-white";
    }
  }, [theme]);

  const container = cn("relative overflow-hidden", themeClasses, className);
  const minH = minHeight;

  const renderMedia = () => {
    if (!media || media.type === "none") return null;

    if (media.type === "image") {
      return (
        <div className={cn("relative w-full h-full", mediaClassName)}>
          <Image
            src={media.src}
            alt={media.alt || "Banner image"}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      );
    }

    if (media.type === "video") {
      return (
        <div className={cn("relative w-full h-full", mediaClassName)}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video className="w-full h-full object-cover" src={media.src} poster={media.poster} autoPlay loop muted playsInline preload="auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      );
    }

    return null;
  };

  const renderDecoration = () => {
    const { showBeams, showRadials, showNoise, gradientFrom, gradientVia, gradientTo } = decoration || {};

    return (
      <>
        {showRadials && (
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className={cn(
              "absolute inset-0",
              "bg-[radial-gradient(ellipse_at_top,rgba(88,80,236,0.35),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25),transparent_35%)]"
            )} />
          </div>
        )}
        {showBeams && (
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: "oklch(0.72 0.16 260)" }} />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: "oklch(0.78 0.14 200)" }} />
          </div>
        )}
        {(gradientFrom || gradientVia || gradientTo) && (
          <div className={cn("absolute inset-0", `bg-gradient-to-br from-[${gradientFrom||"transparent"}] via-[${gradientVia||"transparent"}] to-[${gradientTo||"transparent"}]`)} />
        )}
        {showNoise && <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />}
      </>
    );
  };

  const Eyebrow = () =>
    eyebrow ? (
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur dark:border-white/10">
        {typeof eyebrow === "string" ? <span>{eyebrow}</span> : eyebrow}
      </div>
    ) : null;

  const BadgeChip = () =>
    badge?.text ? (
      <div className={cn("inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xs", badge.className)}>
        {badge.icon}
        <span>{badge.text}</span>
      </div>
    ) : null;

  const CTAGroup = () => (
    <div className="flex flex-wrap items-center gap-4">
      {primaryCta && (
        <Button
          variant={primaryCta.variant || "default"}
          size={primaryCta.size || "lg"}
          className={cn("shadow-lg shadow-violet-500/15", primaryCta.className)}
          onClick={() => {
            try {
              primaryCta.onClick?.();
              if (typeof window !== "undefined") console.info("[AdvancedBanner] primary CTA", primaryCta.label);
            } catch (e) {
              // eslint-disable-next-line no-console
              console.error("[AdvancedBanner] primary CTA error", e);
            }
          }}
          asChild={primaryCta.asChild}
        >
          {primaryCta.href ? <a href={primaryCta.href}>{primaryCta.label}</a> : <span>{primaryCta.label}</span>}
        </Button>
      )}
      {secondaryCta && (
        <Button
          variant={secondaryCta.variant || "outline"}
          size={secondaryCta.size || "lg"}
          className={cn("border-white/20 bg-transparent text-current hover:bg-white/10", secondaryCta.className)}
          onClick={() => {
            try {
              secondaryCta.onClick?.();
              if (typeof window !== "undefined") console.info("[AdvancedBanner] secondary CTA", secondaryCta.label);
            } catch (e) {
              // eslint-disable-next-line no-console
              console.error("[AdvancedBanner] secondary CTA error", e);
            }
          }}
          asChild={secondaryCta.asChild}
        >
          {secondaryCta.href ? <a href={secondaryCta.href}>{secondaryCta.label}</a> : <span>{secondaryCta.label}</span>}
        </Button>
      )}
    </div>
  );

  const Content = () => (
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("space-y-6", contentClassName)}
    >
      {BadgeChip()}
      {Eyebrow()}
      <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
      {subtitle && <p className="text-lg text-white/85 md:text-xl">{subtitle}</p>}
      {description && <p className="text-white/70 text-pretty max-w-2xl">{description}</p>}
      {customCtas ? customCtas : <CTAGroup />}
    </motion.div>
  );

  const renderLayout = () => {
    switch (layout) {
      case "centered":
        return (
          <div className={cn("container relative mx-auto grid grid-cols-1 items-center px-6 py-24 lg:py-32 text-center", containerClassName)} style={{ minHeight: minH }}>
            {renderDecoration()}
            <div className="mx-auto max-w-3xl">
              <Content />
            </div>
          </div>
        );
      case "left-graphic":
        return (
          <div className={cn("container relative mx-auto grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 lg:py-32", containerClassName)} style={{ minHeight: minH }}>
            {renderDecoration()}
            <div className="order-2 md:order-1">
              <Content />
            </div>
            <div className="relative order-1 md:order-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-3 backdrop-blur-xl min-h-64">
              {renderMedia()}
            </div>
          </div>
        );
      case "right-graphic":
      case "split":
        return (
          <div className={cn("container relative mx-auto grid grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:py-32", containerClassName)} style={{ minHeight: minH }}>
            {renderDecoration()}
            <div className="space-y-6">
              <Content />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-3 backdrop-blur-xl min-h-64">
              {renderMedia()}
            </div>
          </div>
        );
      case "video-hero":
        return (
          <div className={cn("relative w-full", containerClassName)} style={{ minHeight: minH }}>
            {renderDecoration()}
            <div className="absolute inset-0 -z-10">{renderMedia()}</div>
            <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
              <div className="max-w-3xl">
                <Content />
              </div>
            </div>
          </div>
        );
      case "marquee-hero":
        return (
          <div className={cn("container relative mx-auto px-6 py-24 lg:py-32", containerClassName)} style={{ minHeight: minH }}>
            {renderDecoration()}
            <div className="max-w-4xl">
              <Content />
            </div>
            {Array.isArray(marqueeItems) && marqueeItems.length > 0 && (
              <div className="mt-10 overflow-hidden">
                <div className="animate-[scroll_30s_linear_infinite] whitespace-nowrap">
                  {marqueeItems.concat(marqueeItems).map((item, i) => (
                    <span key={i} className="mx-6 inline-flex items-center text-sm text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id={id} className={container}>
      <DebugLog id={id} layout={layout} theme={theme} media={media} />
      {renderLayout()}
    </section>
  );
}

export default AdvancedBanner;
