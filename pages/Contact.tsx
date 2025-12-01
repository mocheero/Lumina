import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { sendContactForm } from '../services/api';
import { ContactFormData, FormStatus } from '../types';

const Contact: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, touchedFields },
    trigger 
  } = useForm<ContactFormData>({
    mode: "onChange" // Enable real-time validation
  });
  
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check: If the hidden bot field is filled, silently succeed
    if (data.bot_field) {
      console.log("Bot detected, suppressing submission.");
      setStatus(FormStatus.SUCCESS);
      reset();
      setTimeout(() => setStatus(FormStatus.IDLE), 5000);
      return;
    }

    setStatus(FormStatus.SUBMITTING);
    const success = await sendContactForm(data);
    
    if (success) {
      setStatus(FormStatus.SUCCESS);
      reset();
      setTimeout(() => setStatus(FormStatus.IDLE), 5000);
    } else {
      setStatus(FormStatus.ERROR);
    }
  };

  // Helper to render field status icons
  const getFieldStatusIcon = (fieldName: keyof ContactFormData) => {
    if (errors[fieldName]) return <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3.5" />;
    if (touchedFields[fieldName] && !errors[fieldName]) return <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3.5" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-primary-600 font-bold uppercase tracking-wide mb-2">Get in Touch</h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Let's Discuss Your Next Project</h1>
              <p className="text-lg text-slate-600">
                Have a question or want to get a quote? Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-600">hello@lumina-agency.com</p>
                  <p className="text-slate-600">support@lumina-agency.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Visit Us</h3>
                  <p className="text-slate-600">123 Innovation Blvd, Suite 400</p>
                  <p className="text-slate-600">Tech City, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-slide-up delay-100 border border-slate-100 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            {status === FormStatus.SUCCESS && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-center animate-fade-in">
                <CheckCircle className="h-6 w-6 mr-3" />
                <div>
                  <p className="font-bold">Message Sent!</p>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </div>
              </div>
            )}

            {status === FormStatus.ERROR && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center animate-fade-in">
                <AlertCircle className="h-6 w-6 mr-3" />
                <div>
                  <p className="font-bold">Error Sending Message</p>
                  <p className="text-sm">Please try again later or email us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {/* HONEYPOT FIELD - Hidden from users */}
              <input
                type="text"
                {...register('bot_field')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : (touchedFields.name ? 'border-green-500 focus:ring-green-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-200')} focus:outline-none focus:ring-4 transition-all duration-200 pr-10`}
                      placeholder="John Doe"
                      disabled={status === FormStatus.SUBMITTING}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {getFieldStatusIcon('name')}
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.name.message}</p>}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address format"
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : (touchedFields.email ? 'border-green-500 focus:ring-green-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-200')} focus:outline-none focus:ring-4 transition-all duration-200 pr-10`}
                      placeholder="john@company.com"
                      disabled={status === FormStatus.SUBMITTING}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {getFieldStatusIcon('email')}
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      {...register('phone', { 
                        required: 'Phone number is required',
                        minLength: { value: 10, message: "Please enter a valid phone number (at least 10 digits)" },
                        pattern: {
                            value: /^[\d\+\-\.\(\)\s]+$/,
                            message: "Phone number contains invalid characters"
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-200' : (touchedFields.phone ? 'border-green-500 focus:ring-green-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-200')} focus:outline-none focus:ring-4 transition-all duration-200 pr-10`}
                      placeholder="+1 (555) 000-0000"
                      disabled={status === FormStatus.SUBMITTING}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {getFieldStatusIcon('phone')}
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.phone.message}</p>}
                </div>

                <div className="relative">
                   <label className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                   <div className="relative">
                     <select
                      {...register('serviceInterest', { required: 'Please select a service' })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.serviceInterest ? 'border-red-500 focus:ring-red-200' : (touchedFields.serviceInterest ? 'border-green-500 focus:ring-green-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-200')} focus:outline-none focus:ring-4 transition-all duration-200 bg-white appearance-none`}
                      disabled={status === FormStatus.SUBMITTING}
                      aria-invalid={errors.serviceInterest ? "true" : "false"}
                    >
                      <option value="">Select a service...</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                      <option value="Social Media">Social Media Management</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Paid Advertising">Paid Advertising</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Other">Other</option>
                    </select>
                    {/* Custom chevron or icon could go here, omitting for native feel but could use absolute positioning */}
                   </div>
                  {errors.serviceInterest && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.serviceInterest.message}</p>}
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">Inquiry Type / Subject</label>
                <div className="relative">
                  <select
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 focus:ring-red-200' : (touchedFields.subject ? 'border-green-500 focus:ring-green-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-200')} focus:outline-none focus:ring-4 transition-all duration-200 bg-white appearance-none`}
                    disabled={status === FormStatus.SUBMITTING}
                    aria-invalid={errors.subject ? "true" : "false"}
                  >
                    <option value="">Select a topic...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Quote">Project Quote</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Careers">Careers</option>
                  </select>
                </div>
                {errors.subject && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.subject.message}</p>}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <div className="relative">
                  <textarea
                    rows={5}
                    {...register('message', { 
                      required: 'Message is required', 
                      minLength: { value: 20, message: "Please provide more details (at least 20 characters)" } 
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-200' : (touchedFields.message ? 'border-green-500 focus:ring-green-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-200')} focus:outline-none focus:ring-4 transition-all duration-200`}
                    placeholder="Tell us about your project goals, timeline, and budget..."
                    disabled={status === FormStatus.SUBMITTING}
                    aria-invalid={errors.message ? "true" : "false"}
                  ></textarea>
                   {errors.message ? (
                     <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3.5" />
                   ) : touchedFields.message ? (
                     <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3.5" />
                   ) : null}
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === FormStatus.SUBMITTING ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
