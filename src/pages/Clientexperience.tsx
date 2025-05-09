import React from 'react';
import { MapPin, Scissors, PackageCheck, Clock, Handshake } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { useTranslation } from 'react-i18next';

const ClientExperience = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: MapPin, title: t('clientExperience.steps.visit.title'), description: t('clientExperience.steps.visit.desc') },
    { icon: Handshake, title: t('clientExperience.steps.design.title'), description: t('clientExperience.steps.design.desc') },
    { icon: Scissors, title: t('clientExperience.steps.tailor.title'), description: t('clientExperience.steps.tailor.desc') },
    { icon: Clock, title: t('clientExperience.steps.fitting.title'), description: t('clientExperience.steps.fitting.desc') },
    { icon: PackageCheck, title: t('clientExperience.steps.pickup.title'), description: t('clientExperience.steps.pickup.desc') }
  ];

  return (
    <PageWrapper className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            {t('clientExperience.title')}
          </h1>
          <p className="text-xl text-secondary/90 max-w-2xl mx-auto">
            {t('clientExperience.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-neutral rounded-lg">
              <step.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="font-display text-xl text-secondary mb-2">{step.title}</h3>
              <p className="text-secondary/80">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Timelines */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-secondary mb-6">{t('clientExperience.timelines.title')}</h2>
          <div className="bg-neutral p-6 rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary/20">
                  <th className="text-left py-2 text-secondary">{t('clientExperience.timelines.outfit')}</th>
                  <th className="text-left py-2 text-secondary">{t('clientExperience.timelines.time')}</th>
                </tr>
              </thead>
              <tbody className="text-secondary/80">
                <tr className="border-b border-secondary/20">
                  <td className="py-3">{t('clientExperience.timelines.casual')}</td>
                  <td>{t('clientExperience.timelines.casualTime')}</td>
                </tr>
                <tr className="border-b border-secondary/20">
                  <td className="py-3">{t('clientExperience.timelines.occasion')}</td>
                  <td>{t('clientExperience.timelines.occasionTime')}</td>
                </tr>
                <tr>
                  <td className="py-3">{t('clientExperience.timelines.bridal')}</td>
                  <td>{t('clientExperience.timelines.bridalTime')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pickup & Delivery */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-secondary mb-6">{t('clientExperience.delivery.title')}</h2>
          <div className="bg-neutral p-6 rounded-lg space-y-4 text-secondary/80">
            <p>{t('clientExperience.delivery.pickup')}</p>
            <p>{t('clientExperience.delivery.delivery')}</p>
            <p>{t('clientExperience.delivery.international')}</p>
          </div>
        </section>

        {/* Notes */}
        <section>
          <h2 className="font-display text-2xl text-secondary mb-6">{t('clientExperience.notes.title')}</h2>
          <div className="bg-neutral p-6 rounded-lg space-y-4 text-secondary/80">
            <p>{t('clientExperience.notes.rush')}</p>
            <p>{t('clientExperience.notes.updates')}</p>
            <p>{t('clientExperience.notes.quality')}</p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default ClientExperience;
