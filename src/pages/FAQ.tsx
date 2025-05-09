import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../components/PageWrapper';

const FAQ = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState<string | null>('shipping');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqSections = {
    shipping: {
      title: t('faq.categories.shipping.title'),
      questions: t('faq.categories.shipping.questions', { returnObjects: true })
    },
    sizing: {
      title: t('faq.categories.sizing.title'),
      questions: t('faq.categories.sizing.questions', { returnObjects: true })
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl mb-4">{t('faq.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(faqSections).map(([key, section]) => (
            <div key={key} className="bg-neutral rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenSection(openSection === key ? null : key)}
              >
                <h2 className="font-display text-xl text-secondary">{section.title}</h2>
                {openSection === key ? (
                  <ChevronUp className="h-5 w-5 text-secondary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-secondary" />
                )}
              </button>

              {openSection === key && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {section.questions.map((item: any, index: number) => (
                      <div key={index} className="border-b border-secondary/20 last:border-0">
                        <button
                          className="w-full py-4 flex items-center justify-between text-left"
                          onClick={() => setOpenQuestion(openQuestion === `${key}-${index}` ? null : `${key}-${index}`)}
                        >
                          <h3 className="font-medium text-secondary pr-8">{item.q}</h3>
                          {openQuestion === `${key}-${index}` ? (
                            <ChevronUp className="h-4 w-4 text-secondary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-secondary flex-shrink-0" />
                          )}
                        </button>
                        {openQuestion === `${key}-${index}` && (
                          <p className="text-secondary/80 pb-4">{item.a}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <h2 className="font-display text-2xl text-secondary mb-4">{t('faq.stillHaveQuestions.title')}</h2>
          <p className="text-secondary/80 mb-6">
            {t('faq.stillHaveQuestions.description')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          >
            {t('faq.stillHaveQuestions.cta')}
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FAQ;