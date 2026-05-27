'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from 'lucide-react'

export default function ContactPage() {

  return (

    <>

      <Navbar />

      <main className="contact-page">

        {/* HERO */}

        <section className="contact-hero">

          <div className="container-custom">

            <div className="contact-hero-content">

              <div className="section-badge">

                Contact CyberSchool

              </div>

              <h1>

                Let’s Build
                <span> Cyber Careers </span>
                Together

              </h1>

              <p>

                Connect with CyberSchool Academy
                for admissions,
                collaborations,
                workshops,
                placements and cybersecurity programs.

              </p>

            </div>

          </div>

        </section>

        {/* CONTACT SECTION */}

        <section className="contact-section">

          <div className="container-custom">

            <div className="contact-wrapper">

              {/* LEFT */}

              <div className="contact-info">

                <div className="contact-card">

                  <Mail size={24} />

                  <div>

                    <h3>Email Address</h3>

                    <p>

                      contact@cyberschoolacademy.in

                    </p>

                  </div>

                </div>

                <div className="contact-card">

                  <Phone size={24} />

                  <div>

                    <h3>Phone Number</h3>

                    <p>

                      +91 98765 43210

                    </p>

                  </div>

                </div>

                <div className="contact-card">

                  <MapPin size={24} />

                  <div>

                    <h3>Location</h3>

                    <p>

                      Pune, Maharashtra, India

                    </p>

                  </div>

                </div>

                <div className="whatsapp-box">

                  <MessageCircle size={26} />

                  <div>

                    <h3>

                      WhatsApp Support

                    </h3>

                    <p>

                      Quick response for admissions
                      and cybersecurity inquiries.

                    </p>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="contact-form-box">

                <h2>

                  Send Message

                </h2>

                <form className="contact-form">

                  <input
                    type="text"
                    placeholder="Full Name"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                  />

                  <textarea
                    placeholder="Write your message..."
                    rows={6}
                  />

                  <button type="submit">

                    Send Message

                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  )

}