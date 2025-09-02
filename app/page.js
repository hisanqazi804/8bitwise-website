"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X, CheckCircle, Search, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Sun, Moon, Briefcase, Target, PenTool, TrendingUp } from 'lucide-react';

// --- SEO COMPONENT ---
const Seo = ({ pageTitle }) => {
    useEffect(() => {
        document.title = `${pageTitle} | 8bitwise - Digital Marketing & SEO Agency`;
    }, [pageTitle]);
    return null;
};

// --- CONTENT & ICONS ---
const NAV_LINKS = ["Home", "About Us", "Services", "Case Studies", "Contact Us"];

const SERVICES = [
  { icon: "Search", title: "SEO", description: "Boost your visibility and rank higher on search engines to attract organic traffic.", details: ["In-depth Keyword Research & Strategy", "Comprehensive On-Page & Technical SEO Audits", "High-Authority Link Building & Outreach", "Local SEO Optimization for Geo-Targeted Traffic", "E-commerce SEO for Product Visibility", "Analytics, Reporting, and Performance Tracking"], img: "https://placehold.co/600x400/6366f1/ffffff?text=SEO+Strategy" },
  { icon: "Mail", title: "Email Marketing", description: "Engage your audience with targeted email campaigns that convert.", details: ["Custom Email Template Design", "Audience Segmentation & List Management", "Automated Drip Campaigns & Workflows", "A/B Testing for Subject Lines and Content", "Performance Analytics & ROI Tracking", "Compliance with CAN-SPAM and GDPR"], img: "https://placehold.co/600x400/ec4899/ffffff?text=Email+Campaigns" },
  { icon: "Users", title: "Social Media Marketing", description: "Build a strong social presence and connect with your customers.", details: ["Cross-Platform Social Strategy", "Content Creation, Curation, and Scheduling", "Community Management and Engagement", "Paid Social Advertising Campaigns", "Influencer Marketing & Collaborations", "Brand Reputation Monitoring & Reporting"], img: "https://placehold.co/600x400/8b5cf6/ffffff?text=Social+Media" },
  { icon: "BarChart", title: "PPC Advertising", description: "Drive immediate traffic and leads with data-driven pay-per-click ads.", details: ["Google Ads & Microsoft Ads Management", "Landing Page Design & Conversion Rate Optimization (CRO)", "Ad Copywriting and A/B Testing", "Remarketing & Retargeting Campaigns", "Shopping Ads for E-commerce", "Detailed Budget Management & ROI Analysis"], img: "https://placehold.co/600x400/f59e0b/ffffff?text=PPC+Ads" },
  { icon: "PenSquare", title: "Content Marketing", description: "Create valuable content that establishes authority and attracts your audience.", details: ["Content Strategy & Editorial Calendar Planning", "Blog Post & Article Writing", "Video Scripting & Production Oversight", "Infographic and Visual Asset Creation", "E-books, Whitepapers, and Lead Magnets", "Content Distribution & Promotion"], img: "https://placehold.co/600x400/10b981/ffffff?text=Content" },
  { icon: "Layout", title: "Web Design & Development", description: "Develop stunning, user-friendly websites that provide an exceptional experience.", details: ["Custom UI/UX Design & Prototyping", "Responsive Web Development (Mobile-First)", "E-commerce & Shopping Cart Integration", "CMS Setup (WordPress, Shopify, etc.)", "Website Speed & Performance Optimization", "Ongoing Website Maintenance & Support"], img: "https://placehold.co/600x400/3b82f6/ffffff?text=Web+Design" },
];

