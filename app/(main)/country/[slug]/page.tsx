import { notFound } from 'next/navigation';
import { getCountryBySlug } from '@/lib/country-data';
import type { Metadata } from 'next';
import { CountryPage } from '@/components/country-page/country-page';

interface CountryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const country = getCountryBySlug(params.slug);
  
  if (!country) {
    return {
      title: 'Country Not Found',
    };
  }

  return {
    title: `Study in ${country.name} - IDP Education`,
    description: `Discover world-class education opportunities in ${country.name}. ${country.description}`,
    keywords: `study in ${country.name}, ${country.name} universities, international education, study abroad`,
    openGraph: {
      title: `Study in ${country.name} - IDP Education`,
      description: country.description,
      images: [country.heroImage],
    },
  };
}

export default function CountryPageRoute({ params }: CountryPageProps) {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    notFound();
  }

  return <CountryPage country={country} />;
}

export async function generateStaticParams() {
  return [
    { slug: 'canada' },
    { slug: 'usa' },
    { slug: 'uk' },
    { slug: 'australia' },
    { slug: 'germany' },
  ];
}
