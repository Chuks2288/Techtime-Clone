import {
    zoom, stripelogo, mondaylogo, slacklogo, dropboxlogo, courseImage1, courseImage2, courseImage3, courseImage4,
    courseImage5, courseImage6, courseLecturer1, courseLecturer2, courseLecturer3, courseLecturer4, courseLecturer5,
    courseLecturer6, testimonialImage1, testimonialImage2, testimonialImage3, testimonialImage4
} from '../assets';

import { GiSpeaker } from 'react-icons/gi';

import {
    MdSettingsInputAntenna, MdOutlineAutoMode, MdDescription,
    MdCastForEducation, MdOutlineSchedule, MdGroups2, MdLocalAtm
} from 'react-icons/md';


import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsReddit } from 'react-icons/bs';




import { AiTwotoneStar } from 'react-icons/ai';


import { TbBook } from 'react-icons/tb';





export const navLinks = [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "aboutus",
        title: "About Us"
    },
    {
        id: "courses",
        title: "Courses"
    },
    {
        id: "testimonial",
        title: "Testimonial"
    },
    {
        id: "community",
        title: "Community"
    },
]



export const stats = [
    {
        id: "stats-1",
        logo: zoom,
    },
    {
        id: "stats-2",
        logo: stripelogo,
    },
    {
        id: "stats-3",
        logo: mondaylogo,
    },
    {
        id: "stats-4",
        logo: slacklogo,
    },
    {
        id: "stats-5",
        logo: dropboxlogo,
    },
]


export const classIcons = [
    {
        id: 'icon-1',
        icons: <GiSpeaker />,
        title: 'Audio Classes',
        color: '#3FA96A',
        bgColor: '#b7eecc'
    },
    {
        id: 'icon-2',
        icons: <MdSettingsInputAntenna />,
        title: 'Live Classes',
        color: '#F69EBE',
        bgColor: '#f8cbc3'
    },
    {
        id: 'icon-3',
        icons: <MdOutlineAutoMode />,
        title: 'Recorded Classes',
        color: '#9269CD',
        bgColor: '#e7d7fd'
    },
    {
        id: 'icon-4',
        icons: <MdDescription />,
        title: '50+ Notes',
        color: '#5978CF',
        bgColor: '#b5c5f1'
    },
]


export const aboutUs = [
    {
        id: 'aboutus-1',
        icon: <MdCastForEducation />,
        title: 'Experienced Mentors',
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.',
        color: '#FFF',
        bgColor: '#4C7FBD'
    },
    {
        id: 'aboutus-2',
        icon: <MdOutlineSchedule />,
        title: 'One-On-One Meetings',
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.',
        color: '#FFF',
        bgColor: '#AECD5E'
    },
    {
        id: 'aboutus-3',
        icon: <MdGroups2 />,
        title: 'One-On-One Meetings',
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.',
        color: '#FFF',
        bgColor: '#ED6BA6'
    },
    {
        id: 'aboutus-4',
        icon: <MdLocalAtm />,
        title: 'Affordable Prices',
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.',
        color: '#FFF',
        bgColor: '#EA6B45'
    },
]

export const courseDeps = [
    {
        id: 'all-categories',
        title: 'All Categories'
    },
    {
        id: 'design',
        title: 'Design'
    },
    {
        id: 'development',
        title: 'Development'
    },
    {
        id: 'marketing',
        title: 'Marketing'
    },
]


