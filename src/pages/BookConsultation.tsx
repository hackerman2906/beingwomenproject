import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const BookConsultation = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            {t('bookConsultation.title')}
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            {t('bookConsultation.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neutral p-8 rounded-lg">
              <h2 className="font-display text-2xl text-secondary mb-6">{t('bookConsultation.howToBook.title')}</h2>
              <div className="space-y-6">
                <p className="text-secondary/80">
                  {t('bookConsultation.howToBook.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary">{t('bookConsultation.howToBook.contact.phone')}</h3>
                      <p className="text-secondary/80">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary">{t('bookConsultation.howToBook.contact.hours')}</h3>
                      <p className="text-secondary/80">{t('contact.info.hours')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary">{t('bookConsultation.howToBook.contact.visit')}</h3>
                      <p className="text-secondary/80">
                        123 Fashion Street, Linking Road<br />
                        Mumbai, Maharashtra 400050
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-lg font-medium mt-4"
                >
                  {t('bookConsultation.howToBook.contact.whatsapp')}
                </a>
              </div>
            </div>

            <div className="bg-neutral p-8 rounded-lg">
              <h2 className="font-display text-2xl text-secondary mb-6">{t('bookConsultation.whatToExpect.title')}</h2>
              <ul className="space-y-4 text-secondary/80">
                {t('bookConsultation.whatToExpect.steps', { returnObjects: true }).map((step: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-semibold">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Calendar Section - Placeholder */}
          <div className="bg-neutral p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-secondary" />
              <h2 className="font-display text-2xl text-secondary">{t('bookConsultation.onlineBooking.title')}</h2>
            </div>
            <p className="text-secondary/80 mb-6">
              {t('bookConsultation.onlineBooking.subtitle')}
            </p>
            <div className="aspect-square bg-secondary/10 rounded-lg flex items-center justify-center">
              <p className="text-secondary/60 text-center px-8">
                {t('bookConsultation.onlineBooking.comingSoon')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BookConsultation;