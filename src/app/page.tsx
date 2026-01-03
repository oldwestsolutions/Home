'use client';

import Link from 'next/link';
import Header from './components/Header';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quote form submission here
    console.log('Quote request submitted:', quoteData);
    setIsQuoteModalOpen(false);
    setQuoteData({ name: '', email: '', phone: '', serviceType: '', projectDetails: '' });
    alert('Thank you for your quote request! Our team will review your information and contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuoteData({
      ...quoteData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section - Two Column */}
      <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-[#1a1a1a] relative overflow-hidden pt-32">
        {/* Dark dark gray background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f0f0f]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                <span className="text-black" style={{
                  WebkitTextStroke: '2px white',
                  textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white'
                } as React.CSSProperties}>
                  Home & Code
                </span>{' '}
                Professional Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
                Comprehensive solutions for your residential and repository needs. From interior home services and remodeling to repository management and version control—we deliver excellence across every service.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Verified Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/residential"
                className="inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Residential
              </Link>
              <Link
                href="/repository"
                className="inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Repository
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/global.jpg" 
                alt="Professional Services" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residential Contracting Services Section - Full Page */}
      <section id="roofing" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
                <h2 className="text-3xl font-bold text-orange-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Front-end & Back-end Services
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Comprehensive development services including front-end UI/UX, back-end APIs, database design, and security solutions with our verified developer network
              </p>
              
              {/* Code Image */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-orange-500/30 mb-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                    <img src="/скрипт.jpg" alt="Code Excellence" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-orange-400 font-semibold text-lg mb-2">Code Excellence</p>
                  <p className="text-gray-400 text-sm text-center">Modern frameworks and best practices</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Expert Development</p>
                    <p className="text-gray-400 text-sm">Professional developers with verified credentials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Verified Developers</p>
                    <p className="text-gray-400 text-sm">Background checked and certified professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Code Reviews</p>
                    <p className="text-gray-400 text-sm">Rate your developers and share experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Front-end & Back-end Services
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your digital presence with our comprehensive development services. From expert front-end interfaces and user experience design to robust back-end APIs and database solutions—we deliver excellence across every aspect of your application.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/residential/roofing" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Front-end</p>
                <p className="text-gray-400 text-sm">UI/UX development</p>
              </Link>
              
              <Link href="/residential/hvac" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Back-end</p>
                <p className="text-gray-400 text-sm">API & server development</p>
              </Link>
              
              <Link href="/residential/appliances" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Database</p>
                <p className="text-gray-400 text-sm">Design & optimization</p>
              </Link>
              
              <Link href="/residential/plumbing" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Security</p>
                <p className="text-gray-400 text-sm">Authentication & encryption</p>
              </Link>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </button>
              <Link
                href="/contractinginformation"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling Section - Full Page */}
      <section id="solar" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Full-Stack Development Services
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your application with our expert full-stack development services. From responsive front-end interfaces to scalable back-end architectures, we bring your vision to life with quality code and attention to detail.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/remodeling/energy" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Performance</p>
                <p className="text-gray-400 text-sm">Optimized solutions</p>
              </Link>
              
              <Link href="/remodeling/monitoring" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Monitoring</p>
                <p className="text-gray-400 text-sm">Real-time analytics</p>
              </Link>
              
              <Link href="/remodeling/finishing" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Integration</p>
                <p className="text-gray-400 text-sm">API & third-party</p>
              </Link>
              
              <Link href="/remodeling/outdoor" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Deployment</p>
                <p className="text-gray-400 text-sm">Cloud & hosting</p>
              </Link>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </button>
              <Link
                href="/contractinginformation"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Full-Stack Excellence
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Professional full-stack development services with expert coding practices and modern technologies for your application transformation
              </p>
              
              {/* Code Image */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-yellow-500/30 mb-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                    <img src="/скрипт.jpg" alt="Expert Development" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-yellow-400 font-semibold text-lg mb-2">Expert Development</p>
                  <p className="text-gray-400 text-sm text-center">Professional full-stack development services</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Verified Developers</p>
                    <p className="text-gray-400 text-sm">Licensed full-stack professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Quality Guarantee</p>
                    <p className="text-gray-400 text-sm">Satisfaction assured</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Project Reviews</p>
                    <p className="text-gray-400 text-sm">Share your development experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Requests Section - Full Page */}
      <section id="pull-requests" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-blue-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Repository Services
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Comprehensive repository management including pull/merge requests, issues, and version control with our verified developer network
              </p>
              
              {/* Repository Image */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-blue-500/30 mb-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                    <img src="/скрипт.jpg" alt="Repository Management" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-blue-400 font-semibold text-lg mb-2">Repository Management</p>
                  <p className="text-gray-400 text-sm text-center">Pull/merge requests, issues, and version control</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Pull/Merge Requests</p>
                    <p className="text-gray-400 text-sm">Professional code review</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Issues Management</p>
                    <p className="text-gray-400 text-sm">Track and resolve issues</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Version Control</p>
                    <p className="text-gray-400 text-sm">Git workflow management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Repository Services
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Manage your codebase with our comprehensive repository services. From pull and merge requests to issue tracking and version control, we provide the tools and expertise to streamline your development workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/repository/pull-merge-requests" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Pull/Merge Requests</p>
                <p className="text-gray-400 text-sm">Code review & merging</p>
              </Link>
              
              <Link href="/repository/issues" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Issues</p>
                <p className="text-gray-400 text-sm">Track & manage issues</p>
              </Link>
              
              <Link href="/repository/version-control" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Version Control</p>
                <p className="text-gray-400 text-sm">Git workflow management</p>
              </Link>
              
              <Link href="/repository/secure" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Secure Repositories</p>
                <p className="text-gray-400 text-sm">Protected codebases</p>
              </Link>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </button>
              <Link
                href="/repositoryinformation"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section - Full Page */}
      <section id="network" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                OldWest.net Network
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Experience revolutionary network solutions through OldWest.net. From gaming and bandwidth sharing to Ethereum VM services and ad sharing capabilities, our distributed network infrastructure enables you to capitalize on your participation while playing sports, games, and engaging in real-life activities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Gaming Network</p>
                <p className="text-gray-400 text-sm">Low latency gaming</p>
              </Link>
              
              <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Bandwidth Sharing</p>
                <p className="text-gray-400 text-sm">Earn from sharing</p>
              </Link>
              
              <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Ethereum VM</p>
                <p className="text-gray-400 text-sm">Smart contracts</p>
              </Link>
              
              <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Ad Sharing</p>
                <p className="text-gray-400 text-sm">Monetize participation</p>
              </Link>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </button>
              <Link
                href="/networkinformation"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-purple-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                OldWest.net Network
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Revolutionary network solutions for gaming, bandwidth sharing, and Ethereum VM services with ad sharing capabilities through our distributed network infrastructure
              </p>
              
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-purple-500/30 mb-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                    <img src="/globe crystal.jpg" alt="Network Infrastructure" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-purple-400 font-semibold text-lg mb-2">Network Infrastructure</p>
                  <p className="text-gray-400 text-sm text-center">Gaming, bandwidth sharing, and Ethereum VM services</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Gaming Network</p>
                    <p className="text-gray-400 text-sm">Ultra-low latency gaming</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Bandwidth Sharing</p>
                    <p className="text-gray-400 text-sm">Monetize your bandwidth</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Ethereum VM Services</p>
                    <p className="text-gray-400 text-sm">Deploy smart contracts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Join thousands of satisfied customers who trust OldWestSolutions for their residential and repository needs.
              </p>
              <p className="text-base text-gray-400 mb-8">
                Our team of licensed professionals is ready to bring your vision to life. Get a free, no-obligation quote today and discover why we're the trusted choice for quality service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
                >
                  Get Your Free Quote
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              {/* Trust indicators */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">Licensed & Insured</p>
                    <p className="text-gray-400 text-sm">Fully certified and protected</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">10+ Years Experience</p>
                    <p className="text-gray-400 text-sm">Proven track record of excellence</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">100% Satisfaction Guarantee</p>
                    <p className="text-gray-400 text-sm">We stand behind our work</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">Free Consultations</p>
                    <p className="text-gray-400 text-sm">No obligation, expert advice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-gray-700" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-white">Contact Us</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Get Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsQuoteModalOpen(false)}>
          <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-gray-700" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-white">Request a Quote</h3>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div>
                <label htmlFor="quote-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="quote-name"
                  name="name"
                  value={quoteData.name}
                  onChange={handleQuoteChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleQuoteChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quote-service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Type *
                </label>
                <select
                  id="quote-service"
                  name="serviceType"
                  value={quoteData.serviceType}
                  onChange={handleQuoteChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select a service</option>
                  <option value="interior-residential">Interior Residential Services</option>
                  <option value="remodeling">Remodeling Contracting</option>
                  <option value="repository">Repository Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="quote-details" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="quote-details"
                  name="projectDetails"
                  value={quoteData.projectDetails}
                  onChange={handleQuoteChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 resize-none"
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Quote Request
                </button>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#1a1a1a] text-gray-400 py-12 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8" />
                <h3 className="text-white text-lg font-bold">OldWestSolutions</h3>
              </div>
              <p className="text-sm mb-3">Professional services for your home and code. Roofing, solar, and pull request management.</p>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">USA</span>
              </div>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/residential" className="hover:text-white transition-colors">Residential</Link></li>
                <li><Link href="/remodeling" className="hover:text-white transition-colors">Remodeling</Link></li>
                <li><Link href="/repository" className="hover:text-white transition-colors">Repository</Link></li>
                <li><Link href="/network" className="hover:text-white transition-colors">Network</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/newspaper" className="hover:text-white transition-colors">Newspaper</Link></li>
                <li><Link href="/documents" className="hover:text-white transition-colors">Documents</Link></li>
                <li><Link href="/domains" className="hover:text-white transition-colors">Domains</Link></li>
                <li><Link href="/store" className="hover:text-white transition-colors">Store</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help-desk" className="hover:text-white transition-colors">Help Desk</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/legal" className="hover:text-white transition-colors">Legal</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-sm">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            <p>&copy; 2026 OldWestSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
