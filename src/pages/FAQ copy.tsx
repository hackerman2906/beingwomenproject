import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openSection, setOpenSection] = useState<string | null>('shipping');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqSections = {
    shipping: {
      title: "Shipping & Delivery",
      questions: [
        {
          id: "shipping-1",
          question: "How long does shipping take?",
          answer: "For domestic orders within India, standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days. International shipping typically takes 7-14 business days depending on the destination."
        },
        {
          id: "shipping-2",
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free shipping on all domestic orders above ₹2,999. International shipping charges vary by location."
        },
        {
          id: "shipping-3",
          question: "Can I track my order?",
          answer: "Yes, once your order is shipped, you'll receive a tracking number via email to monitor your package's journey."
        }
      ]
    },
    style: {
      title: "Style Guide & Measurements",
      questions: [
        {
          id: "style-1",
          question: "How do I find my perfect size?",
          answer: "Use our detailed size guide with measurements for all garments. For lehengas, measure your bust, waist, and hip. For kurtis, take shoulder, bust, and length measurements. When in doubt, size up."
        },
        {
          id: "style-2",
          question: "How should I style traditional wear?",
          answer: "For Navratri: Pair chaniya cholis with traditional jewelry and comfortable dancing footwear. For weddings: Match your lehenga with complementary dupatta and statement jewelry. For casual wear: Mix and match kurtis with different bottoms and modern accessories."
        },
        {
          id: "style-3",
          question: "Do you offer styling consultations?",
          answer: "Yes, our expert stylists are available for virtual consultations to help you choose the perfect outfit and styling accessories."
        }
      ]
    },
    returns: {
      title: "Returns & Exchanges",
      questions: [
        {
          id: "returns-1",
          question: "What is your return policy?",
          answer: "We accept returns within 7 days of delivery. Items must be unworn, unwashed, and with original tags attached."
        },
        {
          id: "returns-2",
          question: "How do I initiate a return?",
          answer: "Log into your account, go to your orders, and select 'Return Item'. Follow the instructions to generate a return shipping label."
        }
      ]
    },
    care: {
      title: "Product Care",
      questions: [
        {
          id: "care-1",
          question: "How should I care for my traditional wear?",
          answer: "Most items require dry cleaning. For detailed care instructions, check the label on your garment. Store in a cool, dry place and avoid direct sunlight."
        },
        {
          id: "care-2",
          question: "Can I wash embellished items at home?",
          answer: "We recommend professional dry cleaning for all embellished items to maintain their quality and appearance."
        }
      ]
    }
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-secondary/90 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more.
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
                    {section.questions.map((item) => (
                      <div key={item.id} className="border-b border-secondary/20 last:border-0">
                        <button
                          className="w-full py-4 flex items-center justify-between text-left"
                          onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
                        >
                          <h3 className="font-medium text-secondary pr-8">{item.question}</h3>
                          {openQuestion === item.id ? (
                            <ChevronUp className="h-4 w-4 text-secondary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-secondary flex-shrink-0" />
                          )}
                        </button>
                        {openQuestion === item.id && (
                          <p className="text-secondary/80 pb-4">{item.answer}</p>
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
          <h2 className="font-display text-2xl text-secondary mb-4">Still Have Questions?</h2>
          <p className="text-secondary/80 mb-6">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;