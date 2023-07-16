import React from 'react';

const TeamMembers = ({ members }) => {
  return (
    <div className="flex justify-center">
      {members.map((member) => (
        <div key={member.name} className="flex flex-col items-center mx-4">
          <img
            className="w-24 h-24 rounded-full object-cover object-center mb-4"
            src={member.profilePicture}
            alt={member.name}
          />
          <h2 className="text-lg font-medium">{member.name}</h2>
          <p className="text-gray-500">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;