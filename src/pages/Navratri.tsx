import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Navratri = () => {
  const { t } = useTranslation();

  const services = t('navratri.services', { returnObjects: true });
  const ctaPhrases = [
    t('ctaPhrases.discoverStyle'),
    t('ctaPhrases.createLook'),
    t('ctaPhrases.stepIntoElegance'),
    t('ctaPhrases.findYourFit'),
  ];
  const serviceImages = [
    "/assets/navratrichaniyacholi.JPG",
    "/assets/navratriblouse.JPG",
    "/assets/dress4.jpeg"
  ];
  const garbaGalleryImages = [
    "/assets/Garba outfits/IMG-20240815-WA0015.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0037.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0043.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0044.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0045.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0052.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0057.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0062.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0070.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0071.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0074.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0076.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0077.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0080.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0081.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0082.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0087.jpg",
    "/assets/Garba outfits/IMG-20240815-WA0092.jpg"
  ];

  return (
    <PageWrapper className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            {t('navratri.hero.title')}
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            {t('navratri.hero.subtitle')}
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
                    src={serviceImages[index]}
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

        {/* Garba Gallery */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl text-secondary mb-3">
              {t('navratri.gallery.title')}
            </h2>
            <p className="text-secondary/80">
              {t('navratri.gallery.subtitle')}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {garbaGalleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="rounded-2xl overflow-hidden image-overlay soft-shadow ring-1 ring-secondary/10"
              >
                <img
                  src={src}
                  alt={`${t('navratri.gallery.altPrefix', 'Garba look')} ${index + 1}`}
                  className="h-auto w-full object-contain transform scale-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Navratri;