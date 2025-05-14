import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        text: '“BetJili knocks it out of the park on both. Their JILI slot collection is massive, with something for every theme you can imagine. Plus, the games load lightning fast and play flawlessly. They even have some exclusive JILI titles I could not find anywhere else.”',
        name: 'Shirin Khan',
        role: 'Ask Gamblers',
        identity: 'Chairman',
        url: 'https://i.ibb.co/WptdgkkG/02-copy.png',
    },
    {
        text: '“Huge win for cricket fans! Betjili offers endless betting options, live streaming that puts you in the game, and secure payments. It is my go-to platform for an unbeatable sports betting experience.”',
        name: 'Vanessa Stout',
        role: 'Casino Rank',
        identity: 'Operation Manager',
        url: 'https://i.ibb.co/0yxWSMLG/Casino-Rank.png',
    },
    {
        text: '“Betjili JILI slots are a game-changer! Huge variety, stunning visuals, and bonus bonanzas keep me coming back for more. Best slots experience ever!”',
        name: 'Ashton Smit',
        role: 'Cards Chat',
        identity: 'Marketing Vice President',
        url: 'https://i.ibb.co/SwghgBFQ/Cards-Chat.png',
    },
    {
        text: '“Betjili makes a big deal about their commitment to player safety and fair play. They have a license and regulations in place, and their games are audited for fairness. If you are looking for a safe and secure place to gamble online, Betjili is a good option to consider”',
        name: 'Felix Noy',
        role: 'Gamblers Pick',
        identity: 'Chief Editor',
        url: 'https://i.ibb.co/S44TVNrj/Gamblers-pick.png',
    },
    {
        text: '“Been using BetJili since 2017 and they have only gotten better. Huge selection of sports to bet on, over 20, and they always seem to have the best odds. Definitely a top choice for online sports betting!”',
        name: 'Saiful Rahman',
        role: 'Gambling.Com',
        identity: 'Country Marketing Manager',
        url: 'https://i.ibb.co/671bZRpK/Gambling-Dot-com.png',
    },
];

const NextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute right-[-17px] md:right-[-30px] top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-10"
    >
        <img className='w-[20px] md:w-full' src="https://i.ibb.co/DfXpsrcJ/arrow-right-2.png" alt="Next" />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute left-[-17px] md:left-[-30px] top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-10"
    >
        <img className='w-[20px] md:w-full' src="https://i.ibb.co/ymmYjKVD/arrow-left-2.png" alt="Previous" />
    </div>
);

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
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
            <div className="relative px-4 md:px-6 max-w-screen-xl mx-auto -mx-3">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-3">
                            <div className="max-w-[360px] h-[313px] border border-black rounded-3xl mx-auto">
                                <div className="bg-[#ffe400] h-[180px] rounded-t-3xl text-center italic font-medium text-[13px]">
                                    <p className="max-w-10/12 m-auto pt-5">{testimonial.text}</p>
                                </div>
                                <div className="bg-black h-[132px] text-white text-center rounded-b-3xl relative">
                                    <img
                                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[76px] border-4 border-[#ffe400] rounded-full"
                                        src={testimonial.url}
                                        alt={testimonial.name}
                                    />
                                    <div className="pt-12 text-sm">
                                        <p className="text-[#ffe400]">{testimonial.name}</p>
                                        <p className="text-white">{testimonial.role}</p>
                                        <p className="text-[#989898] text-[12px]">{testimonial.identity}</p>
                                    </div>
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
