import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import BannerImage from '../assets/Corporate-Cabs-Driver.jpg';
import emailjs from '@emailjs/browser';


const ContactInfo = ({ icon: Icon, title, content, link }) => {
  return (
    <div className="flex items-start p-4 space-x-4 transition-all duration-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
      <div className="flex-shrink-0">
        <div className="p-3 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl">
          <Icon className="w-6 h-6 text-yellow-600" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-yellow-500">
            {content}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    // EmailJS parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send('your_service_id', 'your_template_id', templateParams, 'your_public_key')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Something went wrong. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });

  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={BannerImage}
            alt="Luxury Car Service"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50">
            <div className="px-4 text-center animate-fade-in-up">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-amber-400">
                Get in Touch with Us
              </h1>
              <p className="max-w-2xl mx-auto text-xl font-bold md:text-2xl text-white/90 animate-fade-in">
                Have questions about our services? We're here to help you 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Reach out to us through any of these channels and we'll respond as soon as possible.
              </p>
            </div>

            <ContactInfo
              icon={Phone}
              title="Phone Number"
              content="+91 6355043288"
              link="tel:916355043288"
            />
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <ContactInfo
                icon={Mail}
                title="Email Address"
                content="info@gujjucabs.com"
                link="mailto:info@gujjucabs.com"
              />
            </div>
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <ContactInfo
                icon={MapPin}
                title="Office Location"
                content="Surat"
              />
            </div>
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <ContactInfo
                icon={Clock}
                title="Working Hours"
                content="24/7 - Always available for you"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white border border-gray-100 shadow-xl dark:bg-gray-800 rounded-2xl dark:border-gray-700">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl dark:border-gray-700 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 dark:bg-gray-900 dark:text-white"
                    placeholder="First Name"
                  />
                  {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl dark:border-gray-700 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 dark:bg-gray-900 dark:text-white"
                    placeholder="Last Name"
                  />

                  {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl dark:border-gray-700 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 dark:bg-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl dark:border-gray-700 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 dark:bg-gray-900 dark:text-white"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl dark:border-gray-700 focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 dark:bg-gray-900 dark:text-white"
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transform transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {/* Send Message */}
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Display Previously Submitted Data */}
      {/* <div className="container px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Previously Submitted Details</h2>
        <div className="space-y-4">
          {submittedData.map((data, index) => (
            <div key={index} className="p-6 bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-2xl dark:border-gray-700">
              <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Phone:</strong> {data.phone}</p>
              <p><strong>Message:</strong> {data.message}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Map Section */}
      <div className="w-full h-[500px] mt-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564944227!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-none"
        ></iframe>
      </div>

      {/* Quick Contact Section */}
      {/* <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 transition-all duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Live Chat</h3>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Get instant answers through our live chat support system.</p>
              <button className="font-semibold text-yellow-500 hover:text-yellow-600">
                Start Chat →
              </button>
            </div>

            <div className="p-8 transition-all duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
                  <Phone className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Call Us</h3>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Speak directly with our customer service team.</p>
              <a href="tel:+15551234567" className="font-semibold text-yellow-500 hover:text-yellow-600">
                +1 (555) 123-4567 →
              </a>
            </div>

            <div className="p-8 transition-all duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
                  <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Us</h3>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Send us an email and we'll respond within 24 hours.</p>
              <a href="mailto:info@luxurycabs.com" className="font-semibold text-yellow-500 hover:text-yellow-600">
                info@luxurycabs.com →
              </a>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Contact;