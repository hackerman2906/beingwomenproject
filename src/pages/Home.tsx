import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.navratri.title'),
      description: t('services.navratri.description'),
      image: "/assets/homeservicenavratri.JPG",
      link: "/navratri",
      objectPosition: "center 10%"
    },
    {
      title: t('services.wedding.title'),
      description: t('services.wedding.description'),
      image: "/assets/home page wedding wear.JPG",
      link: "/wedding",
      objectPosition: "center 50%"
    },
    {
      title: t('services.casual.title'),
      description: t('services.casual.description'),
      image: "/assets/homeservicecasual.JPG",
      link: "/casual",
      objectPosition: "center 20%"
    }
  ];

  const baseTestimonials = [
    {
      text: t('testimonials.reviews.2.text'),
      author: t('testimonials.reviews.2.author'),
      image: "/assets/Alice testimonial 3.JPG",
      rating: 5,
      objectPosition: "center 55%"
    },
    {
      text: t('testimonials.reviews.1.text'),
      author: t('testimonials.reviews.1.author'),
      image: "/assets/aeshatestimonialtry1.JPG",
      rating: 5,
      objectPosition: "center 60%"
    },
    {
      text: t('testimonials.reviews.3.text'),
      author: t('testimonials.reviews.3.author'),
      image: "/assets/dress3.JPG",
      rating: 5,
      objectPosition: "center 55%"
    },
    {
      text: t('testimonials.reviews.0.text'),
      author: t('testimonials.reviews.0.author'),
      image: "/assets/Elena Testimonial.jpg",
      rating: 5,
      objectPosition: "center 55%"
    }
  ];
  const testimonials = [
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials,
    ...baseTestimonials
  ];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const baseCount = baseTestimonials.length;
  const centerIndex = baseCount * 2;
  const [testimonialIndex, setTestimonialIndex] = useState(centerIndex);
  const [slideStep, setSlideStep] = useState(0);

  useEffect(() => {
    const updateStep = () => {
      if (!trackRef.current || !cardRef.current) {
        return;
      }

      const styles = window.getComputedStyle(trackRef.current);
      const rawGap = styles.gap || styles.columnGap || '0';
      const parsedGap = parseFloat(rawGap);
      const gapValue = Number.isFinite(parsedGap) ? parsedGap : 0;
      const nextStep = cardRef.current.getBoundingClientRect().width + gapValue;
      setSlideStep(nextStep);
    };

    updateStep();
    window.addEventListener('resize', updateStep);

    return () => window.removeEventListener('resize', updateStep);
  }, []);

  useEffect(() => {
    if (!trackRef.current || !slideStep || baseCount === 0) {
      return;
    }

    trackRef.current.scrollTo({ left: slideStep * centerIndex, behavior: 'auto' });
    setTestimonialIndex(centerIndex);
  }, [slideStep, baseCount, centerIndex]);

  const normalizeIndex = (index: number) => {
    if (baseCount === 0) {
      return 0;
    }
    return ((index % baseCount) + baseCount) % baseCount;
  };

  const scrollToIndex = (index: number, behavior: ScrollBehavior) => {
    if (!trackRef.current || !slideStep) {
      return;
    }
    trackRef.current.scrollTo({
      left: slideStep * index,
      behavior
    });
  };

  const handleTestimonialScroll = () => {
    if (!trackRef.current || !slideStep || baseCount === 0) {
      return;
    }

    const rawIndex = Math.round(trackRef.current.scrollLeft / slideStep);
    let nextIndex = rawIndex;

    if (rawIndex <= baseCount) {
      nextIndex = rawIndex + baseCount * 2;
      scrollToIndex(nextIndex, 'auto');
    } else if (rawIndex >= baseCount * 4) {
      nextIndex = rawIndex - baseCount * 2;
      scrollToIndex(nextIndex, 'auto');
    }

    if (nextIndex !== testimonialIndex) {
      setTestimonialIndex(nextIndex);
    }
  };

  const goToTestimonial = (nextIndex: number) => {
    if (!slideStep || baseCount === 0) {
      setTestimonialIndex(nextIndex);
      return;
    }

    scrollToIndex(nextIndex, 'smooth');
    setTestimonialIndex(nextIndex);
  };

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
      style={{ objectPosition: 'center 57%', opacity: 0.98 }}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/75 to-primary/90" />
  </div>

  {/* Hero Content */}
  <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full pt-24 pb-12 md:pt-32">
      <div className="text-center md:text-left">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-secondary mb-4 md:mb-6 leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-secondary/90 mb-6 md:mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            to="/contact"
            className="focus-ring inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-base md:text-lg font-medium shadow-md shadow-secondary/20"
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
                className="group bg-neutral/95 rounded-xl overflow-hidden soft-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-ring ring-1 ring-secondary/10"
              >
                <div className="aspect-[2/3] overflow-hidden image-overlay">
                  <img
                    src={service.image}
                    alt={service.title}
                     className="w-full h-full object-cover"
                    style={{ objectPosition: service.objectPosition }}
                    loading="lazy"
                    decoding="async"
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
          <div className="relative" aria-label="Testimonials">
            <div className="flex items-center justify-center md:justify-end gap-3 mb-4 md:mb-6">
              <button
                type="button"
                onClick={() => goToTestimonial(testimonialIndex - 1)}
                className="focus-ring h-10 w-10 rounded-full bg-secondary text-primary shadow-md shadow-secondary/20 hover:bg-secondary/90 transition disabled:opacity-40"
                aria-label="Previous testimonials"
              >
                <span className="sr-only">Previous</span>
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => goToTestimonial(testimonialIndex + 1)}
                className="focus-ring h-10 w-10 rounded-full bg-secondary text-primary shadow-md shadow-secondary/20 hover:bg-secondary/90 transition disabled:opacity-40"
                aria-label="Next testimonials"
              >
                <span className="sr-only">Next</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <div
              ref={trackRef}
              onScroll={handleTestimonialScroll}
              className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  ref={index === 0 ? cardRef : undefined}
                  className="flex-none w-full md:w-[calc((100%-4rem)/3)] snap-start snap-always bg-neutral p-6 md:p-8 rounded-xl soft-shadow ring-1 ring-secondary/10"
                >
                  <div className="mb-6 rounded-lg image-overlay-subtle">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.author}'s outfit`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: testimonial.objectPosition || 'center' }}
                      loading="lazy"
                      decoding="async"
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
            <div className="mt-6 flex items-center justify-center gap-2">
              {baseTestimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToTestimonial(centerIndex + index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === normalizeIndex(testimonialIndex)
                      ? 'bg-secondary'
                      : 'bg-secondary/40 hover:bg-secondary/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-pressed={index === normalizeIndex(testimonialIndex)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
