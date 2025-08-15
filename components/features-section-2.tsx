import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { link } from "fs";

export default function FeaturesSection02() {
  const features = [
    {
      title: "Expert Guidance for Global Careers",
      description:
        "Get one-on-one support from international career advisors and mentors for every step of your journey.",
      icon: <IconTerminal2 />,
      link: '/expert-guidance',
    },
    {
      title: "Seamless Application Experience",
      description:
        "Our platform is designed for ease—apply to jobs, universities, and visas abroad with just a few clicks.",
      icon: <IconEaseInOut />,
      link: '/seamless-application',
    },
    {
      title: "Transparent & Flexible Pricing",
      description:
        "Choose from flexible plans with no hidden fees. Premium support and resources included.",
      icon: <IconCurrencyDollar />,
      link: '/pricing',
    },
    {
      title: "Global Access, 24/7",
      description: "Access your dashboard and support anytime, anywhere in the world.",
      icon: <IconCloud />,
      link: '/global-access',
    },
    {
      title: "Multi-Country Application Support",
      description: "Apply to multiple countries and programs with a single profile and unified process.",
      icon: <IconRouteAltLeft />,
      link: '/multi-country-support',
    },
    {
      title: "Dedicated Success Managers",
      description:
        "Our team is always available to answer your questions and guide you through every challenge.",
      icon: <IconHelp />,
      link: '/dedicated-success',
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "If you’re not satisfied, we’ll work with you until you are. Your success is our mission.",
      icon: <IconAdjustmentsBolt />,
      link: '/satisfaction-guarantee',
    },
    {
      title: "All-in-One Career Platform",
      description: "From research to relocation, manage your entire international career journey in one place.",
      icon: <IconHeart />,
      link: '/all-in-one-platform',
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto gap-5 px-5">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} link={feature.link}/>
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link= '/'
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border border-yellow-700 rounded-lg py-10 relative group/feature bg-white dark:bg-neutral-900",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 flex justify-center items-center">
        <span className="block text-[5rem] sm:text-[3.5rem] text-yellow-500">{icon}</span>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-5">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-yellow-500 group-hover/feature:bg-yellow-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-yellow-700 dark:text-yellow-400">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-5">
        {description}
      </p>
      <Button variant="link" className=" absolute bottom-2 right-2 z-10">
        <Link href={link} className="text-yellow-700 dark:text-yellow-400 hover:underline">
          Start Now
        </Link>
      </Button>
    </div>
  );
};