const TESTIMONIALS = [
    { quote: "8bitwise's SEO strategy doubled our organic traffic in just six months. We're now ranking for keywords we never thought possible. Their team is knowledgeable, responsive, and truly a partner in our growth.", name: "John Doe", title: "CEO, Tech Innovators" },
    { quote: "The new website they designed is not only beautiful but also incredibly fast. Our conversion rates have increased by 40% since the launch. I couldn't be happier with the results.", name: "Jane Smith", title: "Marketing Director, Luxe Apparel" },
    { quote: "Working with 8bitwise has been a game-changer for our marketing efforts. Their comprehensive approach and detailed reporting give us full confidence that our budget is being used effectively.", name: "Samuel Green", title: "Founder, Eco Goods" },
];

const FAQS = [
  { q: "What types of industries do you specialize in?", a: "We have experience across a wide range of industries, including SaaS, e-commerce, healthcare, and local businesses. Our strategies are customized to fit the unique needs and challenges of each industry." },
  { q: "How long does it take to see results from SEO?", a: "SEO is a long-term strategy. While some improvements can be seen within the first 3 months, significant results, such as ranking on the first page for competitive keywords, typically take 6-12 months." },
  { q: "What is your pricing model?", a: "Our pricing is based on the specific services you require and the scope of your project. We offer customized packages and monthly retainers. Please schedule a call with us to get a detailed quote." },
  { q: "Do you offer one-time projects or only monthly retainers?", a: "We offer both. While our comprehensive strategies are best delivered through a retainer model, we also take on one-time projects like website design, SEO audits, or content creation campaigns." },
];

const ICONS = {
    Search, Mail, Users: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    BarChart: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>,
    PenSquare: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    Layout: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>,
};

const useScrollAnimation = () => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.1 }
        );
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    return ref;
};

const AnimatedSection = ({ children, className = '' }) => {
    const ref = useScrollAnimation();
    return <section ref={ref} className={`opacity-0 ${className}`}>{children}</section>;
};

