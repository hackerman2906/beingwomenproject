import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkwWrjC1QWfIP7siEG2PVgb675poeOqpcTZMXZFFjG_detNQ/formResponse";
      const form = new FormData();

      form.append("entry.937985408", formData.name);
      form.append("entry.12685582", formData.email);
      form.append("entry.1953324504", formData.subject);
      form.append("entry.1457243578", formData.message);

      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: form
      });

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <PageWrapper className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl text-secondary mb-4">{t('bookConsultation.title')}</h1>
          <p className="text-base md:text-lg text-secondary/90 max-w-2xl mx-auto">
            {t('bookConsultation.subtitle')}
          </p>
        </div>

        {/* Online Booking */}
        <div className="mb-6 bg-neutral p-5 rounded-md">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-xl text-secondary mb-2">
                {t('bookConsultation.onlineBooking.title')}
              </h2>
              <p className="text-secondary/80 text-sm">
                {t('bookConsultation.onlineBooking.subtitle')}
              </p>
            </div>
            <a
              href={t('bookConsultation.onlineBooking.calendarUrl')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary/90"
            >
              {t('bookConsultation.onlineBooking.cta')}
            </a>
          </div>
          <p className="mt-3 text-sm text-secondary/70">
            {t('bookConsultation.onlineBooking.comingSoon')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* How to Book */}
          <div className="bg-neutral p-5 rounded-md">
            <h2 className="font-display text-xl text-secondary mb-4">{t('bookConsultation.howToBook.title')}</h2>
            <p className="text-secondary/80 text-sm mb-4">
              {t('bookConsultation.howToBook.description')}
            </p>
            <p className="text-sm text-secondary/80 mb-4">
              <a
                href="https://wa.me/919924925874"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-secondary"
              >
                {t('bookConsultation.howToBook.links.whatsapp')}
              </a>
              <span className="mx-2 text-secondary/50">|</span>
              <a
                href="tel:+919924925874"
                className="underline underline-offset-2 hover:text-secondary"
              >
                {t('bookConsultation.howToBook.links.call')} +91 99249 25874
              </a>
            </p>
            <div className="space-y-3 text-sm text-secondary/80">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-secondary mt-1" />
                <div>
                  <p className="font-semibold text-secondary">{t('contact.info.email')}</p>
                  <a href="mailto:beingwomengnr@gmail.com" className="text-secondary/80 hover:text-secondary transition-colors">
                    beingwomengnr@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-1" />
                <div>
                  <p className="font-semibold text-secondary">{t('bookConsultation.howToBook.contact.visit')}</p>
                  <p dangerouslySetInnerHTML={{ __html: t('contact.info.addressdetails') }} />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold text-secondary mb-2">{t('bookConsultation.howToBook.contact.visit')}</p>
              <div className="aspect-[3/2] overflow-hidden rounded-md border border-secondary/10">
                <iframe
                  title={t('bookConsultation.howToBook.contact.visit')}
                  src="https://www.google.com/maps?q=Bus%20Stand,%20Sector%2029,%20Gandhinagar,%20Gujarat%20382030&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <a
              href="https://wa.me/919924925874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 mt-4 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-sm font-medium"
            >
              {t('bookConsultation.howToBook.contact.whatsapp')}
            </a>
          </div>

          {/* Contact Form + What to Expect */}
          <div className="space-y-6">
            <div className="bg-neutral p-5 rounded-md">
              <h2 className="font-display text-xl text-secondary mb-4">{t('contact.form.title')}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Inputs */}
              {['name', 'email', 'subject', 'message'].map((field, idx) => (
                <div key={idx}>
                  <label htmlFor={field} className="block text-sm font-medium text-secondary mb-1">
                    {t(`contact.form.${field}`)}
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={t(`contact.form.${field}Placeholder`)}
                      className="w-full rounded-md border border-secondary/20 bg-primary px-3 py-2 text-sm text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    />
                  ) : (
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      required
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="w-full rounded-md border border-secondary/20 bg-primary px-3 py-2 text-sm text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-secondary text-primary px-5 py-2.5 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center text-sm"
                disabled={status === 'loading'}
              >
                <Send className="h-4 w-4 mr-2" />
                {status === 'loading' ? t('contact.form.sending') : t('contact.form.send')}
              </button>

              {/* Error Message */}
              {status === 'error' && (
                <p className="text-red-500 text-center">{t('contact.form.error')}</p>
              )}
            </form>
            </div>

            <div className="bg-neutral p-5 rounded-md">
              <h2 className="font-display text-xl text-secondary mb-4">{t('bookConsultation.whatToExpect.title')}</h2>
              <ul className="space-y-3 text-sm text-secondary/80">
                {(t('bookConsultation.whatToExpect.steps', { returnObjects: true }) as string[]).map(
                  (step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-semibold">{index + 1}.</span>
                      {step}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        

        {/* Success Modal */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div 
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-primary p-8 rounded-lg shadow-lg text-center max-w-sm w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <h2 className="font-display text-2xl mb-4 text-secondary">
                  {t('contact.form.successTitle')}
                </h2>
                <p className="text-secondary/80 mb-6">
                  {t('contact.form.successMessage')}
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors"
                >
                  {t('contact.form.successCta')}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageWrapper>
  );
};

export default Contact;
