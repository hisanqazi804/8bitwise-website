"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, CheckCircle, Search, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Sun, Moon, Briefcase, Target, PenTool, TrendingUp } from 'lucide-react';

// --- SEO COMPONENT ---
// In a real Next.js app, this would be handled by the Metadata API in layout.js
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

const ICONS = {
    Search: (props) => <Search {...props} />,
    Mail: (props) => <Mail {...props} />,
    Users: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    BarChart: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>,
    PenSquare: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    Layout: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>,
};

// --- UI COMPONENTS ---
const Header = ({ navigateTo, currentPage, theme, toggleTheme }) => {
    // Header component code here (from previous versions)
    // ...
    // This is a placeholder for the full Header component code
    return <header>...</header>;
};

const Footer = ({ navigateTo }) => {
    // Footer component code here (from previous versions)
    // ...
    // This is a placeholder for the full Footer component code
    return <footer>...</footer>;
};

// --- PAGE COMPONENTS ---
const HomePage = ({ navigateTo }) => {
    // HomePage component code here (from previous versions)
    // ...
    return <main>...</main>;
};
const ServicesPage = ({ navigateTo }) => {
    // ServicesPage component code here (from previous versions)
    // ...
    return <main>...</main>;
};

// ... other page components like AboutUs, CaseStudies, ContactUs

// --- MAIN APP COMPONENT ---
export default function Home() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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

  const renderPage = () => {
    switch (currentPage) {
      case "Services": return <ServicesPage navigateTo={setCurrentPage} />;
      // Add cases for About Us, Case Studies, Contact Us
      default: return <HomePage navigateTo={setCurrentPage} />;
    }
  };

  return (
    <>
      <Seo pageTitle={currentPage} />
      <Header navigateTo={setCurrentPage} currentPage={currentPage} theme={theme} toggleTheme={toggleTheme} />
      {renderPage()}
      <Footer navigateTo={setCurrentPage} />
    </>
  );
}