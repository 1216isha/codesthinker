// const ServicesData = [
//     {
//         id:1,
//         image:"",
//         title:"",
//         short_description:"",
//         long_description:"",
//         detail:[
//             {
//                 title:"",
//                 description:""
//             },

import Services from "../../pages/Services"

//         ]
//     }
// ]


import website from '../../assets/ServicesImages/website.webp'
import app from '../../assets/ServicesImages/app.webp'
import devopsclouds from '../../assets/ServicesImages/devopsclouds.webp'
import machinelearning from '../../assets/ServicesImages/machinelearning.webp'
import blockchain from '../../assets/ServicesImages/blockchain.webp'
import websitehosting from '../../assets/ServicesImages/websitehosting.webp'
import wordpressdevelopment from '../../assets/ServicesImages/wordpressdevelopment.webp'
import seo from '../../assets/ServicesImages/seo.webp'
import uiux from '../../assets/ServicesImages/uiux.webp'
import graphic from '../../assets/ServicesImages/graphic.webp'
import videoeditings from '../../assets/ServicesImages/videoeditings.webp'
import codecalling from '../../assets/ServicesImages/codecalling.webp'
import digital from '../../assets/ServicesImages/digital.webp'
import leadgeneration from '../../assets/ServicesImages/leadgeneration.webp'

