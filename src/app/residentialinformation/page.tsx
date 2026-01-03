import Link from 'next/link';
import Header from '../components/Header';

export default function ResidentialInformation() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Front-end & Back-end Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Transform your digital presence with our comprehensive development services. From expert front-end interfaces and user experience design to robust back-end APIs and database solutions—we deliver excellence across every aspect of your application.
          </p>
        </div>
      </section>

      {/* Residential Contracting Services Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Comprehensive Development Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive development services including front-end UI/UX, back-end APIs, database design, and security solutions with our verified developer network
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
    </div>
  );
}
