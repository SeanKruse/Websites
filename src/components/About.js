import React from 'react';
import TeamMembers from 'TeamMembers';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      profilePicture: './john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      profilePicture: './jane-smith.jpg',
    },
    {
      name: 'Bob Johnson',
      role: 'UI/UX Designer',
      profilePicture: './bob-johnson.jpg',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <TeamMembers members={teamMembers} />
        </div>
      </div>
    </section>
  );
};

export default About;