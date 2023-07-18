import React, { useEffect } from 'react';
import { teamMembers } from '../data';

const TeamMembers = ({ members }) => {
  return (
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="text-center mb-4">
          <p className="text-2xl font-medium text-gray-900">Who We Are</p>
        </div>
      </div>
      {members.map((member) => (
        <div key={member.name} className="flex flex-col items-center mx-8">
          <a href={member.profileLink}>
            <div className="w-80 h-96 border-2 border-gray-300 rounded-lg overflow-hidden hover:scale-110 cursor-pointer">
              <div className="w-full h-4/5 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center transform transition duration-500 ease-in-out hover:scale-110 cursor-pointer"
                  src={member.profilePicture}
                  alt={member.name}
                />
              </div>
              <figcaption className="text-center py-2">{member.name}
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

  const words = ['Design', 'Development', 'Innovation'];

  useEffect(() => {
    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    let wordElements = document.querySelectorAll('.word');

    wordElements[currentWordIndex].style.opacity = "1";

    let changeText = () => {
      let currentWord = wordElements[currentWordIndex];
      let nextWord = currentWordIndex === maxWordIndex ? wordElements[0] : wordElements[currentWordIndex + 1];

      Array.from(currentWord.children).forEach((letter,i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i*80);
      });
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter,i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340+(i*80));
      });
      currentWordIndex = (currentWordIndex === maxWordIndex) ? 0 : currentWordIndex+1;
    };

    changeText();
    setInterval(changeText, 3000);
  }, [words]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-20 py-24">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <div className="text-4xl font-bold leading-tight text-gray-900">
                <p className="word">
                  {words[0].split('').map((letter, i) => (
                    <span key={i} className="letter">{letter}</span>
                  ))}
                </p>
                <p className="word">
                  {words[1].split('').map((letter, i) => (
                    <span key={i} className="letter">{letter}</span>
                  ))}
                </p>
                <p className="word">
                  {words[2].split('').map((letter, i) => (
                    <span key={i} className="letter">{letter}</span>
                  ))}
                </p>
              </div>
              <TeamMembers members={teamMembers} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;