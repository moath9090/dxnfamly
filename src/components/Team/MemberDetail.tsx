import React from 'react';
import { TeamMember } from '../../utils/data';
import Modal from '../UI/Modal';

interface MemberDetailProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemberDetail: React.FC<MemberDetailProps> = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="text-center mb-6">
        <img 
          src={member.avatar} 
          alt={member.name} 
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary-100"
        />
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-gray-500 font-mono">{member.membershipNumber}</p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold mb-2 text-primary-700">قصتي مع دي إكس إن</h4>
        <p className="text-gray-700 leading-relaxed">{member.story}</p>
      </div>
    </Modal>
  );
};

export default MemberDetail;