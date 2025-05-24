import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary pt-12 md:pt-16 pb-24 md:pb-10 z-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 text-center sm:text-left">
          {/* Brand & Social */}
          <div>
            <Link to="/" className="font-display text-xl md:text-2xl text-secondary mb-4 md:mb-6 inline-block">
              Being Women
            </Link>
            <p className="text-secondary/80 mb-2 text-sm md:text-base">
              {t('footer.tagline')}
            </p>
            <p className="text-secondary/60 text-xs md:text-sm mb-4 md:mb-6">
              {t('footer.made')}
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[
                ['https://instagram.com/boutiquebeingwomen', <Instagram className="h-5 w-5 md:h-6 md:w-6" />],
                ['https://facebook.com/boutique.beingwomen', <Facebook className="h-5 w-5 md:h-6 md:w-6" />],
              ].map(([url, icon], idx) => (
                <a
                  key={idx}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 transition-colors transform hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold text-secondary mb-4 md:mb-6 text-lg">
              {t('footer.sections.collections')}
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link to="/navratri" className="text-secondary/80 hover:text-secondary transition-colors">{t('nav.navratri')}</Link></li>
              <li><Link to="/wedding" className="text-secondary/80 hover:text-secondary transition-colors">{t('nav.wedding')}</Link></li>
              <li><Link to="/casual" className="text-secondary/80 hover:text-secondary transition-colors">{t('nav.casual')}</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-secondary mb-4 md:mb-6 text-lg">
              {t('footer.sections.information')}
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link to="/about" className="text-secondary/80 hover:text-secondary transition-colors">{t('footer.links.about')}</Link></li>
              <li><Link to="/contact" className="text-secondary/80 hover:text-secondary transition-colors">{t('footer.links.contact')}</Link></li>
              <li><Link to="/clientexperience" className="text-secondary/80 hover:text-secondary transition-colors">{t('footer.links.clientexperience')}</Link></li>
              <li><Link to="/faq" className="text-secondary/80 hover:text-secondary transition-colors">{t('footer.links.faq')}</Link></li>
              <li><Link to="/accessibility" className="text-secondary/80 hover:text-secondary transition-colors">{t('footer.links.accessibility')}</Link></li>
            </ul>
          </div>

          {/* Book Consultation */}
          <div>
            <h3 className="font-semibold text-secondary mb-4 md:mb-6 text-lg">
              {t('footer.sections.consultation')}
            </h3>
            <p className="text-secondary/80 mb-4 md:mb-6 text-sm md:text-base">
              {t('footer.consultation.text')}
            </p>
            <Link
              to="/book-consultation"
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors group text-sm md:text-base"
            >
              {t('footer.consultation.cta')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <ul className="mt-4 md:mt-6 space-y-1 md:space-y-2 text-secondary/80 text-xs md:text-sm">
              <li>{t('contact.info.email')} - support@beingwomen.in</li>
              <li>{t('contact.info.phone')} - +91 98765 43210</li>
              <li>{t('contact.info.hours')}</li>
            </ul>
          </div>
        </div>

        {/* Business Info */}
        <div className="border-t border-secondary/20 pt-6 mb-6">
          <div className="text-center text-secondary/70 text-xs md:text-sm space-y-1 md:space-y-2">
            <p>{t('business.name')}</p>
            <p>{t('business.gstin')}: 27AABCB1234C1Z5</p>
            <p>{t('business.cin')}: U74999MH2024PTC123456</p>
            <p>{t('business.msme')}: MH18D0123456</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-secondary/20 pt-6">
          <div className="flex flex-col items-center md:flex-row md:justify-start md:space-x-6 text-center md:text-left">
            <Link 
              to="/privacy" 
              className="text-secondary/70 hover:text-secondary transition-colors text-xs md:text-sm relative group mb-2 md:mb-0"
            >
              {t('footer.links.privacy')}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link 
              to="/terms" 
              className="text-secondary/70 hover:text-secondary transition-colors text-xs md:text-sm relative group mb-2 md:mb-0"
            >
              {t('footer.links.terms')}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <p className="text-secondary/70 text-xs md:text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;