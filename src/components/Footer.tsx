import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">Access Christian Elementary</span>
            </div>
            <p className="text-blue-100 mb-6">
              Nurturing hearts and minds through Christ-centered education since 2005.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Our Staff
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-blue-100">Area 10 Lilongwe, Malawi</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-yellow-400 mr-2 flex-shrink-0" />
                <p className="text-blue-100">+265 1 234 5678</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-yellow-400 mr-2 flex-shrink-0" />
                <p className="text-blue-100">info@accesschristian.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Access Christian Elementary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;