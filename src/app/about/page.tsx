'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Image from 'next/image'

import {
  ShieldCheck,
  Users,
  Award,
  GraduationCap,
} from 'lucide-react'

export default function AboutPage() {

  return (

    <>

      <Navbar />

      <main className="about-page">

        {/* HERO */}

        <section className="about-hero">

          <div className="container-custom">

            <div className="about-hero-content">

              <div className="section-badge">

                About CyberSchool

              </div>

              <h1>

                Building The Future Of
                <span> Cybersecurity </span>
                Education

              </h1>

              <p>

                CyberSchool Academy is a modern
                cybersecurity ecosystem focused on
                practical learning,
                cyber investigations,
                AI security,
                ethical hacking and real-world training.

              </p>

            </div>

          </div>

        </section>

        {/* ABOUT SECTION */}

        <section className="about-section">

          <div className="container-custom">

            <div className="about-wrapper">

              {/* LEFT */}

              <div className="about-image-wrapper">

                <Image
                  src="/Hero.png"
                  alt="CyberSchool"
                  fill
                  className="about-image"
                />

              </div>

              {/* RIGHT */}

              <div className="about-content">

                <h2>

                  Empowering Students
                  Through Real Cyber Labs

                </h2>

                <p>

                  CyberSchool Academy provides
                  advanced practical cybersecurity
                  education through live labs,
                  investigations,
                  workshops and industry-focused
                  learning programs.

                </p>

                <p>

                  Our mission is to create
                  industry-ready cybersecurity
                  professionals with practical skills,
                  ethical mindset and real-world
                  experience.

                </p>

                {/* STATS */}

                <div className="about-stats">

                  <div className="about-stat-card">

                    <ShieldCheck size={28} />

                    <h3>120+</h3>

                    <p>Cyber Labs</p>

                  </div>

                  <div className="about-stat-card">

                    <Users size={28} />

                    <h3>15K+</h3>

                    <p>Students</p>

                  </div>

                  <div className="about-stat-card">

                    <Award size={28} />

                    <h3>95%</h3>

                    <p>Placements</p>

                  </div>

                  <div className="about-stat-card">

                    <GraduationCap size={28} />

                    <h3>50+</h3>

                    <p>Programs</p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  )

}