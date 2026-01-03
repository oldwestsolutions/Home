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
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="min-h-screen bg-[#B8BEC3] text-[#161616]" style={{fontFamily: '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
      <Header />

      {/* Enterprise Hero Section - IBM Grid */}
      <section className="bg-gradient-to-b from-[#ffffff] to-[#B8BEC3] border-b border-[#8d8d8d] pt-32 pb-16">
        <div className="ibm-grid">
          <div className="col-span-12 lg:col-span-6 lg:col-start-1">
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#e5e5e5] text-[#525252] text-sm font-medium rounded-sm">
                  ENTERPRISE SOLUTIONS
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-light text-[#161616] mb-6 leading-tight tracking-tight">
                Front-end & Back-end
                <span className="font-semibold block mt-2">Development Services</span>
              </h1>
              <p className="text-xl text-[#525252] mb-8 leading-relaxed max-w-2xl">
                Enterprise-grade development solutions for modern applications. From scalable front-end interfaces to robust back-end architectures—delivering excellence across every layer of your technology stack.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-8 py-3 bg-[#0f62fe] text-white font-medium hover:bg-[#0050e6] transition-colors border border-[#0f62fe] shadow-sm"
                >
                  Request Consultation
                </button>
                <Link
                  href="/learn-more"
                  className="px-8 py-3 bg-white text-[#161616] font-medium hover:bg-[#f3f3f3] transition-colors border border-[#8d8d8d] shadow-sm"
                >
                  Learn More
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#d1d1d1]">
                <div>
                  <div className="text-3xl font-semibold text-[#161616] mb-1">500+</div>
                  <div className="text-sm text-[#525252]">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[#161616] mb-1">99.9%</div>
                  <div className="text-sm text-[#525252]">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[#161616] mb-1">24/7</div>
                  <div className="text-sm text-[#525252]">Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0">
            <div className="bg-white border border-[#8d8d8d] p-8 shadow-sm">
              <div className="aspect-video bg-[#B8BEC3] border border-[#8d8d8d] flex items-center justify-center mb-6">
                <img src="/скрипт.jpg" alt="Enterprise Development" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#161616] mb-1">Enterprise Architecture</div>
                    <div className="text-sm text-[#525252]">Scalable, secure, and maintainable solutions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#161616] mb-1">Certified Professionals</div>
                    <div className="text-sm text-[#525252]">Industry-certified developers and architects</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#161616] mb-1">Compliance Ready</div>
                    <div className="text-sm text-[#525252]">GDPR, SOC 2, ISO 27001 compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - IBM Grid System */}
      <section className="py-16 bg-white border-b border-[#8d8d8d]">
        <div className="ibm-grid">
          <div className="col-span-12 mb-12">
            <h2 className="text-4xl font-light text-[#161616] mb-4">Core Services</h2>
            <p className="text-lg text-[#525252] max-w-3xl">
              Comprehensive development services designed for enterprise-scale applications
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="bg-[#B8BEC3] border border-[#8d8d8d] p-6 hover:border-[#525252] transition-colors h-full">
              <div className="w-12 h-12 bg-[#0f62fe] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">Front-end Development</h3>
              <p className="text-sm text-[#525252] mb-4">
                Modern UI/UX development with React, Next.js, and enterprise design systems
              </p>
              <Link href="/residential/roofing" className="text-[#0f62fe] text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="bg-[#B8BEC3] border border-[#8d8d8d] p-6 hover:border-[#525252] transition-colors h-full">
              <div className="w-12 h-12 bg-[#0f62fe] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">Back-end Development</h3>
              <p className="text-sm text-[#525252] mb-4">
                Scalable APIs, microservices, and server architectures built for enterprise workloads
              </p>
              <Link href="/residential/hvac" className="text-[#0f62fe] text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="bg-[#B8BEC3] border border-[#8d8d8d] p-6 hover:border-[#525252] transition-colors h-full">
              <div className="w-12 h-12 bg-[#0f62fe] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">Database Solutions</h3>
              <p className="text-sm text-[#525252] mb-4">
                Database design, optimization, and management for high-performance applications
              </p>
              <Link href="/residential/appliances" className="text-[#0f62fe] text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="bg-[#B8BEC3] border border-[#8d8d8d] p-6 hover:border-[#525252] transition-colors h-full">
              <div className="w-12 h-12 bg-[#0f62fe] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">Security & Compliance</h3>
              <p className="text-sm text-[#525252] mb-4">
                Enterprise-grade security, authentication, and compliance solutions
              </p>
              <Link href="/residential/plumbing" className="text-[#0f62fe] text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Stack Development Section - IBM Grid */}
      <section className="py-16 bg-[#B8BEC3] border-b border-[#8d8d8d]">
        <div className="ibm-grid">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white text-[#525252] text-sm font-medium rounded-sm border border-[#d1d1d1]">
                  FULL-STACK SOLUTIONS
                </span>
              </div>
              <h2 className="text-4xl font-light text-[#161616] mb-6">
                Enterprise Full-Stack
                <span className="font-semibold block mt-2">Development Services</span>
              </h2>
              <p className="text-lg text-[#525252] mb-8 leading-relaxed">
                Transform your application with our expert full-stack development services. From responsive front-end interfaces to scalable back-end architectures, we bring your vision to life with quality code and attention to detail.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-[#8d8d8d] p-4">
                  <div className="text-2xl font-semibold text-[#161616] mb-1">Performance</div>
                  <div className="text-sm text-[#525252]">Optimized solutions</div>
                </div>
                <div className="bg-white border border-[#8d8d8d] p-4">
                  <div className="text-2xl font-semibold text-[#161616] mb-1">Monitoring</div>
                  <div className="text-sm text-[#525252]">Real-time analytics</div>
                </div>
                <div className="bg-white border border-[#8d8d8d] p-4">
                  <div className="text-2xl font-semibold text-[#161616] mb-1">Integration</div>
                  <div className="text-sm text-[#525252]">API & third-party</div>
                </div>
                <div className="bg-white border border-[#8d8d8d] p-4">
                  <div className="text-2xl font-semibold text-[#161616] mb-1">Deployment</div>
                  <div className="text-sm text-[#525252]">Cloud & hosting</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-6 py-3 bg-[#0f62fe] text-white font-medium hover:bg-[#0050e6] transition-colors border border-[#0f62fe]"
                >
                  Get Started
                </button>
                <Link
                  href="/contractinginformation"
                  className="px-6 py-3 bg-white text-[#161616] font-medium hover:bg-[#B8BEC3] transition-colors border border-[#8d8d8d]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0">
            <div className="bg-white border border-[#8d8d8d] p-8">
              <div className="aspect-video bg-[#B8BEC3] border border-[#8d8d8d] flex items-center justify-center mb-6">
                <img src="/скрипт.jpg" alt="Full-Stack Development" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#161616] mb-1">Verified Developers</div>
                    <div className="text-sm text-[#525252]">Licensed full-stack professionals</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#161616] mb-1">Quality Guarantee</div>
                    <div className="text-sm text-[#525252]">Satisfaction assured</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0f62fe] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#161616] mb-1">Project Reviews</div>
                    <div className="text-sm text-[#525252]">Share your development experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section - IBM Grid */}
      <section className="py-16 bg-white border-b border-[#8d8d8d]">
        <div className="ibm-grid">
          <div className="col-span-12 mb-12 text-center">
            <h2 className="text-4xl font-light text-[#161616] mb-4">Enterprise Capabilities</h2>
            <p className="text-lg text-[#525252] max-w-3xl mx-auto">
              Built for scale, security, and reliability
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f62fe] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">Security First</h3>
              <p className="text-[#525252]">
                Enterprise-grade security with end-to-end encryption, authentication, and compliance frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f62fe] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">High Performance</h3>
              <p className="text-[#525252]">
                Optimized for speed and scalability to handle enterprise-level traffic and workloads
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f62fe] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">24/7 Support</h3>
              <p className="text-[#525252]">
                Round-the-clock enterprise support with dedicated account managers and SLA guarantees
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0f62fe] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#161616] mb-2">24/7 Support</h3>
              <p className="text-[#525252]">
                Round-the-clock enterprise support with dedicated account managers and SLA guarantees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - IBM Grid */}
      <section className="py-16 bg-[#B8BEC3]">
        <div className="ibm-grid">
          <div className="col-span-12">
            <div className="bg-white border border-[#8d8d8d] p-12 text-center">
            <h2 className="text-4xl font-light text-[#161616] mb-4">
              Ready to Transform Your Application?
            </h2>
            <p className="text-lg text-[#525252] mb-8 max-w-2xl mx-auto">
              Join enterprise clients who trust our development services for their mission-critical applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-8 py-3 bg-[#0f62fe] text-white font-medium hover:bg-[#0050e6] transition-colors border border-[#0f62fe]"
              >
                Request Consultation
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-white text-[#161616] font-medium hover:bg-[#B8BEC3] transition-colors border border-[#8d8d8d]"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-sm shadow-lg max-w-2xl w-full p-8 border border-[#d1d1d1]" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-[#161616]">Contact Us</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#525252] hover:text-[#161616] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#161616] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#161616] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#161616] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#0f62fe] text-white font-medium hover:bg-[#0050e6] transition-colors border border-[#0f62fe]"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-white text-[#161616] font-medium hover:bg-[#B8BEC3] transition-colors border border-[#8d8d8d]"
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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsQuoteModalOpen(false)}>
          <div className="bg-white rounded-sm shadow-lg max-w-2xl w-full p-8 border border-[#8d8d8d]" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-[#161616]">Request a Quote</h3>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-[#525252] hover:text-[#161616] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div>
                <label htmlFor="quote-name" className="block text-sm font-medium text-[#161616] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="quote-name"
                  name="name"
                  value={quoteData.name}
                  onChange={handleQuoteChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium text-[#161616] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-[#161616] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleQuoteChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quote-service" className="block text-sm font-medium text-[#161616] mb-2">
                  Service Type *
                </label>
                <select
                  id="quote-service"
                  name="serviceType"
                  value={quoteData.serviceType}
                  onChange={handleQuoteChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]"
                >
                  <option value="">Select a service</option>
                  <option value="frontend">Front-end Development</option>
                  <option value="backend">Back-end Development</option>
                  <option value="fullstack">Full-Stack Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="quote-details" className="block text-sm font-medium text-[#161616] mb-2">
                  Project Details *
                </label>
                <textarea
                  id="quote-details"
                  name="projectDetails"
                  value={quoteData.projectDetails}
                  onChange={handleQuoteChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-white border border-[#8d8d8d] text-[#161616] focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe] resize-none"
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#0f62fe] text-white font-medium hover:bg-[#0050e6] transition-colors border border-[#0f62fe]"
                >
                  Submit Quote Request
                </button>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="px-6 py-3 bg-white text-[#161616] font-medium hover:bg-[#f3f3f3] transition-colors border border-[#8d8d8d]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer - IBM Grid */}
      <footer className="w-full bg-white text-[#525252] py-12 border-t border-[#8d8d8d]">
        <div className="ibm-grid">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8" />
              <h3 className="text-[#161616] text-lg font-semibold">OldWestSolutions</h3>
            </div>
            <p className="text-sm mb-3">Enterprise development services for modern applications. Front-end, back-end, and full-stack solutions.</p>
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-[#525252]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[#525252]">USA</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-[#161616] text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/residential" className="hover:text-[#161616] transition-colors">Front-end</Link></li>
              <li><Link href="/remodeling" className="hover:text-[#161616] transition-colors">Back-end</Link></li>
              <li><Link href="/repository" className="hover:text-[#161616] transition-colors">Full-Stack</Link></li>
              <li><Link href="/network" className="hover:text-[#161616] transition-colors">Enterprise</Link></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-[#161616] text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/newspaper" className="hover:text-[#161616] transition-colors">News</Link></li>
              <li><Link href="/documents" className="hover:text-[#161616] transition-colors">Documents</Link></li>
              <li><Link href="/domains" className="hover:text-[#161616] transition-colors">Domains</Link></li>
              <li><Link href="/store" className="hover:text-[#161616] transition-colors">Store</Link></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-[#161616] text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help-desk" className="hover:text-[#161616] transition-colors">Help Desk</Link></li>
              <li><Link href="/careers" className="hover:text-[#161616] transition-colors">Careers</Link></li>
              <li><Link href="/legal" className="hover:text-[#161616] transition-colors">Legal</Link></li>
            </ul>
          </div>
          <div className="col-span-12 border-t border-[#8d8d8d] mt-8 pt-8 text-center text-sm">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/terms" className="hover:text-[#161616] transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-[#161616] transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookie" className="hover:text-[#161616] transition-colors">Cookie Policy</Link>
            </div>
            <p>&copy; 2026 OldWestSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