const services = [
    {
        id: 1,
        image: website,
        title: 'Website Development',
        desc_short: 'Custom, responsive websites designed to meet your business needs and provide an excellent user experience.',
        desc_long: "We specialize in building fast, responsive, and SEO-friendly websites tailored to your brand. From simple landing pages to complex web platforms, our team ensures top-notch user experience, performance, and security using the latest technologies and industry best practices to help your business thrive online.",
        detail: [
            {
                title: "Responsive design",
                description: "Our responsive design service is designed to exceed expectations."
            },
            {
                title: "SEO optimized",
                description: "Our seo optimized service is designed to exceed expectations."
            },
            {
                title: "Fast performance",
                description: "Our fast performance service is designed to exceed expectations."
            },
            {
                title: "Custom functionality",
                description: "Our custom functionality service is designed to exceed expectations."
            },
            {
                title: "Secure architecture",
                description: "Our secure architecture service is designed to exceed expectations."
            }
        ]
    },

    {
        id: 2,
        image: app,
        title: 'App Development',
        desc_short: 'High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.',
        desc_long: 'We develop high-performance mobile applications for Android and iOS using native and cross-platform frameworks. Our team focuses on creating intuitive interfaces and seamless functionality, ensuring your app delivers excellent user engagement and business value. From concept to deployment, we handle the entire development lifecycle efficiently.',
        detail: [
            {
                title: 'Cross-platform support',
                description: 'Our cross-platform support service is designed to exceed expectations.',
            },
            {
                title: 'Smooth UX/UI',
                description: 'Our smooth ux/ui service is designed to exceed expectations.',
            },
            {
                title: 'Secure coding',
                description: 'Our secure coding service is designed to exceed expectations.',
            },
            {
                title: 'Push notifications',
                description: 'Our push notifications service is designed to exceed expectations.',
            },
            {
                title: 'App store deployment',
                description: 'Our app store deployment service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 3,
        image: devopsclouds,
        title: 'DevOps & Cloud',
        desc_short: 'Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.',
        desc_long: 'We streamline your development and deployment processes using DevOps best practices and cloud infrastructure such as AWS, Azure, and GCP. From CI/CD pipelines to containerization and monitoring, we help your business scale securely, efficiently, and reliably while reducing operational risks and downtime.',
        detail: [
            {
                title: 'CI/CD pipelines',
                description: 'Our ci/cd pipelines service is designed to exceed expectations.',
            },
            {
                title: 'Cloud architecture',
                description: 'Our cloud architecture service is designed to exceed expectations.',
            },
            {
                title: 'Server automation',
                description: 'Our server automation service is designed to exceed expectations.',
            },
            {
                title: 'Monitoring & alerts',
                description: 'Our monitoring & alerts service is designed to exceed expectations.',
            },
            {
                title: 'Infrastructure as code',
                description: 'Our infrastructure as code service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 4,
        image: machinelearning,
        title: 'Machine Learning',
        desc_short: 'Leverage AI and machine learning to automate processes, analyze data, and improve decision-making.',
        desc_long: 'We design and implement machine learning models that empower your business with data-driven insights and automation. From predictive analytics to image recognition and NLP, our solutions are tailored to solve real-world problems using the latest AI technologies and frameworks for better efficiency and performance.',
        detail: [
            {
                title: 'Data preprocessing',
                description: 'Our data preprocessing service is designed to exceed expectations.',
            },
            {
                title: 'Model training',
                description: 'Our model training service is designed to exceed expectations.',
            },
            {
                title: 'Custom ML solutions',
                description: 'Our custom ml solutions service is designed to exceed expectations.',
            },
            {
                title: 'Real-time analytics',
                description: 'Our real-time analytics service is designed to exceed expectations.',
            },
            {
                title: 'AI integration',
                description: 'Our ai integration service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 5,
        image: blockchain,
        title: 'Blockchain',
        desc_short: 'Secure and transparent blockchain solutions for smart contracts, decentralized apps, and more.',
        desc_long: 'We offer blockchain development services to build secure, decentralized applications and smart contracts. Whether you need a custom blockchain solution, NFT platform, or crypto wallet, our team delivers scalable, transparent, and tamper-proof systems using Ethereum, Solana, and other top blockchain technologies.',
        detail: [
            {
                title: 'Smart contracts',
                description: 'Our smart contracts service is designed to exceed expectations.',
            },
            {
                title: 'App development',
                description: 'Our app development service is designed to exceed expectations.',
            },
            {
                title: 'NFT integration',
                description: 'Our nft integration service is designed to exceed expectations.',
            },
            {
                title: 'Wallet setup',
                description: 'Our wallet setup service is designed to exceed expectations.',
            },
            {
                title: 'Blockchain consulting',
                description: 'Our blockchain consulting service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 6,
        image: websitehosting,
        title: 'Website Hosting',
        desc_short: 'Reliable and secure web hosting services with high uptime and technical support to keep your site running smoothly.',
        desc_long: 'We provide dependable web hosting solutions with fast servers, regular backups, SSL security, and expert support. Whether shared, VPS, or cloud hosting, we ensure your website stays online and performs at its best.',
        detail: [
            {
                title: 'High uptime',
                description: 'Our high uptime service is designed to exceed expectations.',
            },
            {
                title: 'SSL certificates',
                description: 'Our ssl certificates service is designed to exceed expectations.',
            },
            {
                title: 'Fast servers',
                description: 'Our fast servers service is designed to exceed expectations.',
            },
            {
                title: '24/7 support',
                description: 'Our 24/7 support service is designed to exceed expectations.',
            },
            {
                title: 'Backup & recovery',
                description: 'Our backup & recovery service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 7,
        image: wordpressdevelopment,
        title: 'WordPress Development',
        desc_short: 'Custom WordPress websites with modern themes, powerful plugins, and SEO optimization.',
        desc_long: 'Our WordPress development services include building custom themes, integrating powerful plugins, and optimizing performance for speed and SEO. Whether its a blog, portfolio, or e-commerce site, we ensure your website is easy to manage, mobile-friendly, and built for success.',
        detail: [
            {
                title: 'Custom themes',
                description: 'Our custom themes service is designed to exceed expectations.',
            },
            {
                title: 'Plugin integration',
                description: 'Our plugin integration service is designed to exceed expectations.',
            },
            {
                title: 'E-commerce setup',
                description: 'Our e-commerce setup service is designed to exceed expectations.',
            },
            {
                title: 'SEO tools',
                description: 'Our seo tools service is designed to exceed expectations.',
            },
            {
                title: 'Performance optimization',
                description: 'Our performance optimization service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 8,
        image: seo,
        title: 'SEO Optimization',
        desc_short: 'Improve your website’s ranking and visibility with proven SEO techniques and strategies.',
        desc_long: 'We help your website rank higher on search engines by implementing technical SEO, keyword research, content optimization, and link-building strategies. Our goal is to increase your organic traffic, improve your online presence, and help your business get discovered by the right audience.',
        detail: [
            {
                title: 'Keyword research',
                description: 'Our keyword research service is designed to exceed expectations.',
            },
            {
                title: 'On-page SEO',
                description: 'Our on-page seo service is designed to exceed expectations.',
            },
            {
                title: 'Backlink building',
                description: 'Our backlink building service is designed to exceed expectations.',
            },
            {
                title: 'Technical SEO',
                description: 'Our technical seo service is designed to exceed expectations.',
            },
            {
                title: 'Analytics reporting',
                description: 'Our analytics reporting service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 9,
        image: uiux,
        title: 'UI/UX',
        desc_short: 'Design interfaces that are beautiful, user-friendly, and focused on conversion and engagement.',
        desc_long: 'We create visually appealing and intuitive UI/UX designs that enhance user satisfaction and engagement. Our process includes user research, wireframing, prototyping, and testing to ensure your digital product provides a seamless and enjoyable user experience across all devices.',
        detail: [
            {
                title: 'User research',
                description: 'Our user research service is designed to exceed expectations.',
            },
            {
                title: 'Wireframing',
                description: 'Our wireframing service is designed to exceed expectations.',
            },
            {
                title: 'Prototyping',
                description: 'Our prototyping service is designed to exceed expectations.',
            },
            {
                title: 'Responsive design',
                description: 'Our responsive design service is designed to exceed expectations.',
            },
            {
                title: 'User testing',
                description: 'Our user testing service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 10,
        image: graphic,
        title: 'Graphic Designing',
        desc_short: 'Eye-catching graphics that represent your brand identity and convey your message effectively.',
        desc_long: 'Our graphic design services include logos, banners, social media creatives, brochures, and more. We combine creativity with strategy to deliver visually striking designs that align with your brand and captivate your audience across digital and print platforms.',
        detail: [
            {
                title: 'Logo design',
                description: 'Our logo design service is designed to exceed expectations.',
            },
            {
                title: 'Brand identity',
                description: 'Our brand identity service is designed to exceed expectations.',
            },
            {
                title: 'Marketing materials',
                description: 'Our marketing materials service is designed to exceed expectations.',
            },
            {
                title: 'Social media graphics',
                description: 'Our social media graphics service is designed to exceed expectations.',
            },
            {
                title: 'Print-ready designs',
                description: 'Our print-ready designs service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 11,
        image: videoeditings,
        title: 'Video Editing',
        desc_short: 'Professional video editing for marketing, branding, tutorials, and more.',
        desc_long: 'We offer high-quality video editing services tailored to your business or personal brand. Whether you need promotional content, tutorials, or cinematic effects, we ensure smooth transitions, clear audio, engaging visuals, and fast turnaround times to elevate your video presence.',
        detail: [
            {
                title: 'HD/4K editing',
                description: 'Our hd/4k editing service is designed to exceed expectations.',
            },
            {
                title: 'Transitions & effects',
                description: 'Our transitions & effects service is designed to exceed expectations.',
            },
            {
                title: 'Color correction',
                description: 'Our color correction service is designed to exceed expectations.',
            },
            {
                title: 'Audio enhancement',
                description: 'Our audio enhancement service is designed to exceed expectations.',
            },
            {
                title: 'Custom intros/outros',
                description: 'Our custom intros/outros service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 12,
        image: codecalling,
        title: 'Code Calling',
        desc_short: 'Real-time expert coding assistance and live debugging for quick issue resolution.',
        desc_long: 'Our code calling service connects you with experienced developers for one-on-one live coding sessions. Whether its debugging, reviewing, or implementing features, we help you solve coding problems in real time and improve your development workflow efficiently.',
        detail: [
            {
                title: 'Live debugging',
                description: 'Our live debugging service is designed to exceed expectations.',
            },
            {
                title: 'Code walkthroughs',
                description: 'Our code walkthroughs service is designed to exceed expectations.',
            },
            {
                title: 'Problem solving',
                description: 'Our problem solving service is designed to exceed expectations.',
            },
            {
                title: 'Real-time chat',
                description: 'Our real-time chat service is designed to exceed expectations.',
            },
            {
                title: 'Screen sharing',
                description: 'Our screen sharing service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 13,
        image: digital,
        title: 'Digital Marketing',
        desc_short: 'Boost your online presence through targeted campaigns and multichannel marketing strategies.',
        desc_long: 'We offer comprehensive digital marketing services including social media, email marketing, PPC, and content marketing. Our strategies are tailored to drive traffic, generate leads, and increase conversions, helping your brand grow across all online platforms effectively and measurably.',
        detail: [
            {
                title: 'Social media ads',
                description: 'Our social media ads service is designed to exceed expectations.',
            },
            {
                title: 'Email campaigns',
                description: 'Our email campaigns service is designed to exceed expectations.',
            },
            {
                title: 'Content strategy',
                description: 'Our content strategy service is designed to exceed expectations.',
            },
            {
                title: 'PPC advertising',
                description: 'Our ppc advertising service is designed to exceed expectations.',
            },
            {
                title: 'Conversion tracking',
                description: 'Our conversion tracking service is designed to exceed expectations.',
            },
        ]
    },

    {
        id: 14,
        image: leadgeneration,
        title: 'Lead Generation',
        desc_short: 'Generate high-quality leads with targeted campaigns and data-driven marketing strategies.',
        desc_long: 'We help businesses grow by generating qualified leads through email marketing, landing pages, CRM integration, and ad campaigns. Our methods ensure your sales funnel stays full, targeting the right audience and converting them into long-term customers efficiently.',
        detail: [
            {
                title: 'Targeted campaigns',
                description: 'Our targeted campaigns service is designed to exceed expectations.',
            },
            {
                title: 'Email funnels',
                description: 'Our email funnels service is designed to exceed expectations.',
            },
            {
                title: 'CRM integration',
                description: 'Our crm integration service is designed to exceed expectations.',
            },
            {
                title: 'Landing page design',
                description: 'Our landing page design service is designed to exceed expectations.',
            },
            {
                title: 'Analytics tracking',
                description: 'Our analytics tracking service is designed to exceed expectations.',
            },
        ]
    },

]

export default services;