export const courses = [
    {
        id: 'course-1',
        image: courseImage1,
        dep: 'Design',
        rating: '4.7k',
        star: <AiTwotoneStar />,
        rating2: '(32.7k+)',
        title: 'Introduction to user research in UX Design',
        icon: <TbBook />,
        time: '23hrs 50mins',
        icon2: <MdOutlineSchedule />,
        lessons: '15 Lessons',
        lecturerImage: courseLecturer1,
        lecturerName: 'Leonard Victor',
        price: '$15.00'
    },
    {
        id: 'course-2',
        image: courseImage2,
        dep: 'Marketing',
        rating: '4.7k',
        star: <AiTwotoneStar />,
        rating2: '(8.7k+)',
        title: 'Introduction to new marketing audience',
        icon: <TbBook />,
        time: '22hrs 30mins',
        icon2: <MdOutlineSchedule />,
        lessons: '22 Lessons',
        lecturerImage: courseLecturer2,
        lecturerName: 'Jefferey Williams',
        price: '$32.00'
    },
    {
        id: 'course-3',
        image: courseImage3,
        dep: 'Development',
        rating: '4.7k',
        star: <AiTwotoneStar />,
        rating2: '(12.7k+)',
        title: 'Introduction to Html, CSS & Bootstrap',
        icon: <TbBook />,
        time: '45hrs 50mins',
        icon2: <MdOutlineSchedule />,
        lessons: '55 Lessons',
        lecturerImage: courseLecturer3,
        lecturerName: 'Claretta Mason',
        price: '$55.00'
    },
    {
        id: 'course-4',
        image: courseImage4,
        dep: 'Development',
        rating: '4.7k',
        star: <AiTwotoneStar />,
        rating2: '(32.7k+)',
        title: 'Introduction to javascript, Git & Github',
        icon: <TbBook />,
        time: '30hrs 50mins',
        icon2: <MdOutlineSchedule />,
        lessons: '22 Lessons',
        lecturerImage: courseLecturer4,
        lecturerName: 'Jessica Duke',
        price: '$45.00'
    },
    {
        id: 'course-5',
        image: courseImage5,
        dep: 'Marketing',
        rating: '4.7k',
        star: <AiTwotoneStar />,
        rating2: '(4.7k+)',
        title: 'Introduction to outroom marketing analysis',
        icon: <TbBook />,
        time: '33hrs 50mins',
        icon2: <MdOutlineSchedule />,
        lessons: '26 Lessons',
        lecturerImage: courseLecturer5,
        lecturerName: 'Samuel Jacobs',
        price: '$25.00'
    },
    {
        id: 'course-6',
        image: courseImage6,
        dep: 'Marketing',
        rating: '4.7k',
        star: <AiTwotoneStar />,
        rating2: '(15.7k+)',
        title: 'Introduction to live marketing analysis',
        icon: <TbBook />,
        time: '10hrs 50mins',
        icon2: <MdOutlineSchedule />,
        lessons: '32 Lessons',
        lecturerImage: courseLecturer6,
        lecturerName: 'Adams Smith',
        price: '$25.00'
    }
]

export const slides = [
    {
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition',
        image: testimonialImage1,
        name: 'Bella Moon',
        position: 'Product Designer'
    },
    {
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition',
        image: testimonialImage2,
        name: 'Samuel Fortune',
        position: 'Product Designer'
    },
    {
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition',
        image: testimonialImage3,
        name: 'Bryce Jason',
        position: 'Product Designer'
    },
    {
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition',
        image: testimonialImage4,
        name: 'Bryce Jason',
        position: 'Product Designer'
    },
    {
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition',
        image: testimonialImage4,
        name: 'Bryce Jason',
        position: 'Product Designer'
    },
    {
        content: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition',
        image: testimonialImage4,
        name: 'Bryce Jason',
        position: 'Product Designer'
    },
]


export const faqs = [
    {
        id: 'faq-1',
        question: 'Can I change my plan later?',
        answer: '+'
    },
    {
        id: 'faq-2',
        question: 'Are the courses lifetime?',
        answer: '+'
    },
    {
        id: 'faq-3',
        question: 'Do I get certified after taking courses?',
        answer: '+'
    },
    {
        id: 'faq-1',
        question: 'How do I reach out to mentors?',
        answer: '+'
    },
    {
        id: 'faq-1',
        question: 'Do we get job ready after taking courses?',
        answer: '+'
    },
]





export const socialMedias = [
    {
        id: "social-media-1",
        icon: <BsFacebook />,
        link: "https://www.facebook.com/"
    },
    {
        id: "social-media-2",
        icon: <BsTwitter />,
        link: "https://www.facebook.com/"
    },
    {
        id: "social-media-3",
        icon: <BsYoutube />,
        link: "https://www.facebook.com/"
    },
    {
        id: "social-media-4",
        icon: <BsInstagram />,
        link: "https://www.facebook.com/"
    },
    {
        id: "social-media-5",
        icon: <BsReddit />,
        link: "https://www.facebook.com/"
    },
]

export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: 'Home'
            },
            {
                name: 'About Us',
            },
            {
                name: 'Our Courses'
            },
            {
                name: 'Testimonials'
            },
            {
                name: 'Our Community'
            },
        ]
    },

    {
        title: 'Community',
        links: [
            {
                name: 'Help Centers',
            },
            {
                name: 'Partners',
            },
            {
                name: 'Suggestion',
            },
            {
                name: 'Blog',
            },
            {
                name: 'Newsletter',
            },
        ]
    },
    // {
    //     title: 'Subscribe Us',
    // },
]



