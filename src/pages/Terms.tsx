import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl mb-8">{t('terms.title')}</h1>

        <div className="prose prose-lg">
          <p className="text-muted-foreground mb-8">
            {t('terms.lastUpdated')}
          </p>

          {/* Acceptance Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-4">{t('terms.sections.acceptance.title')}</h2>
            <p>{t('terms.sections.acceptance.description')}</p>
          </section>

          {/* Services List Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-4">{t('terms.sections.services.title')}</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                {(t('terms.sections.services.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-display mb-4">{t('terms.sections.contact.title')}</h2>
            <p>{t('terms.sections.contact.description')}</p>
            <div className="mt-4">
              <p>{t('terms.sections.contact.email')}</p>
              <p>{t('terms.sections.contact.Phone')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('terms.sections.contact.address') }} />
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Terms;
