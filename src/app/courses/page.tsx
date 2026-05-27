'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Image from 'next/image'
import Link from 'next/link'

import {
  Shield,
  Database,
  BrainCircuit,
  Bug,
  Scale,
  Search,
  Clock3,
  Users,
  Star,
} from 'lucide-react'

const courses = [

  {
    title: 'Ethical Hacking',
    icon: Shield,
    image: '/lab1.png',
    duration: '6 Months',
    students: '4.2K+ Students',
    level: 'Beginner to Advanced',
    seats: '120 Seats Left',
    instructor: 'CyberSchool Team',
    description:
      'Master penetration testing, vulnerability analysis and real-world attack simulations.',
  },

  {
    title: 'Digital Forensics',
    icon: Database,
    image: '/lab2.png',
    duration: '4 Months',
    students: '2.1K+ Students',
    level: 'Intermediate',
    seats: '80 Seats Left',
    instructor: 'Cyber Investigation Team',
    description:
      'Learn cybercrime investigation, malware tracing and forensic analysis.',
  },

  {
    title: 'SOC Analyst',
    icon: Bug,
    image: '/lab3.png',
    duration: '5 Months',
    students: '3.5K+ Students',
    level: 'Intermediate',
    seats: '60 Seats Left',
    instructor: 'Industry Experts',
    description:
      'Monitor threats and work with SIEM tools like professional SOC analysts.',
  },

  {
    title: 'AI Security',
    icon: BrainCircuit,
    image: '/Hero.png',
    duration: '3 Months',
    students: '1.8K+ Students',
    level: 'Advanced',
    seats: '40 Seats Left',
    instructor: 'AI Security Team',
    description:
      'Understand AI vulnerabilities, LLM attacks and future cyber threats.',
  },

  {
    title: 'OSINT Intelligence',
    icon: Search,
    image: '/lab1.jpg',
    duration: '2 Months',
    students: '1.2K+ Students',
    level: 'Beginner',
    seats: '95 Seats Left',
    instructor: 'OSINT Team',
    description:
      'Learn open-source intelligence gathering and cyber investigations.',
  },

  {
    title: 'Cyber Law',
    icon: Scale,
    image: '/dashboard.png',
    duration: '2 Months',
    students: '900+ Students',
    level: 'Beginner',
    seats: '70 Seats Left',
    instructor: 'Legal Experts',
    description:
      'Understand cyber laws, IT Act and cybercrime legal frameworks.',
  },

]

export default function CoursesPage() {

  return (

    <>

      <Navbar />

      <main className="courses-page">

        {/* HERO */}

        <section className="courses-hero">

          <div className="container-custom">

            <div className="courses-hero-content">

              <div className="section-badge">

                Explore Programs

              </div>

              <h1>

                Industry Ready
                <span> Cybersecurity </span>
                Courses

              </h1>

              <p>

                Learn Ethical Hacking,
                Digital Forensics,
                SOC Operations,
                AI Security,
                OSINT and Cyber Law
                through real-world cyber labs.

              </p>

            </div>

          </div>

        </section>

        {/* COURSES */}

        <section className="all-courses-section">

          <div className="container-custom">

            <div className="courses-grid-page">

              {

                courses.map((course, index) => {

                  const Icon = course.icon

                  return (

                    <div
                      key={index}
                      className="course-page-card"
                    >

                      {/* IMAGE */}

                      <div className="course-page-image-wrapper">

                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="course-page-image"
                        />

                      </div>

                      {/* CONTENT */}

                      <div className="course-page-content">

                        <div className="course-page-top">

                          <div className="course-page-icon">

                            <Icon size={26} />

                          </div>

                          <div className="course-duration-badge">

                            {course.duration}

                          </div>

                        </div>

                        <h2>

                          {course.title}

                        </h2>

                        <p>

                          {course.description}

                        </p>

                        {/* META */}

                        <div className="course-meta">

                          <div>

                            <Clock3 size={16} />

                            {course.level}

                          </div>

                          <div>

                            <Users size={16} />

                            {course.students}

                          </div>

                          <div>

                            <Star size={16} />

                            {course.seats}

                          </div>

                        </div>

                        {/* INSTRUCTOR */}

                        <div className="course-instructor">

                          Instructor:
                          <span>

                            {course.instructor}

                          </span>

                        </div>

                        {/* BUTTONS */}

                        <div className="course-page-buttons">

                          <button className="download-btn">

                            Syllabus PDF

                          </button>

                          <Link href="/contact">

                            <button className="enroll-course-btn">

                              Enroll Now

                            </button>

                          </Link>

                        </div>

                      </div>

                    </div>

                  )

                })

              }

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  )

}