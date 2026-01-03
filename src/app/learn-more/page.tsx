import Link from 'next/link';
import Header from '../components/Header';

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Learn More About Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Discover comprehensive solutions for your residential, remodeling, repository, and network needs. Explore our services and find the perfect solution for your project.
          </p>
        </div>
      </section>

      {/* Residential Contracting Services Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Front-end & Back-end Services
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your digital presence with our comprehensive development services. From expert front-end interfaces and user experience design to robust back-end APIs and database solutions—we deliver excellence across every aspect of your application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Visual Card */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
                <h3 className="text-3xl font-bold text-orange-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  Front-end & Back-end Services
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Comprehensive development services including front-end UI/UX, back-end APIs, database design, and security solutions with our verified developer network
                </p>
                
                {/* Code Image */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-orange-500/30 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                      <img src="/скрипт.jpg" alt="Code Excellence" className="w-full h-full object-contain scale-75" />
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
            
            {/* Right Side - Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/residential/roofing" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling Contracting Services Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Remodeling Contracting Services
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your space with our expert remodeling contracting services. From kitchen and bathroom renovations to complete home makeovers, we bring your vision to life with quality craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/remodeling/energy" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Energy</p>
                    <p className="text-gray-400 text-sm">Efficient solutions</p>
                  </Link>
                  
                  <Link href="/remodeling/monitoring" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Smart Monitoring</p>
                    <p className="text-gray-400 text-sm">Real-time tracking</p>
                  </Link>
                  
                  <Link href="/remodeling/finishing" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Finishing</p>
                    <p className="text-gray-400 text-sm">Interior & exterior</p>
                  </Link>
                  
                  <Link href="/remodeling/outdoor" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Outdoor</p>
                    <p className="text-gray-400 text-sm">Landscaping & more</p>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Side - Visual Card */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  Remodeling Excellence
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Professional remodeling services with expert craftsmanship and premium materials for your home transformation
                </p>
                
                {/* Remodeling Image */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-yellow-500/30 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                      <img src="/roomremodel.jpg" alt="Expert Craftsmanship" className="w-full h-full object-contain scale-75" />
                    </div>
                    <p className="text-yellow-400 font-semibold text-lg mb-2">Expert Craftsmanship</p>
                    <p className="text-gray-400 text-sm text-center">Professional remodeling and renovation services</p>
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
                      <p className="text-white font-medium">Verified Contractors</p>
                      <p className="text-gray-400 text-sm">Licensed remodeling professionals</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Project Reviews</p>
                      <p className="text-gray-400 text-sm">Share your remodeling experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repository Services Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Repository Services
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Manage your codebase with our comprehensive repository services. From pull and merge requests to issue tracking and version control, we provide the tools and expertise to streamline your development workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Visual Card */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
                <h3 className="text-3xl font-bold text-blue-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  Repository Services
                </h3>
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
            
            {/* Right Side - Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Services</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OldWest.net Network Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              OldWest.net Network
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Experience revolutionary network solutions through OldWest.net. From gaming and bandwidth sharing to Ethereum VM services and ad sharing capabilities, our distributed network infrastructure enables you to capitalize on your participation while playing sports, games, and engaging in real-life activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Network Solutions</h3>
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
              </div>
            </div>
            
            {/* Right Side - Visual Card */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-purple-500/20">
                <h3 className="text-3xl font-bold text-purple-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  OldWest.net Network
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Revolutionary network solutions for gaming, bandwidth sharing, and Ethereum VM services with ad sharing capabilities through our distributed network infrastructure
                </p>
                
                {/* Network Image */}
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
        </div>
      </section>

    </div>
  );
}
