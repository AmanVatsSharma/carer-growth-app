import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Main component
export default function ValuePropSection() {
  const [activeTab, setActiveTab] = useState('students');

  const tabs = [
    { id: 'students', label: 'For Students' },
    { id: 'partners', label: 'For Partners' },
    { id: 'institutions', label: 'For Institutions' },
  ];

  const content = {
    students: {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'A group of diverse students studying together happily.',
      title: 'Your Seamless Path to Studying Abroad.',
      description: 'Applying to international institutions can be complex. We simplify every step, providing clarity and support so you can focus on your future.',
      features: [
        'Explore endless study options with ease.',
        'Navigate the enrolment process without the complexity.',
        'Overcome language barriers with multilingual support.',
        'Track your application status in real-time.',
      ],
      cta: 'Start Your Journey',
    },
    partners: {
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      alt: 'Two professionals shaking hands in a modern office.',
      title: 'Empowering Recruitment Agents to Succeed.',
      description: 'Join a network of verified partners and leverage our platform to streamline your workflow, connect with top institutions, and grow your business.',
      features: [
        'Automate applications and reduce manual work.',
        'Get faster, direct responses from Education Providers.',
        'Place students in renowned, trusted institutions.',
        'Operate under a globally recognized brand.',
      ],
      cta: 'Become a Partner',
    },
    institutions: {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'A team collaborating around a table with laptops.',
      title: 'Optimizing Your Global Admissions.',
      description: 'Attract, verify, and process international student applications more efficiently than ever. Our platform minimizes internal workload and maximizes your global reach.',
      features: [
        'Receive a steady stream of pre-verified student applications.',
        'Gain international exposure on a trusted global platform.',
        'Reduce advertising spend with automatically generated leads.',
        'Streamline your entire admissions process.',
      ],
      cta: 'Contact Us',
    },
  };

  const currentContent = content[activeTab];

  // Animation variants for Framer Motion
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
  };
  
  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } },
  };

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans antialiased">
      <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute -z-10 top-0 right-0 h-64 w-64 bg-blue-200/20 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-0 h-64 w-64 bg-purple-200/20 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Global Future Starts <span className="text-blue-600 dark:text-blue-400">Here</span>.
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            We streamline the journey to studying abroad for students, partners, and institutions, creating connections that inspire and empower.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab buttons */}
          <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
                } relative whitespace-nowrap text-base font-medium py-4 px-1 border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mx-4`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[550px]">
            {/* Image Section */}
            <div className="relative h-80 lg:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
               <AnimatePresence mode="wait">
                  <motion.img
                      key={activeTab}
                      src={currentContent.image}
                      alt={currentContent.alt}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/E0E0E0/000000?text=Image'; }}
                  />
              </AnimatePresence>
            </div>

            {/* Text Content Section */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {currentContent.title}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
                    {currentContent.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {currentContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="flex-shrink-0 w-6 h-6 text-blue-500 dark:text-blue-400 mt-1 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <button className="group flex items-center justify-center px-8 py-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 dark:ring-offset-gray-900">
                      {currentContent.cta}
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
