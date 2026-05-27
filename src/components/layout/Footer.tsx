'use client'

import Link from 'next/link'


export default function Footer() {

  return (

    <footer className="main-footer">

      <div className="footer-container">

        <div className="footer-grid">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">

              <img
                src="/logo.jpeg"
                alt="CyberSchool"
              />

              <div>

                <h2>
                  CyberSchool
                </h2>

                <p>
                  Cybersecurity Academy
                </p>

              </div>

            </div>

            <p className="footer-description">

              CyberSchool Academy is an
              advanced cybersecurity learning
              ecosystem focused on Ethical Hacking,
              Digital Forensics, OSINT,
              SOC Operations, AI Security
              and real-world cyber labs.

            </p>

            

          </div>

          {/* QUICK LINKS */}

          <div className="footer-links">

            <h3>
              Quick Links
            </h3>

            <ul>

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/courses">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/departments">
                  Departments
                </Link>
              </li>

              <li>
                <Link href="/events">
                  Events
                </Link>
              </li>

              <li>
                <Link href="/placements">
                  Placements
                </Link>
              </li>

            </ul>

          </div>

          {/* VERIFICATION */}

          <div className="footer-links">

            <h3>
              Verification
            </h3>

            <ul>

              <li>
                <Link href="/verify">
                  Certificate Verify
                </Link>
              </li>

              <li>
                <Link href="/partner-verify">
                  Partner Verify
                </Link>
              </li>

              <li>
                <Link href="/team-verify">
                  Team Verify
                </Link>
              </li>

              <li>
                <Link href="/collaboration">
                  Collaboration
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div className="footer-links">

            <h3>
              Contact
            </h3>

            <ul>

              <li>
                contact@cyberschoolacademy.in
              </li>

              <li>
                +91 98765 43210
              </li>

              <li>
                Pune, Maharashtra
              </li>

              <li>
                CyberSecurity Training Hub
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © 2026 CyberSchool Academy.
            All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms & Conditions
            </Link>

            <Link href="#">
              Security Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>

  )

}