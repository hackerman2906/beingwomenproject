import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Casual = () => {
  const { t } = useTranslation();

  const services = t('casual.services', { returnObjects: true });
  const ctaPhrases = [
    t('ctaPhrases.findYourFit'),
    t('ctaPhrases.discoverStyle'),
    t('ctaPhrases.createLook'),
    t('ctaPhrases.stepIntoElegance'),
  ];

  return (
    <PageWrapper className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            {t('casual.hero.title')}
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            {t('casual.hero.subtitle')}
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {Object.entries(services).map(([key, service]: [string, any], index) => (
            <section 
              key={key} 
              className={`group flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center ${index === 0 ? '' : 'pt-12 md:pt-16 border-t border-secondary/15'}`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl image-overlay soft-shadow ring-1 ring-secondary/10">
                  <img
                    src={`/assets/dress${index + 6}.jpg`}
                    alt={service.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 rounded-full bg-secondary/70" />
                  <span className="h-2 w-2 rounded-full bg-secondary/60" />
                </div>
                <h2 className="font-display text-3xl text-secondary">{service.title}</h2>
                <p className="text-secondary/80 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="focus-ring inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-lg font-medium shadow-md shadow-secondary/20"
                >
                  {ctaPhrases[index % ctaPhrases.length]}
                </Link>
              </div>
            </section>
          ))}
        </div>

      </div>
    </PageWrapper>
  );
};

export default Casual;