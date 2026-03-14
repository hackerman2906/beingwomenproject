import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const About = () => {
  const { t } = useTranslation();
  const missionText = String(t('about.mission.description'));
  const values = t('about.values.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <PageWrapper className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr] gap-12 items-center mb-16">
          <div>
            <h2 className="font-display text-3xl text-secondary mb-6">{t('about.mission.title')}</h2>
            {missionText.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-secondary/80 mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="aspect-[2/3] md:aspect-[3/4] rounded-lg overflow-hidden bg-neutral/10">
            <img
              src="/assets/About_Page_Final.JPG"
              alt={t('about.mission.title')}
              className="w-full h-full object-contain object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="font-display text-3xl text-secondary text-center mb-12">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-neutral">
                <h3 className="font-display text-xl text-secondary mb-4">{value.title}</h3>
                <p className="text-secondary/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Message */}
        <div className="bg-neutral rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-secondary mb-6">{t('about.founder.title')}</h2>
            <p className="text-lg text-secondary/80 mb-8">
              {t('about.founder.message')}
            </p>
            <div className="text-center">
              <h4 className="font-semibold text-secondary">{t('about.founder.name')}</h4>
              <p className="text-sm text-secondary/80">{t('about.founder.role')}</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;