import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">Get in Touch</h1>
          <p className="text-xl text-secondary/90 max-w-2xl mx-auto">
            Have questions about our Navratri collection or other ethnic wear? We're here to help you find the perfect outfit for your celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral p-8 rounded-lg">
            <h2 className="font-display text-2xl text-secondary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-secondary/20 bg-primary px-4 py-2 text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-secondary/20 bg-primary px-4 py-2 text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-secondary/20 bg-primary px-4 py-2 text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-md border border-secondary/20 bg-primary px-4 py-2 text-secondary placeholder-secondary/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-secondary text-primary px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center"
                disabled={status === 'loading'}
              >
                <Send className="h-4 w-4 mr-2" />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-secondary text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neutral p-8 rounded-lg">
              <h2 className="font-display text-2xl text-secondary mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Phone & WhatsApp</h3>
                    <p className="text-secondary/80">+91 98765 43210</p>
                    <p className="text-secondary/80">Monday to Saturday, 10am to 7pm IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Email</h3>
                    <p className="text-secondary/80">support@beingwomen.in</p>
                    <p className="text-secondary/80">For business inquiries: business@beingwomen.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Store Location</h3>
                    <p className="text-secondary/80">
                      123 Fashion Street, Linking Road
                      <br />
                      Mumbai, Maharashtra 400050
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-neutral p-8 rounded-lg">
              <h2 className="font-display text-2xl text-secondary mb-6">Store Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-secondary/80">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-secondary/80">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;