const Header = ({ navigateTo, currentPage, theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNavClick = (page) => {
        navigateTo(page);
        setIsMenuOpen(false);
    }
    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                         <a href="#" onClick={() => handleNavClick("Home")} className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                            <svg className="w-8 h-8 mr-2 text-indigo-600 dark:text-indigo-500" viewBox="0 0 100 100" fill="currentColor">
                                <rect width="20" height="100" x="0" y="0"></rect><rect width="20" height="20" x="20" y="0"></rect><rect width="20" height="20" x="40" y="0"></rect><rect width="20" height="20" x="20" y="40"></rect><rect width="20" height="20" x="40" y="40"></rect><rect width="20" height="20" x="60" y="40"></rect><rect width="20" height="20" x="80" y="40"></rect><rect width="20" height="20" x="20" y="80"></rect><rect width="20" height="20" x="40" y="80"></rect>
                            </svg>
                            8bitwise
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a key={link} href="#" onClick={() => handleNavClick(link)} className={`text-sm font-medium transition-colors ${currentPage === link ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}>
                                {link}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <div className="hidden md:block">
                            <button onClick={() => handleNavClick('Contact Us')} className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 dark:text-white">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {NAV_LINKS.map((link) => (
                            <a key={link} href="#" onClick={() => handleNavClick(link)} className={`block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === link ? 'text-indigo-600 dark:text-indigo-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                                {link}
                            </a>
                        ))}
                         <button onClick={() => handleNavClick('Contact Us')} className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors">
                            Schedule a Call
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer = ({ navigateTo }) => (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                         <svg className="w-8 h-8 mr-2 text-indigo-600 dark:text-indigo-500" viewBox="0 0 100 100" fill="currentColor">
                            <rect width="20" height="100" x="0" y="0"></rect><rect width="20" height="20" x="20" y="0"></rect><rect width="20" height="20" x="40" y="0"></rect><rect width="20" height="20" x="20" y="40"></rect><rect width="20" height="20" x="40" y="40"></rect><rect width="20" height="20" x="60" y="40"></rect><rect width="20" height="20" x="80" y="40"></rect><rect width="20" height="20" x="20" y="80"></rect><rect width="20" height="20" x="40" y="80"></rect>
                        </svg>
                        8bitwise
                    </h3>
                    <p className="text-sm">A results-driven digital marketing agency committed to helping your business grow.</p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><Twitter size={20} /></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Quick Links</h4>
                    <ul className="space-y-2">
                        {NAV_LINKS.map(link => (
                             <li key={link}><a href="#" onClick={() => navigateTo(link)} className="hover:text-gray-900 dark:hover:text-white text-sm">{link}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Services</h4>
                    <ul className="space-y-2">
                        {SERVICES.slice(0, 5).map(service => (
                            <li key={service.title}><a href="#" onClick={() => navigateTo('Services')} className="hover:text-gray-900 dark:hover:text-white text-sm">{service.title}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center"><MapPin size={16} className="mr-3 text-indigo-500" />123 Digital Ave, Houston, TX</li>
                        <li className="flex items-center"><Phone size={16} className="mr-3 text-indigo-500" />+1 (555) 123-4567</li>
                        <li className="flex items-center"><Mail size={16} className="mr-3 text-indigo-500" />contact@8bitwise.com</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} 8bitwise. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

const HomePage = ({ navigateTo }) => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const processSteps = [
        { icon: Briefcase, title: "Discover", description: "We start with a deep dive into your brand, audience, and goals." },
        { icon: Target, title: "Strategize", description: "We craft a data-driven strategy tailored to your unique needs." },
        { icon: PenTool, title: "Execute", description: "Our team implements the strategy with precision and creativity." },
        { icon: TrendingUp, title: "Measure", description: "We track performance, report on results, and optimize for growth." },
    ];
    
    const clientLogos = [
        { src: "https://placehold.co/150x50/e2e8f0/64748b?text=TechCorp", alt: "TechCorp Logo" },
        { src: "https://placehold.co/150x50/e2e8f0/64748b?text=InnovateCo", alt: "InnovateCo Logo" },
        { src: "https://placehold.co/150x50/e2e8f0/64748b?text=Quantum", alt: "Quantum Inc Logo" },
        { src: "https://placehold.co/150x50/e2e8f0/64748b?text=Apex", alt: "Apex Solutions Logo" },
        { src: "https://placehold.co/150x50/e2e8f0/64748b?text=Synergy", alt: "Synergy Group Logo" },
    ];

    return (
        <main>
            <Seo pageTitle="Home" />
            <AnimatedSection className="pt-24 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight text-gray-900 dark:text-white">
                        Results-Driven <span className="text-indigo-600 dark:text-indigo-400">Digital Marketing</span> Agency
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        We help businesses scale and drive revenue through data-driven SEO, PPC, and web design strategies.
                    </p>
                    <button onClick={() => navigateTo('Contact Us')} className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">
                        Schedule a Free Consultation
                    </button>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400">TRUSTED BY INDUSTRY LEADERS</p>
                    <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        {clientLogos.map(logo => (
                           <Image key={logo.alt} src={logo.src} alt={logo.alt} width={150} height={50} className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all" />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">A Proven Process for Success</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Our four-step methodology ensures your marketing initiatives are strategic, efficient, and impactful.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                             <div key={step.title} className="text-center p-6">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-gray-800 mx-auto mb-4">
                                    <step.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{index + 1}. {step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Core Services</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Everything you need to dominate the digital landscape, all under one roof.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.slice(0, 3).map((service) => {
                            const Icon = ICONS[service.icon];
                            return (
                                <div key={service.title} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <Icon className="h-10 w-10 text-indigo-500 dark:text-indigo-400 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-12">
                        <button onClick={() => navigateTo('Services')} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                           View All Services &rarr;
                        </button>
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <Image src="https://placehold.co/600x450/3730a3/ffffff?text=Why+Us?" alt="A marketing team collaborating" width={600} height={450} className="rounded-lg shadow-2xl"/>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose 8bitwise?</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">We are not just another agency; we are your growth partner. Our strategies are built on a foundation of data, transparency, and a relentless pursuit of results.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" /><span><strong className="font-semibold text-gray-800 dark:text-gray-100">Data-Driven Decisions:</strong> We leverage advanced analytics to inform every move, ensuring your marketing budget delivers maximum ROI.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" /><span><strong className="font-semibold text-gray-800 dark:text-gray-100">Transparent Reporting:</strong> You will receive clear, concise reports that show you exactly what is working and how we are achieving your goals.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" /><span><strong className="font-semibold text-gray-800 dark:text-gray-100">Expert Team:</strong> Our team consists of certified professionals who are passionate about digital marketing and dedicated to your success.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
                     <div className="mt-10 relative h-48">
                         {TESTIMONIALS.map((t, index) => (
                             <div key={t.name} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === testimonialIndex ? 'opacity-100' : 'opacity-0'}`}>
                                 <p className="text-xl italic text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">"{t.quote}"</p>
                                 <p className="mt-6 font-semibold text-indigo-600 dark:text-indigo-400">{t.name}, <span className="text-gray-800 dark:text-white font-normal">{t.title}</span></p>
                            </div>
                         ))}
                     </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                                <FAQItem q={faq.q} a={faq.a} />
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-indigo-600 dark:bg-indigo-500 rounded-lg shadow-lg py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Grow Your Business?</h2>
                    <p className="mt-4 text-indigo-100 max-w-xl mx-auto">Let us build a success story together. Schedule your free, no-obligation strategy session today.</p>
                     <button onClick={() => navigateTo('Contact Us')} className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                        Get Started
                    </button>
                </div>
            </AnimatedSection>
        </main>
    );
};

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center py-5 text-left text-lg font-medium text-gray-800 dark:text-gray-100"
                    aria-expanded={isOpen}
                >
                    <span>{q}</span>
                    <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h3>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 text-gray-600 dark:text-gray-400">
                   <p>{a}</p>
                </div>
            </div>
        </>
    );
};

const ServicesPage = ({ navigateTo }) => (
    <main>
        <Seo pageTitle="Our Services" />
            <AnimatedSection className="pt-24 pb-16 md:pt-32 md:pb-20 text-center bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">Our Services</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        A complete suite of digital marketing solutions designed to elevate your brand and drive measurable growth.
                    </p>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {SERVICES.map((service, index) => {
                            const Icon = ICONS[service.icon];
                            return (
                                <div key={service.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                                    <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                                        <div className="inline-block p-3 bg-indigo-100 dark:bg-gray-800 rounded-lg mb-4">
                                            <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h2>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">What is Included:</h3>
                                        <ul className="space-y-2">
                                            {service.details.map(detail => (
                                                <li key={detail} className="flex items-center">
                                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                                    <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`flex items-center justify-center p-8 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                                       <Image src={service.img} alt={`${service.title} service illustration`} width={600} height={400} className="rounded-lg shadow-2xl"/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AnimatedSection>
    </main>
);

const AboutUsPage = () => <div className="h-96 flex items-center justify-center container mx-auto"><h1 className="text-3xl">About Us Page</h1></div>;
const CaseStudiesPage = () => <div className="h-96 flex items-center justify-center container mx-auto"><h1 className="text-3xl">Case Studies Page</h1></div>;
const ContactUsPage = () => <div className="h-96 flex items-center justify-center container mx-auto"><h1 className="text-3xl">Contact Us Page</h1></div>;

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Services": return <ServicesPage navigateTo={setCurrentPage} />;
      case "About Us": return <AboutUsPage />;
      case "Case Studies": return <CaseStudiesPage />;
      case "Contact Us": return <ContactUsPage />;
      default: return <HomePage navigateTo={setCurrentPage} />;
    }
  };

  return (
    <>
      <Header navigateTo={setCurrentPage} currentPage={currentPage} theme={theme} toggleTheme={toggleTheme} />
      {renderPage()}
      <Footer navigateTo={setCurrentPage} />
    </>
  );
}