'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import {
  ShieldCheck,
  Star,
  Users,
  Award,
  Play
} from 'lucide-react'

export default function Hero() {

  return (

    <section className="hero-section">

      <div className="container-custom">

        <div className="hero-wrapper">

          {/* LEFT SIDE */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8
            }}

            className="hero-left"

          >

            {/* BADGE */}

            <div className="hero-badge">

              <ShieldCheck size={18} />

              <span>
                India’s Trusted Cybersecurity Academy
              </span>

            </div>

            {/* TITLE */}

            <h1 className="hero-title">

              Learn
              <span> Cybersecurity </span>

              <br />

              From Experts

            </h1>

            {/* DESCRIPTION */}

            <p className="hero-subtitle">

              Master Ethical Hacking,
              Digital Forensics,
              OSINT,
              Red Teaming,
              AI Security
              and practical cyber labs with
              real-world mentorship.

            </p>

            {/* BUTTONS */}

            <div className="hero-buttons">

              <Link href="/courses">

                <button className="hero-primary-btn">

                  Explore Courses

                </button>

              </Link>

              <button className="hero-secondary-btn">

                <Play
                  size={18}
                  style={{
                    marginRight: '10px'
                  }}
                />

                Watch Demo

              </button>

            </div>

            {/* STATS */}

            <div className="hero-stats">

              <div className="stat-box">

                <Users
                  size={26}
                  className="stat-icon"
                />

                <h3>15K+</h3>

                <p>Students Enrolled</p>

              </div>

              <div className="stat-box">

                <Award
                  size={26}
                  className="stat-icon"
                />

                <h3>120+</h3>

                <p>Cyber Labs</p>

              </div>

              <div className="stat-box">

                <Star
                  size={26}
                  className="stat-icon"
                />

                <h3>95%</h3>

                <p>Placement Rate</p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.95
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: 0.8
            }}

            className="hero-right"

          >

            <div className="hero-image-box">

              <Image

                src="/Hero.png"

                alt="Cybersecurity Academy"

                fill

                priority

                sizes="(max-width: 768px) 100vw, 50vw"

                className="hero-image"

              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}