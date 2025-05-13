// Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample testimonials
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

// Custom arrow components
const NextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-3xl cursor-pointer text-yellow-500 z-10"
    >
       <img src="https://i.ibb.co/DfXpsrcJ/arrow-right-2.png" alt="" />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-3xl cursor-pointer text-yellow-500 z-10"
    >
        <img src="https://i.ibb.co/ymmYjKVD/arrow-left-2.png" alt="" />
    </div>
);

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-white py-16 text-center relative">
            <h2 className="text-4xl font-bold mb-10">TESTIMONIALS</h2>
            <div className="px-6 relative  max-w-6xl m-auto">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-3 max-w-2xl">
                            <div className="bg-black text-white rounded-xl p-6">
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
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
