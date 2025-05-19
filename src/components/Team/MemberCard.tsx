import React from 'react';
import { Info } from 'lucide-react';
import { TeamMember } from '../../utils/data';

interface MemberCardProps {
  member: TeamMember;
  onViewDetails: (member: TeamMember) => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, onViewDetails }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="py-4 px-2 md:px-4">
        <div className="flex items-center">
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="w-10 h-10 rounded-full object-cover ml-3"
          />
          <span className="font-medium">{member.name}</span>
        </div>
      </td>
      <td className="py-4 px-2 md:px-4 text-gray-600 font-mono">
        {member.membershipNumber}
      </td>
      <td className="py-4 px-2 md:px-4 text-right">
        <button 
          onClick={() => onViewDetails(member)}
          className="inline-flex items-center px-3 py-1.5 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition-colors"
        >
          <Info size={16} className="ml-1" />
          <span>التفاصيل</span>
        </button>
      </td>
    </tr>
  );
};

export default MemberCard;