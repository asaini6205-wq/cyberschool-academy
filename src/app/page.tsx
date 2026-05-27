'use client'

import Navbar from '@/components/layout/Navbar'

import Hero from '@/components/home/Hero'
import Courses from '@/components/home/Courses'
import WhyCyberSchool from '@/components/home/WhyCyberSchool'
import CyberLabs from '@/components/home/CyberLabs'
import Chatbot from '@/components/layout/Chatbot'
import DashboardPreview from '@/components/home/DashboardPreview'
import LabsShowcase from '@/components/home/LabsShowcase'
import SuccessStories from '@/components/home/SuccessStories'
import VerifyCTA from '@/components/home/VerifyCTA'
import Footer from '@/components/layout/Footer'

export default function HomePage() {

  return (

    <main className="website-main">

      <Navbar />

      <Hero />

      {/* TRUSTED SECTION */}

      <section className="trusted-section">

        <div className="container-custom">

          <p className="trusted-title">
            Trusted by learners preparing for careers at
          </p>

          <div className="trusted-grid">

            <div className="trusted-item">
              Google
            </div>

            <div className="trusted-item">
              Microsoft
            </div>

            <div className="trusted-item">
              Cisco
            </div>

            <div className="trusted-item">
              IBM
            </div>

            <div className="trusted-item">
              Palo Alto
            </div>

            <div className="trusted-item">
              EC-Council
            </div>

          </div>

        </div>

      </section>

      <Courses />

      <WhyCyberSchool />

      <CyberLabs />

      <DashboardPreview />

      <LabsShowcase />

      <SuccessStories />

      <VerifyCTA />

      <Chatbot />

      <Footer />

    </main>

  )
}