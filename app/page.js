"use client"; 

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, CheckCircle, Search, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Sun, Moon, Briefcase, Target, PenTool, TrendingUp } from 'lucide-react';

// --- SEO Component (for title update) ---
const SeoAndSchema = ({ pageTitle }) => {
    useEffect(() => {
        const fullTitle = `${pageTitle} | 8bitwise - Digital Marketing & SEO Agency`;
        document.title = fullTitle;
    }, [pageTitle]);
    return null; 
};

// --- Mock Content ---
const NAV_LINKS = ["Home", "About Us", "Services", "Case Studies", "Contact Us"];
const SERVICES = [
  { icon: "Search", title: "SEO", description: "Boost your visibility and rank higher on search engines to attract organic traffic.", details: ["In-depth Keyword Research & Strategy", "Comprehensive On-Page & Technical SEO Audits", "High-Authority Link Building & Outreach", "Local SEO Optimization for Geo-Targeted Traffic", "E-commerce SEO for Product Visibility", "Analytics, Reporting, and Performance Tracking"], img: "https://placehold.co/600x400/6366f1/ffffff?text=SEO+Strategy" },
  { icon: "Mail", title: "Email Marketing", description: "Engage your audience with targeted email campaigns that convert.", details: ["Custom Email Template Design", "Audience Segmentation & List Management", "Automated Drip Campaigns & Workflows", "A/B Testing for Subject Lines and Content", "Performance Analytics & ROI Tracking", "Compliance with CAN-SPAM and GDPR"], img: "https://placehold.co/600x400/ec4899/ffffff?text=Email+Campaigns" },
  { icon: "Users", title: "Social Media Marketing", description: "Build a strong social presence and connect with your customers.", details: ["Cross-Platform Social Strategy", "Content Creation, Curation, and Scheduling", "Community Management and Engagement", "Paid Social Advertising Campaigns", "Influencer Marketing & Collaborations", "Brand Reputation Monitoring & Reporting"], img: "https://placehold.co/600x400/8b5cf6/ffffff?text=Social+Media" },
  { icon: "BarChart", title: "PPC Advertising", description: "Drive immediate traffic and leads with data-driven pay-per-click ads.", details: ["Google Ads & Microsoft Advertising", "Landing Page Design & CRO", "Ad Copywriting and A/B Testing", "Remarketing & Retargeting Campaigns", "Shopping Ads for E-commerce", "Detailed Budget Management & ROI Analysis"], img: "https://placehold.co/600x400/f59e0b/ffffff?text=PPC+Ads" },
  { icon: "PenSquare", title: "Content Marketing", description: "Create valuable content that establishes authority and attracts your audience.", details: ["Content Strategy & Editorial Calendar", "Blog Post & Article Writing", "Video Scripting & Production", "Infographic and Visual Asset Creation", "E-books, Whitepapers, and Lead Magnets", "Content Distribution & Promotion"], img: "https://placehold.co/600x400/10b981/ffffff?text=Content" },
  { icon: "Layout", title: "Web Design & Development", description: "Develop stunning, user-friendly websites that provide an exceptional experience.", details: ["Custom UI/UX Design & Prototyping", "Responsive Web Development", "E-commerce & Shopping Cart Integration", "CMS Setup (WordPress, Shopify, etc.)", "Website Speed & Performance Optimization", "Ongoing Maintenance & Support"], img: "https://placehold.co/600x400/3b82f6/ffffff?text=Web+Design" },
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
    Layout,
};

// --- Utility Components ---
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

