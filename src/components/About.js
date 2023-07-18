import React from 'react';
import { teamMembers } from '../data';

const TeamMembers = ({ members }) => {
  return (
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"></div>
      {members.map((member) => (
        <div key={member.name} className="flex flex-col items-center mx-8">
          <a href={member.profileLink}>
            <div className="w-80 h-96 border-2 border-gray-300 rounded-lg overflow-hidden mb-4 hover:scale-110 cursor-pointer">
              <div className="w-full h-4/5 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={member.profilePicture}
                  alt={member.name}
                />
              </div>
              <figcaption className="text-center h-1/5 py-2">{member.name}
              <p className="text-gray-500">{member.role}</p>
              </figcaption>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: 'Sean Kruse',
      role: 'UI/UX Designer',
      profilePicture: './animesean.jpg',
    },
    {
      name: 'Chris Lopez',
      role: 'Backend Engineer',
      profilePicture: './animechris.jpg',
    },
    {
      name: 'Connor Meek',
      role: 'API & Data Engineer',
      profilePicture: './animeconnor.jpg',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-20 py-24">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <TeamMembers members={teamMembers} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;