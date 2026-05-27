'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Image from 'next/image'

import {
  Building2,
  Briefcase,
  IndianRupee,
  Users,
} from 'lucide-react'

const placements = [

  {
    name: 'Aarav Sharma',
    role: 'SOC Analyst',
    company: 'TCS',
    package: '₹8.5 LPA',
    image: '/logo.jpeg',
  },

  {
    name: 'Priya Mehta',
    role: 'Cybersecurity Intern',
    company: 'Deloitte',
    package: '₹6.2 LPA',
    image: '/logo.jpeg',
  },

  {
    name: 'Rohan Verma',
    role: 'Penetration Tester',
    company: 'Infosys',
    package: '₹9.1 LPA',
    image: '/logo.jpeg',
  },

]

const companies = [
  'Google',
  'Microsoft',
  'IBM',
  'Cisco',
  'Infosys',
  'Deloitte',
  'TCS',
  'Palo Alto',
]

export default function PlacementsPage() {

  return (

    <>

      <Navbar />

      <main className="placements-page">

        {/* HERO */}

        <section className="placements-hero">

          <div className="container-custom">

            <div className="placements-hero-content">

              <div className="section-badge">

                Placements & Careers

              </div>

              <h1>

                Students Building
                <span> Real Careers </span>
                In Cybersecurity

              </h1>

              <p>

                CyberSchool Academy helps students
                gain internships,
                placements and real-world cyber
                industry exposure.

              </p>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="placement-stats">

          <div className="container-custom">

            <div className="placement-stats-grid">

              <div className="placement-stat-card">

                <Users size={32} />

                <h2>15K+</h2>

                <p>Students Trained</p>

              </div>

              <div className="placement-stat-card">

                <Briefcase size={32} />

                <h2>95%</h2>

                <p>Placement Rate</p>

              </div>

              <div className="placement-stat-card">

                <IndianRupee size={32} />

                <h2>₹12 LPA</h2>

                <p>Highest Package</p>

              </div>

              <div className="placement-stat-card">

                <Building2 size={32} />

                <h2>120+</h2>

                <p>Hiring Partners</p>

              </div>

            </div>

          </div>

        </section>

        {/* STUDENTS */}

        <section className="placements-section">

          <div className="container-custom">

            <div className="section-header">

              <div className="section-badge">

                Success Stories

              </div>

              <h2>

                Our Students
                Getting Placed

              </h2>

            </div>

            <div className="placements-grid">

              {

                placements.map((student, index) => (

                  <div
                    key={index}
                    className="placement-card"
                  >

                    <div className="placement-image-wrapper">

                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="placement-image"
                      />

                    </div>

                    <div className="placement-content">

                      <div className="placement-package">

                        {student.package}

                      </div>

                      <h3>

                        {student.name}

                      </h3>

                      <p>

                        {student.role}

                      </p>

                      <span>

                        {student.company}

                      </span>

                    </div>

                  </div>

                ))

              }

            </div>

          </div>

        </section>

        {/* COMPANIES */}

        <section className="companies-section">

          <div className="container-custom">

            <div className="section-header">

              <div className="section-badge">

                Hiring Companies

              </div>

              <h2>

                Trusted By
                Industry Leaders

              </h2>

            </div>

            <div className="companies-grid">

              {

                companies.map((company, index) => (

                  <div
                    key={index}
                    className="company-card"
                  >

                    {company}

                  </div>

                ))

              }

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  )

}