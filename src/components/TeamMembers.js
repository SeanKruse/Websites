import React from 'react';

const TeamMembers = ({ members }) => {
  return (
    <div className="flex justify-center">
      {members.map((member) => (
        <div key={member.name} className="flex flex-col items-center mx-4">
          <a href={member.profileLink}>
            <img
              className="w-24 h-24 rounded-full object-cover object-center mb-4 hover:scale-110 cursor-pointer border-2 border-gray-300"
              src={member.profilePicture}
              alt={member.name}
            />
          </a>
          <figcaption className="text-center">{member.name}</figcaption>
          <p className="text-gray-500">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;