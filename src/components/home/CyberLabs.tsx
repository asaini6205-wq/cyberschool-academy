'use client'

import Image from 'next/image'

export default function CyberLabs() {

  return (

    <section className="labs-section">

      <div className="container-custom">

        <div className="labs-wrapper">

          {/* LEFT */}

          <div>

            <div className="section-badge">
              Practical Training
            </div>

            <h2 className="labs-title">

              Learn Inside
              <br />

              Real Cyber Labs

            </h2>

            <p className="labs-text">

              Practice ethical hacking,
              malware analysis,
              vulnerability assessment,
              SOC monitoring and digital
              forensics through live
              interactive cyber labs.

            </p>

            <div className="labs-list">

              <div className="labs-item">
                Live Attack Simulations
              </div>

              <div className="labs-item">
                AI Security Testing
              </div>

              <div className="labs-item">
                Red Team Operations
              </div>

              <div className="labs-item">
                Malware Investigation
              </div>

            </div>

            <button className="hero-primary-btn">

              Explore Labs

            </button>

          </div>

          {/* RIGHT */}

          <div className="labs-image-wrapper">

            <div className="labs-image-card">

              <Image
                src="/lab1.jpg"
                alt="Cyber Lab"
                fill
                className="labs-image"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}