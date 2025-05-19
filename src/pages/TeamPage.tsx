import React, { useState } from 'react';
import { teamMembers } from '../utils/data';
import MemberCard from '../components/Team/MemberCard';
import MemberDetail from '../components/Team/MemberDetail';
import { TeamMember } from '../utils/data';

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="section-title">أعضاء فريقي</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          تعرف على أعضاء فريقنا المتميزين وقصص نجاحهم مع منتجات دي إكس إن
        </p>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-4 px-2 md:px-6 text-right font-bold text-gray-600">الاسم</th>
                  <th className="py-4 px-2 md:px-6 text-right font-bold text-gray-600">رقم العضوية</th>
                  <th className="py-4 px-2 md:px-6 text-right font-bold text-gray-600"></th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map(member => (
                  <MemberCard 
                    key={member.id} 
                    member={member} 
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <MemberDetail 
          member={selectedMember} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default TeamPage;