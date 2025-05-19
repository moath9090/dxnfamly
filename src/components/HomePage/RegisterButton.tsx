import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const RegisterButton: React.FC = () => {
  return (
    <div className="text-center my-16">
      <Link 
        to="/register" 
        className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-bold text-lg md:text-xl rounded-lg shadow-lg hover:bg-accent-600 transition-all duration-300 animate-pulse-grow"
      >
        <UserPlus size={24} className="ml-2" />
        سجل الآن وانضم إلى عائلة دي إكس إن
      </Link>
      <p className="mt-4 text-gray-600">
        ابدأ رحلتك نحو صحة أفضل وحياة أكثر نشاطاً
      </p>
    </div>
  );
};

export default RegisterButton;