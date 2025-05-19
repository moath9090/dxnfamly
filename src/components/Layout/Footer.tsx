import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter, Youtube  } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {    contactInfo } from '../../utils/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* About Us Section */}
         
        
        
        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400">معلومات الاتصال</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail size={18} className="ml-2 text-primary-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="ml-2 text-primary-400" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-primary-400 transition-colors">الرئيسية</Link>
                </li>
                <li>
                  <Link to="/videos" className="hover:text-primary-400 transition-colors">الفيديوهات</Link>
                </li>
                <li>
                  <Link to="/recipes" className="hover:text-primary-400 transition-colors">الوصفات العلاجية</Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-primary-400 transition-colors">فريقنا</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-primary-400 transition-colors">التسجيل</Link>
                </li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-400">    استشارة مجانية تواصل معنا :- </h3>
              <div className="flex space-x-4">
                {contactInfo.socialMedia.map(platform => {
                  let icon;
                  switch (platform.name) {
                    case 'Facebook':
                      icon = <Facebook size={24} />;
                      break;
                    case 'Instagram':
                      icon = <Instagram size={24} />;
                      break;
                    case 'Twitter':
                      icon = <Twitter size={24} />;
                      break;
                    case 'YouTube':
                      icon = <Youtube size={24} />;
                      break;
                      case 'WhatsApp':
                      icon = <FaWhatsapp size={24} />;
                      break;
                    default:
                      icon = null;
                  }
                  
                  return (
                    platform.name !== 'WhatsaApp' && (
                      <a 
                        key={platform.id}
                        href={platform.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-primary-400 transition-colors ml-4"
                        aria-label={platform.name}
                      >
                        {icon}
                      </a>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700 text-gray-400">
          <p>© {new Date().getFullYear()} DxnFamily منصة . جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;