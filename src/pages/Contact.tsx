import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-secondary/90 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral p-8 rounded-lg">
            <h2 className="font-display text-2xl text-secondary mb-6">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full rounded-md border border-secondary/20 bg-primary px-4 py-2 text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    />
                  ) : (
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="w-full rounded-md border border-secondary/20 bg-primary px-4 py-2 text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-secondary text-primary px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center"
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

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neutral p-8 rounded-lg">
              <h2 className="font-display text-2xl text-secondary mb-6">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">{t('contact.info.phone')}</h3>
                    <p className="text-secondary/80">+91 98765 43210</p>
                    <p className="text-secondary/80">{t('contact.info.hours')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">{t('contact.info.email')}</h3>
                    <p className="text-secondary/80">support@beingwomen.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">{t('contact.info.address')}</h3>
                    <p className="text-secondary/80" dangerouslySetInnerHTML={{ __html: t('contact.info.addressdetails') }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-neutral p-8 rounded-lg">
              <h2 className="font-display text-2xl text-secondary mb-6">{t('contact.hours.title')}</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-secondary">
                  <span>{t('contact.hours.weekdays')}</span>
                  <span>{t('contact.hours.timeweekdays')}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>{t('contact.hours.saturday')}</span>
                  <span>{t('contact.hours.timesaturday')}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>{t('contact.hours.sunday')}</span>
                  <span>{t('contact.hours.timesunday')}</span>
                </div>
              </div>
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
                <h2 className="font-display text-2xl mb-4 text-secondary">Form Submitted Successfully!</h2>
                <p className="text-secondary/80 mb-6">
                  Thank you for reaching out!<br />
                  We will contact you soon via Phone or WhatsApp.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors"
                >
                  OK
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
