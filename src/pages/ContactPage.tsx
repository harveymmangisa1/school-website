import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team."
        imageUrl="https://images.pexels.com/photos/1559747/pexels-photo-1559747.jpeg"
      />

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="We're here to answer your questions"
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Area 47 Sector 4, Lilongwe, Malawi</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+265 1 234 5678</p>
                    <p className="text-gray-600">+265 9 876 5432 (Mobile)</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@accesschristian.edu</p>
                    <p className="text-gray-600">admissions@accesschristian.edu</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7:30 AM - 4:30 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM (Office Only)</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600">
                    Map would be embedded here (Google Maps iframe)
                  </p>
                </div>
                {/* In a real implementation, you would embed a Google Maps iframe here */}
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="We'll get back to you as soon as possible"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common inquiries"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <dl>
                {faqItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`px-6 py-4 ${index !== faqItems.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <dt className="text-lg font-medium text-gray-900 mb-2">{item.question}</dt>
                    <dd className="text-gray-600">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            The best way to experience Access Christian Elementary School is to see it in person. 
            We invite you to schedule a tour to visit our campus, meet our staff, and see our 
            facilities firsthand.
          </p>
          <a 
            href="#" 
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-800"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  );
};

// Sample FAQ data
const faqItems = [
  {
    question: "What are your school hours?",
    answer: "Our school day runs from 7:45 AM to 3:00 PM, Monday through Friday. Students may arrive as early as 7:15 AM, and after-school supervision is available until 4:30 PM.",
  },
  {
    question: "How can I apply for admission?",
    answer: "Visit our Admissions page for detailed information about the application process. You can download application forms there or pick them up from our office.",
  },
  {
    question: "Do you offer transportation services?",
    answer: "Yes, we provide bus transportation for students living within certain areas of Lilongwe. Contact our office for routes and fees.",
  },
  {
    question: "What safety measures do you have in place?",
    answer: "Our campus has 24-hour security personnel, controlled access points, regular safety drills, and a comprehensive emergency response plan to ensure the safety of all students and staff.",
  },
  {
    question: "How can I get involved as a parent?",
    answer: "We welcome parent involvement! You can join our Parent-Teacher Association (PTA), volunteer in classrooms, help with school events, or contribute to fundraising efforts.",
  },
];

export default ContactPage;