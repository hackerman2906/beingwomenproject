import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Wedding = () => {
  const { t } = useTranslation();

  const services = t('wedding.services', { returnObjects: true });
  const serviceImages = [
    "/assets/wedding page photo1 lehenga.JPG",
    "/assets/Wedding page photo 2 - designer blouse.jpeg",
    "/assets/Wedding photo 3 blouse.JPG",
    "/assets/Wedding photo 4 coordinated wear.JPG"
  ];

  return (
    <PageWrapper className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            {t('wedding.hero.title')}
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            {t('wedding.hero.subtitle')}
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
                <div className="aspect-[6/5] overflow-hidden rounded-2xl image-overlay soft-shadow ring-1 ring-secondary/10">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
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
                  {t('contact.cta')}
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-neutral via-primary/90 to-neutral rounded-2xl p-12 ring-1 ring-secondary/15 soft-shadow">
            <h2 className="font-display text-3xl text-secondary mb-4">
              {t('wedding.cta.title')}
            </h2>
            <p className="text-secondary/80 mb-8 max-w-2xl mx-auto">
              {t('wedding.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="focus-ring inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-lg font-medium shadow-md shadow-secondary/20"
            >
              {t('wedding.cta.button')}
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Wedding;