import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const Accessibility = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl mb-8">{t('accessibility.title')}</h1>

        <div className="prose prose-lg">
          <p className="text-muted-foreground mb-8">
            {t('accessibility.lastUpdated')}
          </p>

          {/* Commitment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-4">{t('accessibility.commitment.title')}</h2>
            <p>{t('accessibility.commitment.description')}</p>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-display mb-4">{t('accessibility.features.title')}</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                {(t('accessibility.features.list', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-display mb-4">{t('accessibility.contact.title')}</h2>
            <p>{t('accessibility.contact.description')}</p>
            <div className="mt-4">
              <p>{t('accessibility.contact.email')}</p>
              <p>{t('accessibility.contact.Phone')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('accessibility.contact.address') }} />
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Accessibility;
