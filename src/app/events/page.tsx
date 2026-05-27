'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Image from 'next/image'

import {
  CalendarDays,
  MapPin,
  Clock3,
  Users,
} from 'lucide-react'

const events = [

  {
    title: 'Cyber Defense Workshop',
    image: '/lab1.png',
    date: '12 June 2026',
    time: '10:00 AM',
    location: 'Pune Campus',
    attendees: '350+ Students',
    type: 'Offline',
    description:
      'Hands-on cybersecurity workshop covering SOC operations, malware detection and ethical hacking.',
  },

  {
    title: 'AI Security Summit',
    image: '/Hero.png',
    date: '22 June 2026',
    time: '2:00 PM',
    location: 'Online Event',
    attendees: '1.2K+ Attendees',
    type: 'Online',
    description:
      'Explore AI vulnerabilities, LLM attacks, prompt injection and modern AI defense systems.',
  },

  {
    title: 'Digital Forensics Bootcamp',
    image: '/lab2.png',
    date: '30 June 2026',
    time: '11:00 AM',
    location: 'CyberSchool Labs',
    attendees: '180+ Students',
    type: 'Offline',
    description:
      'Practical digital forensics training with memory analysis and cybercrime investigation.',
  },

]

export default function EventsPage() {

  return (

    <>

      <Navbar />

      <main className="events-page">

        {/* HERO */}

        <section className="events-hero">

          <div className="container-custom">

            <div className="events-hero-content">

              <div className="section-badge">

                Cyber Events & Workshops

              </div>

              <h1>

                Learn Through
                <span> Live Events </span>
                & Workshops

              </h1>

              <p>

                Join cybersecurity workshops,
                hackathons,
                investigations,
                bootcamps and AI security summits
                conducted by CyberSchool Academy.

              </p>

            </div>

          </div>

        </section>

        {/* EVENTS */}

        <section className="events-section">

          <div className="container-custom">

            {/* EVENT STATS */}

            <div className="events-top-grid">

              <div className="events-top-card">

                <h2>

                  45+

                </h2>

                <p>

                  Cyber Events Conducted

                </p>

              </div>

              <div className="events-top-card">

                <h2>

                  12K+

                </h2>

                <p>

                  Student Participants

                </p>

              </div>

              <div className="events-top-card">

                <h2>

                  30+

                </h2>

                <p>

                  Industry Speakers

                </p>

              </div>

            </div>

            {/* EVENTS GRID */}

            <div className="events-grid">

              {

                events.map((event, index) => (

                  <div
                    key={index}
                    className="event-card"
                  >

                    {/* IMAGE */}

                    <div className="event-image-wrapper">

                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="event-image"
                      />

                    </div>

                    {/* CONTENT */}

                    <div className="event-content">

                      {/* TYPE */}

                      <div className="event-type">

                        {event.type}

                      </div>

                      {/* TITLE */}

                      <h2>

                        {event.title}

                      </h2>

                      {/* DESCRIPTION */}

                      <p className="event-description">

                        {event.description}

                      </p>

                      {/* META */}

                      <div className="event-meta">

                        <div className="event-meta-item">

                          <CalendarDays size={16} />

                          {event.date}

                        </div>

                        <div className="event-meta-item">

                          <Clock3 size={16} />

                          {event.time}

                        </div>

                        <div className="event-meta-item">

                          <MapPin size={16} />

                          {event.location}

                        </div>

                        <div className="event-meta-item">

                          <Users size={16} />

                          {event.attendees}

                        </div>

                      </div>

                      {/* BUTTON */}

                      <button className="event-btn">

                        Register Now

                      </button>

                    </div>

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