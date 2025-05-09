import React from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl mb-8">{t('privacy.title')}</h1>
        
        <div className="prose prose-lg">
          <p className="text-muted-foreground mb-8">
            {t('privacy.lastUpdated')}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-display mb-4">{t('privacy.sections.information.title')}</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
              {(t('privacy.sections.information.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-display mb-4">{t('privacy.sections.usage.title')}</h2>
            <p>{t('privacy.sections.usage.description')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-4">{t('privacy.sections.contact.title')}</h2>
            <p>{t('privacy.sections.contact.description')}</p>
            <div className="mt-4">
              <p>{t('privacy.sections.contact.email')}</p>
              <p>{t('privacy.sections.contact.Phone')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.sections.contact.address') }} />
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Privacy;