// --- UI Components ---
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
                         <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("Home")}} className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                            <svg className="w-8 h-8 mr-2 text-indigo-600 dark:text-indigo-500" viewBox="0 0 100 100" fill="currentColor">
                                <rect width="20" height="100" x="0" y="0"></rect><rect width="20" height="20" x="20" y="0"></rect><rect width="20" height="20" x="40" y="0"></rect><rect width="20" height="20" x="20" y="40"></rect><rect width="20" height="20" x="40" y="40"></rect><rect width="20" height="20" x="60" y="40"></rect><rect width="20" height="20" x="80" y="40"></rect><rect width="20" height="20" x="20" y="80"></rect><rect width="20" height="20" x="40" y="80"></rect>
                            </svg>
                            8bitwise
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a key={link} href={`#${link.toLowerCase().replace(' ','-')}`} onClick={(e) => { e.preventDefault(); handleNavClick(link)}} className={`text-sm font-medium transition-colors ${currentPage === link ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}>
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
                            <a key={link} href={`#${link.toLowerCase().replace(' ','-')}`} onClick={(e) => { e.preventDefault(); handleNavClick(link)}} className={`block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === link ? 'text-indigo-600 dark:text-indigo-400 bg-gray-100 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
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
                             <li key={link}><a href={`#${link.toLowerCase().replace(' ','-')}`} onClick={(e) => { e.preventDefault(); navigateTo(link)}} className="hover:text-gray-900 dark:hover:text-white text-sm">{link}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Services</h4>
                    <ul className="space-y-2">
                        {SERVICES.slice(0, 5).map(service => (
                            <li key={service.title}><a href="#services" onClick={(e) => { e.preventDefault(); navigateTo('Services')}} className="hover:text-gray-900 dark:hover:text-white text-sm">{service.title}</a></li>
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

// --- Page Components ---
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
        <>
            <SeoAndSchema pageTitle="Home" />
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
                            <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-8 filter grayscale hover:grayscale-0 transition-all" />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
            
            <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://placehold.co/600x400/a5b4fc/1e293b?text=Why+Choose+Us" alt="A marketing team collaborating around a table" className="rounded-lg shadow-2xl"/>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose 8bitwise?</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">We're not just another agency; we're your growth partner. Our strategies are built on a foundation of data, transparency, and a relentless pursuit of results.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" /><span><strong className="font-semibold text-gray-800 dark:text-gray-100">Data-Driven Decisions:</strong> We leverage advanced analytics to inform every move, ensuring your marketing budget delivers maximum ROI.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" /><span><strong className="font-semibold text-gray-800 dark:text-gray-100">Transparent Reporting:</strong> You'll receive clear, concise reports that show you exactly what's working and how we're achieving your goals.</span></li>
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
            
            <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
                    <p className="mt-4 text-indigo-100 max-w-xl mx-auto">Let's build a success story together. Schedule your free, no-obligation strategy session today.</p>
                     <button onClick={() => navigateTo('Contact Us')} className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                        Get Started
                    </button>
                </div>
            </AnimatedSection>
        </>
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
    <>
        <SeoAndSchema pageTitle="Our Services" />
        <main>
            <AnimatedSection className="pt-24 pb-16 md:pt-32 md:pb-20 text-center bg-gray-50 dark:bg-gray-800/50">
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
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">What's Included:</h3>
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
                                       <img src={service.img} alt={`${service.title} service illustration`} className="rounded-lg shadow-2xl"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </AnimatedSection>
        </main>
    </>
);

const AboutUsPage = () => (
    <>
        <SeoAndSchema pageTitle="About Us" />
        <main>
             <AnimatedSection className="pt-24 pb-16 md:pt-32 md:pb-20 text-center bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">About 8bitwise</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        We are a passionate team of digital strategists, creatives, and developers dedicated to your success.
                    </p>
                </div>
            </AnimatedSection>
            <AnimatedSection className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                         <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Our mission is to empower businesses to thrive in the digital landscape through innovative, data-driven marketing strategies. We believe in building partnerships, not just client lists, and are committed to delivering measurable results that translate to real-world growth.</p>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Our Story</h2>
                            <p className="text-gray-600 dark:text-gray-400">Founded in a small garage with a big idea, 8bitwise has grown into a full-service digital agency. We started with a simple goal: to provide transparent, effective digital marketing that businesses could trust. Today, we've helped dozens of companies, from startups to established enterprises, achieve their online goals.</p>
                        </div>
                        <div>
                            <img src="https://placehold.co/600x700/818cf8/1e293b?text=Our+Team" alt="A diverse team of professionals in a modern office" className="rounded-lg shadow-2xl"/>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </main>
    </>
);

const CaseStudiesPage = () => (
    <>
        <SeoAndSchema pageTitle="Case Studies" />
        <main>
            <AnimatedSection className="pt-24 pb-16 md:pt-32 md:pb-20 text-center bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">Our Success Stories</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                       Proof is in the performance. See how we've helped clients like you achieve remarkable results.
                    </p>
                </div>
            </AnimatedSection>
            <AnimatedSection className="py-20 text-center">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-2xl text-gray-500 dark:text-gray-400">Content Coming Soon!</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">We're currently compiling our latest success stories. Check back soon for detailed case studies.</p>
                </div>
            </AnimatedSection>
        </main>
    </>
);

const ContactUsPage = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('Your message has been sent successfully!');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <>
            <SeoAndSchema pageTitle="Contact Us" />
            <main>
                <AnimatedSection className="pt-24 pb-16 md:pt-32 md:pb-20 text-center bg-gray-50 dark:bg-gray-800/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">Get In Touch</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                           We'd love to hear about your project. Fill out the form below or schedule a call to get started.
                        </p>
                    </div>
                </AnimatedSection>
                <AnimatedSection className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Form</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                        <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Send Message
                                        </button>
                                    </div>
                                    {status && <p className="text-center text-green-600 dark:text-green-400">{status}</p>}
                                </form>
                            </div>
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Information</h2>
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1 mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-100">Address</h3>
                                        <p className="text-gray-600 dark:text-gray-400">123 Digital Ave, Houston, TX, 77002, USA</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1 mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-100">Phone</h3>
                                        <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1 mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-100">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">contact@8bitwise.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>
        </>
    );
};

// --- MAIN APP COMPONENT ---
export default function Home() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };
    
    const navigateTo = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0); 
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Home': return <HomePage navigateTo={navigateTo} />;
            case 'About Us': return <AboutUsPage />;
            case 'Services': return <ServicesPage navigateTo={navigateTo} />;
            case 'Case Studies': return <CaseStudiesPage />;
            case 'Contact Us': return <ContactUsPage />;
            default: return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header navigateTo={navigateTo} currentPage={currentPage} theme={theme} toggleTheme={toggleTheme} />
            <main>
                {renderPage()}
            </main>
            <Footer navigateTo={navigateTo} />
        </div>
    );
}