// Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    text: '“BetJil’s JILI slots are a game-changer! Huge variety, stunning visuals, and bonus bonanzas keep me coming back for more. Best slots experience ever!”',
    name: 'Ashton Smith',
    role: 'Cards Chat - Marketing Vice President',
    avatar: '/avatars/ashton.png',
  },
  {
    text: '“BetJil makes a big deal about their commitment to player safety and fair play... BetJil is a good option to consider.”',
    name: 'Felix Noy',
    role: 'Gamblers Pick - Chief Editor',
    avatar: '/avatars/felix.png',
  },
  {
    text: '“Been using BetJil since 2017 and it has only gotten better. Huge selection of games, great odds.”',
    name: 'Saiful Rahman',
    role: 'GamblingCam - Country Marketing Manager',
    avatar: '/avatars/saiful.png',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-10">TESTIMONIALS</h2>
      <div className="flex overflow-x-auto gap-6 px-4 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-black text-white rounded-xl p-6 flex-shrink-0"
          >
            <p className="text-sm mb-6">{testimonial.text}</p>
            <div className="flex flex-col items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full mb-2"
              />
              <h5 className="font-semibold">{testimonial.name}</h5>
              <p className="text-xs text-gray-300">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
