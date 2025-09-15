export interface Country {
  code: string;
  name: string;
  flag: string;
  heroImage: string;
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  universities: {
    name: string;
    logo: string;
    ranking: string;
    location: string;
  }[];
  popularCourses: {
    name: string;
    duration: string;
    tuition: string;
    category: string;
  }[];
  visaProcess: {
    step: string;
    description: string;
    duration: string;
  }[];
  scholarships: {
    name: string;
    amount: string;
    eligibility: string;
    provider: string;
  }[];
  successStories: {
    name: string;
    course: string;
    university: string;
    story: string;
    image: string;
  }[];
}

export const countryData: Record<string, Country> = {
  canada: {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    heroImage: '/pictures/conor-samuel-Onadzzr1yBU-unsplash.jpg',
    description: 'Experience world-class education in one of the most welcoming countries globally.',
    benefits: [
      {
        title: 'High-Quality Education',
        description: 'Canadian universities consistently rank among the world\'s best',
        icon: '🎓'
      },
      {
        title: 'Post-Study Work Visa',
        description: 'Work in Canada for up to 3 years after graduation',
        icon: '💼'
      },
      {
        title: 'Pathway to PR',
        description: 'Multiple immigration pathways for international students',
        icon: '🏠'
      },
      {
        title: 'Multicultural Society',
        description: 'Welcoming environment with diverse communities',
        icon: '🌍'
      }
    ],
    universities: [
      {
        name: 'University of Toronto',
        logo: '/universities/university-of-toronto-logo.png',
        ranking: '#1 in Canada',
        location: 'Toronto, ON'
      },
      {
        name: 'McGill University',
        logo: '/logo-02.webp',
        ranking: '#2 in Canada',
        location: 'Montreal, QC'
      },
      {
        name: 'University of British Columbia',
        logo: '/logo-04.webp',
        ranking: '#3 in Canada',
        location: 'Vancouver, BC'
      }
    ],
    popularCourses: [
      {
        name: 'Computer Science',
        duration: '4 years',
        tuition: 'CAD 45,000/year',
        category: 'Technology'
      },
      {
        name: 'Business Administration',
        duration: '4 years',
        tuition: 'CAD 42,000/year',
        category: 'Business'
      },
      {
        name: 'Engineering',
        duration: '4 years',
        tuition: 'CAD 48,000/year',
        category: 'Engineering'
      }
    ],
    visaProcess: [
      {
        step: 'Get Acceptance Letter',
        description: 'Receive admission from a designated learning institution',
        duration: '2-4 weeks'
      },
      {
        step: 'Apply for Study Permit',
        description: 'Submit online application with required documents',
        duration: '4-12 weeks'
      },
      {
        step: 'Biometrics & Interview',
        description: 'Complete biometrics and attend interview if required',
        duration: '1-2 weeks'
      }
    ],
    scholarships: [
      {
        name: 'Vanier Canada Graduate Scholarships',
        amount: 'CAD 50,000/year',
        eligibility: 'PhD students',
        provider: 'Government of Canada'
      },
      {
        name: 'Ontario Graduate Scholarship',
        amount: 'CAD 15,000/year',
        eligibility: 'Graduate students',
        provider: 'Ontario Government'
      }
    ],
    successStories: [
      {
        name: 'Priya Sharma',
        course: 'Computer Science',
        university: 'University of Toronto',
        story: 'Landed a job at Google Toronto right after graduation with a starting salary of CAD 120,000.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      },
      {
        name: 'Ahmed Hassan',
        course: 'Business Administration',
        university: 'McGill University',
        story: 'Started my own fintech company and received CAD 2M in Series A funding.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      }
    ]
  },
  usa: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    heroImage: '/pictures/nik-shuliahin-L4JWn8HHJ30-unsplash.jpg',
    description: 'Home to the world\'s top universities and endless opportunities.',
    benefits: [
      {
        title: 'World\'s Best Universities',
        description: 'Home to Harvard, MIT, Stanford and many top-ranked institutions',
        icon: '🏆'
      },
      {
        title: 'Research Opportunities',
        description: 'Access to cutting-edge research and innovation',
        icon: '🔬'
      },
      {
        title: 'Networking',
        description: 'Build connections with global leaders and innovators',
        icon: '🤝'
      },
      {
        title: 'Career Prospects',
        description: 'Access to the world\'s largest economy and job market',
        icon: '📈'
      }
    ],
    universities: [
      {
        name: 'Harvard University',
        logo: '/universities/harvard-logo.png',
        ranking: '#1 Globally',
        location: 'Cambridge, MA'
      },
      {
        name: 'Stanford University',
        logo: '/logo-01.webp',
        ranking: '#2 Globally',
        location: 'Stanford, CA'
      },
      {
        name: 'MIT',
        logo: '/logo-03.webp',
        ranking: '#3 Globally',
        location: 'Cambridge, MA'
      }
    ],
    popularCourses: [
      {
        name: 'Computer Science',
        duration: '4 years',
        tuition: 'USD 55,000/year',
        category: 'Technology'
      },
      {
        name: 'Business Administration',
        duration: '4 years',
        tuition: 'USD 52,000/year',
        category: 'Business'
      },
      {
        name: 'Medicine',
        duration: '4 years',
        tuition: 'USD 65,000/year',
        category: 'Healthcare'
      }
    ],
    visaProcess: [
      {
        step: 'Get I-20 Form',
        description: 'Receive Form I-20 from your university',
        duration: '1-2 weeks'
      },
      {
        step: 'Pay SEVIS Fee',
        description: 'Pay the SEVIS I-901 fee online',
        duration: '1 day'
      },
      {
        step: 'Schedule Interview',
        description: 'Book and attend visa interview at US consulate',
        duration: '2-8 weeks'
      }
    ],
    scholarships: [
      {
        name: 'Fulbright Scholarship',
        amount: 'Full tuition + living expenses',
        eligibility: 'Graduate students',
        provider: 'US Government'
      },
      {
        name: 'Gates Cambridge Scholarship',
        amount: 'Full funding',
        eligibility: 'Graduate students',
        provider: 'Gates Foundation'
      }
    ],
    successStories: [
      {
        name: 'Li Wei',
        course: 'Computer Science',
        university: 'Stanford University',
        story: 'Co-founded a unicorn startup valued at $1.2 billion after graduating.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      },
      {
        name: 'Maria Rodriguez',
        course: 'Medicine',
        university: 'Harvard Medical School',
        story: 'Leading groundbreaking cancer research at Johns Hopkins Hospital.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      }
    ]
  },
  uk: {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    heroImage: '/pictures/marcin-nowak-iXqTqC-f6jI-unsplash.jpg',
    description: 'Study at prestigious institutions with centuries of academic excellence.',
    benefits: [
      {
        title: 'Historic Universities',
        description: 'Oxford, Cambridge and other world-renowned institutions',
        icon: '🏛️'
      },
      {
        title: 'Shorter Degrees',
        description: '3-year bachelor\'s and 1-year master\'s programs',
        icon: '⏱️'
      },
      {
        title: 'Graduate Route Visa',
        description: 'Work in the UK for 2-3 years after graduation',
        icon: '🎯'
      },
      {
        title: 'Cultural Heritage',
        description: 'Rich history, arts, and cultural experiences',
        icon: '🎭'
      }
    ],
    universities: [
      {
        name: 'University of Oxford',
        logo: '/placeholder.svg?height=80&width=80',
        ranking: '#1 in UK',
        location: 'Oxford, England'
      },
      {
        name: 'University of Cambridge',
        logo: '/placeholder.svg?height=80&width=80',
        ranking: '#2 in UK',
        location: 'Cambridge, England'
      },
      {
        name: 'Imperial College London',
        logo: '/placeholder.svg?height=80&width=80',
        ranking: '#3 in UK',
        location: 'London, England'
      }
    ],
    popularCourses: [
      {
        name: 'Law',
        duration: '3 years',
        tuition: 'GBP 35,000/year',
        category: 'Legal'
      },
      {
        name: 'Finance',
        duration: '3 years',
        tuition: 'GBP 38,000/year',
        category: 'Business'
      },
      {
        name: 'Medicine',
        duration: '5 years',
        tuition: 'GBP 45,000/year',
        category: 'Healthcare'
      }
    ],
    visaProcess: [
      {
        step: 'CAS Number',
        description: 'Receive Confirmation of Acceptance for Studies',
        duration: '1-2 weeks'
      },
      {
        step: 'Online Application',
        description: 'Complete Student visa application online',
        duration: '1 week'
      },
      {
        step: 'Biometrics & Decision',
        description: 'Attend biometrics appointment and await decision',
        duration: '3-8 weeks'
      }
    ],
    scholarships: [
      {
        name: 'Chevening Scholarships',
        amount: 'Full funding',
        eligibility: 'Master\'s students',
        provider: 'UK Government'
      },
      {
        name: 'Commonwealth Scholarships',
        amount: 'Full funding',
        eligibility: 'Commonwealth citizens',
        provider: 'UK Government'
      }
    ],
    successStories: [
      {
        name: 'Rajesh Patel',
        course: 'Finance',
        university: 'London School of Economics',
        story: 'Now working as an Investment Director at Goldman Sachs London.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      },
      {
        name: 'Sarah Johnson',
        course: 'Law',
        university: 'University of Oxford',
        story: 'Became the youngest partner at a top London law firm at age 28.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      }
    ]
  },
  australia: {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    heroImage: '/pictures/caleb-JmuyB_LibRo-unsplash.jpg',
    description: 'Experience high-quality education in a vibrant, multicultural environment.',
    benefits: [
      {
        title: 'Quality Education',
        description: '8 universities in the world\'s top 100',
        icon: '🌟'
      },
      {
        title: 'Work While Studying',
        description: 'Work up to 48 hours per fortnight during studies',
        icon: '💰'
      },
      {
        title: 'Post-Study Work Rights',
        description: 'Work visa for 2-4 years after graduation',
        icon: '🏖️'
      },
      {
        title: 'Lifestyle',
        description: 'Beautiful weather, beaches, and outdoor lifestyle',
        icon: '☀️'
      }
    ],
    universities: [
      {
        name: 'Australian National University',
        logo: '/logo-01.webp',
        ranking: '#1 in Australia',
        location: 'Canberra, ACT'
      },
      {
        name: 'University of Melbourne',
        logo: '/universities/university-of-melbourne-logo.png',
        ranking: '#2 in Australia',
        location: 'Melbourne, VIC'
      },
      {
        name: 'University of Sydney',
        logo: '/logo-03.webp',
        ranking: '#3 in Australia',
        location: 'Sydney, NSW'
      }
    ],
    popularCourses: [
      {
        name: 'Engineering',
        duration: '4 years',
        tuition: 'AUD 45,000/year',
        category: 'Engineering'
      },
      {
        name: 'Business',
        duration: '3 years',
        tuition: 'AUD 42,000/year',
        category: 'Business'
      },
      {
        name: 'Information Technology',
        duration: '3 years',
        tuition: 'AUD 40,000/year',
        category: 'Technology'
      }
    ],
    visaProcess: [
      {
        step: 'CoE & GTE',
        description: 'Get Confirmation of Enrolment and prepare GTE statement',
        duration: '2-3 weeks'
      },
      {
        step: 'Online Application',
        description: 'Submit student visa application online',
        duration: '1 week'
      },
      {
        step: 'Health Check & Decision',
        description: 'Complete health examination and await decision',
        duration: '4-12 weeks'
      }
    ],
    scholarships: [
      {
        name: 'Australia Awards',
        amount: 'Full funding',
        eligibility: 'Developing country students',
        provider: 'Australian Government'
      },
      {
        name: 'Destination Australia',
        amount: 'AUD 15,000/year',
        eligibility: 'Regional study',
        provider: 'Australian Government'
      }
    ],
    successStories: [
      {
        name: 'Yuki Tanaka',
        course: 'Engineering',
        university: 'University of Melbourne',
        story: 'Leading renewable energy projects across Asia-Pacific region.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      },
      {
        name: 'David Kim',
        course: 'Information Technology',
        university: 'University of Sydney',
        story: 'Founded Australia\'s fastest-growing cybersecurity startup.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      }
    ]
  },
  germany: {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    heroImage: '/pictures/dan-freeman-hIKVSVKH7No-unsplash.jpg',
    description: 'Study at world-class universities with minimal tuition fees.',
    benefits: [
      {
        title: 'Low/No Tuition Fees',
        description: 'Public universities charge minimal or no tuition fees',
        icon: '💸'
      },
      {
        title: 'Strong Economy',
        description: 'Europe\'s largest economy with excellent job prospects',
        icon: '🏭'
      },
      {
        title: 'Research Excellence',
        description: 'Leading in engineering, technology, and innovation',
        icon: '🔬'
      },
      {
        title: 'Central Location',
        description: 'Gateway to Europe with rich cultural heritage',
        icon: '🗺️'
      }
    ],
    universities: [
      {
        name: 'Technical University of Munich',
        logo: '/placeholder.svg?height=80&width=80',
        ranking: '#1 in Germany',
        location: 'Munich, Bavaria'
      },
      {
        name: 'Heidelberg University',
        logo: '/placeholder.svg?height=80&width=80',
        ranking: '#2 in Germany',
        location: 'Heidelberg, Baden-Württemberg'
      },
      {
        name: 'Humboldt University',
        logo: '/placeholder.svg?height=80&width=80',
        ranking: '#3 in Germany',
        location: 'Berlin'
      }
    ],
    popularCourses: [
      {
        name: 'Mechanical Engineering',
        duration: '3 years',
        tuition: 'EUR 500/semester',
        category: 'Engineering'
      },
      {
        name: 'Computer Science',
        duration: '3 years',
        tuition: 'EUR 500/semester',
        category: 'Technology'
      },
      {
        name: 'Business Administration',
        duration: '3 years',
        tuition: 'EUR 500/semester',
        category: 'Business'
      }
    ],
    visaProcess: [
      {
        step: 'University Admission',
        description: 'Secure admission to a German university',
        duration: '2-4 weeks'
      },
      {
        step: 'Visa Application',
        description: 'Apply for student visa at German consulate',
        duration: '4-12 weeks'
      },
      {
        step: 'Residence Permit',
        description: 'Apply for residence permit upon arrival',
        duration: '2-4 weeks'
      }
    ],
    scholarships: [
      {
        name: 'DAAD Scholarships',
        amount: 'EUR 850/month',
        eligibility: 'Graduate students',
        provider: 'German Government'
      },
      {
        name: 'Deutschland Stipendium',
        amount: 'EUR 300/month',
        eligibility: 'High-achieving students',
        provider: 'German Universities'
      }
    ],
    successStories: [
      {
        name: 'Anna Kowalski',
        course: 'Mechanical Engineering',
        university: 'Technical University of Munich',
        story: 'Leading automotive innovation at BMW headquarters in Munich.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      },
      {
        name: 'Carlos Silva',
        course: 'Computer Science',
        university: 'Humboldt University',
        story: 'Senior Software Architect at SAP, pioneering AI solutions.',
        image: '/portraits/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
      }
    ]
  }
};

export const getCountryBySlug = (slug: string): Country | null => {
  return countryData[slug] || null;
};

export const getAllCountries = (): Country[] => {
  return Object.values(countryData);
};
