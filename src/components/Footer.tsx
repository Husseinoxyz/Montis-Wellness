import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { services } from '../data/services';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Montis Specialist Center"
                className="h-16 w-auto object-contain"
              />
              <span className="text-xl font-semibold tracking-tight text-white">
                Montis Specialist Center
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A calm space for recovery, balance, and care—designed around you. We blend hands-on care with thoughtful technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#CDB06A] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDB06A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDB06A] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDB06A] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#CDB06A' }}>Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <service.icon className="w-4 h-4" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#CDB06A' }}>More Services</h4>
            <ul className="space-y-3">
              {services.slice(4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <service.icon className="w-4 h-4" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#CDB06A' }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CDB06A] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">127 Wellness Boulevard, Suite 300, Medical District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CDB06A] shrink-0" />
                <a href="tel:+15550142200" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +1 (555) 014-2200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CDB06A] shrink-0" />
                <a href="mailto:hello@montiswellness.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  hello@montiswellness.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#CDB06A] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Mon-Fri: 8AM-8PM<br/>Sat: 9AM-6PM<br/>Sun: 10AM-4PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Montis Specialist Center. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Heart className="w-4 h-4 text-[#CDB06A]" />
            <span>Made with care for your wellness</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
