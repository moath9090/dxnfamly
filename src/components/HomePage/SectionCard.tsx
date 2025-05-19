import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionCard as SectionCardType } from '../../utils/data';

interface SectionCardProps {
  card: SectionCardType;
}

const SectionCard: React.FC<SectionCardProps> = ({ card }) => {
  return (
    <Link 
      to={card.path} 
      className="card group aspect-square relative overflow-hidden"
    >
      <img 
        src={card.imageUrl} 
        alt={card.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
          {card.title}
        </h3>
        
        <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="ml-1">عرض المزيد</span>
          <ArrowLeft size={16} />
        </div>
      </div>
    </Link>
  );
};

export default SectionCard;