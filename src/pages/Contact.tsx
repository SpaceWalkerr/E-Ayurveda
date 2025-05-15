import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CalendarDays, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    symptoms: '',
    consultation: 'online',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    if (!formData.age.trim()) {
      errors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      errors.age = 'Please enter a valid age';
    }
    if (!formData.symptoms.trim()) {
      errors.symptoms = 'Please describe your symptoms';
    }
    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select a preferred date';
    }
    if (!formData.preferredTime) {
      errors.preferredTime = 'Please select a preferred time';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          gender: '',
          symptoms: '',
          consultation: 'online',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <div className="pt-16 bg-cream-50">
      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Book a Consultation</h1>
          <p className="text-green-100 max-w-2xl">
            Connect with our Ayurvedic experts for personalized guidance on your health journey.
            Fill out the form below to schedule your consultation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 h-full">
              <h2 className="font-serif text-2xl font-bold text-green-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <MapPin size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600 text-sm">
                      123 Ayurveda Way, Wellness District<br />
                      Natural City, 56789
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Phone size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+1234567890" className="hover:text-green-700">+123 456 7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Mail size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:consult@e-ayurveda.com" className="hover:text-green-700">consult@e-ayurveda.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Clock size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-2">
            {!isSubmitted ? (
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="font-serif text-2xl font-bold text-green-800 mb-6">Schedule Your Consultation</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          formErrors.name ? 'border-red-300' : 'border-gray-300'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          formErrors.email ? 'border-red-300' : 'border-gray-300'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          formErrors.phone ? 'border-red-300' : 'border-gray-300'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          formErrors.age ? 'border-red-300' : 'border-gray-300'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                      />
                      {formErrors.age && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.age}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="consultation" className="block text-sm font-medium text-gray-700 mb-1">
                        Consultation Type
                      </label>
                      <select
                        id="consultation"
                        name="consultation"
                        value={formData.consultation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="online">Online Consultation</option>
                        <option value="in-person">In-Person Consultation</option>
                        <option value="phone">Phone Consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CalendarDays size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full pl-10 px-4 py-2 border ${
                            formErrors.preferredDate ? 'border-red-300' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                        />
                      </div>
                      {formErrors.preferredDate && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.preferredDate}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="time"
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={`w-full pl-10 px-4 py-2 border ${
                            formErrors.preferredTime ? 'border-red-300' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                        />
                      </div>
                      {formErrors.preferredTime && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.preferredTime}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe Your Symptoms <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2 border ${
                        formErrors.symptoms ? 'border-red-300' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                      placeholder="Please describe your symptoms, concerns, or health goals..."
                    ></textarea>
                    {formErrors.symptoms && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.symptoms}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Any additional information you'd like to share with our practitioners..."
                    ></textarea>
                  </div>
                  
                  <div className="text-right">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center ml-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Book Consultation <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="font-serif text-2xl font-bold text-green-800 mb-4">Consultation Request Received</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for booking a consultation with E-Ayurveda. One of our 
                  Ayurvedic practitioners will review your information and confirm 
                  your appointment shortly.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-green-800 font-medium mb-2">What happens next?</p>
                  <ul className="text-gray-700 text-left space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1 flex-shrink-0">
                        <path d="m5 11 4 4L19 7"></path>
                      </svg>
                      <span>You'll receive a confirmation email within the next hour</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1 flex-shrink-0">
                        <path d="m5 11 4 4L19 7"></path>
                      </svg>
                      <span>Our practitioner will call you to confirm the appointment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-1 flex-shrink-0">
                        <path d="m5 11 4 4L19 7"></path>
                      </svg>
                      <span>You'll get instructions for preparation before the consultation</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  Book another consultation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-green-800 mb-2">Visit Our Center</h2>
            <p className="text-gray-600">
              Experience the traditional Ayurvedic environment at our wellness center
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343035!2d-74.00425882427669!3d40.74076294375834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sUnion%20Square%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1695652425276!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="E-Ayurveda Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;