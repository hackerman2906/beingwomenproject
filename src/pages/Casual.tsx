import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Casual = () => {
  const { t } = useTranslation();

  const services = t('casual.services', { returnObjects: true });

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
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[6/5] overflow-hidden rounded-2xl">
                  <img
                    src={`/assets/dress${index + 6}.jpg`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="font-display text-3xl text-secondary">{service.title}</h2>
                <p className="text-secondary/80 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-lg font-medium"
                >
                  {t('contact.cta')}
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-neutral rounded-2xl p-12">
            <h2 className="font-display text-3xl text-secondary mb-4">
              {t('casual.cta.title')}
            </h2>
            <p className="text-secondary/80 mb-8 max-w-2xl mx-auto">
              {t('casual.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-lg font-medium"
            >
              {t('casual.cta.button')}
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Casual;