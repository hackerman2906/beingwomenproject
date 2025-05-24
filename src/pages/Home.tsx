import { Link } from 'react-router-dom';
import { ArrowRight, Contact, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.wedding.title'),
      description: t('services.wedding.description'),
      image: "/assets/whatsapp 3.jpg",
      link: "/wedding",
      objectPosition: "center 10%"
    },
    {
      title: t('services.navratri.title'),
      description: t('services.navratri.description'),
      image: "/assets/whatsapp 2.jpg",
      link: "/navratri",
      objectPosition: "center 10%"
    },
    {
      title: t('services.casual.title'),
      description: t('services.casual.description'),
      image: "/assets/whatsapp 18.jpg",
      link: "/casual",
      objectPosition: "center 20%"
    }
  ];

  const testimonials = [
    {
      text: t('testimonials.reviews.0.text'),
      author: t('testimonials.reviews.0.author'),
      image: "/assets/whatsapp 17.jpg",
      rating: 5,
      objectPosition: "center 25%"
    },
    {
      text: t('testimonials.reviews.1.text'),
      author: t('testimonials.reviews.1.author'),
      image: "/assets/whatsapp 12.jpg",
      rating: 5,
      objectPosition: "center 65%"
    },
    {
      text: t('testimonials.reviews.2.text'),
      author: t('testimonials.reviews.2.author'),
      image: "/assets/whatsapp 20.jpg",
      rating: 5,
      objectPosition: "center 60%"
    }
  ];

  return (
    <PageWrapper className="bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[85vh]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/assets/whatsapp 1.jpg"
      alt={t('hero.title')}
      className="w-full h-full object-cover"
      style={{ objectPosition: 'center 55%', opacity: 0.98 }} // You can adjust '20%' here
    />
    <div className="absolute inset-0 bg-primary/70" />
  </div>

  {/* Hero Content */}
  <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full pt-24 pb-12 md:pt-32">
      <div className="text-center md:text-left">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-secondary mb-4 md:mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-secondary/90 mb-6 md:mb-8 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            to="/book-consultation"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-base md:text-lg font-medium shadow-md"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Link>
        </div>
      </div>
      {/* Optional right column left empty */}
      <div className="hidden md:block" />
    </div>
      </div>
    </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-secondary mb-4">{t('services.title')}</h2>
            <p className="text-lg md:text-xl text-secondary/80">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-neutral rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: service.objectPosition }}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl text-secondary mb-2">{service.title}</h3>
                  <p className="text-secondary/80 mb-6 text-sm md:text-base">{service.description}</p>
                  <span className="text-secondary inline-flex items-center text-sm md:text-base">
                    {t('services.explore')} {service.title.split(' ')[0]}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-primary border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-secondary mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg md:text-xl text-secondary/80">{t('testimonials.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral p-6 md:p-8 rounded-xl">
                <div className="mb-6 aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author}'s outfit`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: testimonial.objectPosition || 'center' }}
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-secondary/80 mb-6 italic text-sm md:text-base">"{testimonial.text}"</p>
                <p className="text-secondary font-medium text-sm md:text-base">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 bg-primary border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-secondary mb-4">{t('contact.title')}</h2>
            <p className="text-secondary/80 max-w-2xl mx-auto text-sm md:text-base">{t('contact.subtitle')}</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Link
              to="/book-consultation"
              className="block w-full text-center py-3 md:py-4 bg-gradient-to-r from-secondary to-yellow-400 text-primary font-semibold rounded-full shadow-md hover:brightness-110 transition text-base md:text-lg"
            >
              {t('contact.cta')}
              <Contact className="inline ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
