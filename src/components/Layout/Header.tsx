import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://fv5-2.files.fm/thumb_show.php?i=pv6ne9ktwf&view&v=1&PHPSESSID=a4cab18a9a506ac8c13a271ee2c2384a3398b024" 
              alt="DXN Arabic" 
              className="h-14 w-14 object-cover  "
            />
            <span style={{ color: '#0088cc' }} className="text-primary-700 font-display text-xl md:text-2xl font-bold mr-2">
             DxnFamily
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium ml-8">
              الرئيسية
            </Link>
            <Link to="/videos" className="text-gray-700 hover:text-primary-600 font-medium ml-8">
              الفيديوهات
            </Link>
            <Link to="/recipes" className="text-gray-700 hover:text-primary-600 font-medium ml-8">
              الوصفات العلاجية
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-primary-600 font-medium ml-8">
              فريقنا
            </Link>
            <Link to="/register" className="btn btn-primary   bg-gradient-to-b from-[#0075b3] to-[#0088cc] text-white text-center">
            إنشاء كود عضو جديد
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/videos" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الفيديوهات
            </Link>
            <Link 
              to="/recipes" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الوصفات العلاجية
            </Link>
            <Link 
              to="/team" 
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              فريقنا
            </Link>
            <Link 
              to="/register" 
              className="btn btn-primary   bg-gradient-to-b from-[#0075b3] to-[#0088cc] text-white text-center"
              onClick={() => setIsMenuOpen(false)}
            >
             إنشاء كود عضو جديد
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;