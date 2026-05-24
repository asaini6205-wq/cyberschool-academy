'use client'

import Image from 'next/image'

export default function LabsShowcase() {

  return (

    <section className="labs-showcase-section">

      <div className="container-custom">

        <div className="labs-header">

          <div className="section-badge">
            Real Practical Training
          </div>

          <h2>
            Experience Real Cybersecurity Labs
          </h2>

          <p>
            Practice ethical hacking, SOC monitoring,
            malware analysis and digital forensics
            inside immersive real-world cyber labs.
          </p>

        </div>

        <div className="labs-grid">

          <div className="labs-card large">

            <Image
              src="/lab1.png"
              alt="Cyber Lab"
              fill
              className="labs-image"
            />

            <div className="labs-overlay">

              <h3>Ethical Hacking Labs</h3>

              <p>
                Practice penetration testing and
                exploit analysis safely.
              </p>

            </div>

          </div>

          <div className="labs-card">

            <Image
              src="/lab2.png"
              alt="SOC Lab"
              fill
              className="labs-image"
            />

            <div className="labs-overlay">

              <h3>SOC Monitoring</h3>

            </div>

          </div>

          <div className="labs-card">

            <Image
              src="/lab3.png"
              alt="Forensics"
              fill
              className="labs-image"
            />

            <div className="labs-overlay">

              <h3>Digital Forensics</h3>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}