'use client'

import {
  ShieldCheck,
  BriefcaseBusiness,
  Laptop,
  Award
} from 'lucide-react'

const features = [

  {
    title: 'Live Cyber Labs',
    description:
      'Practice ethical hacking, malware analysis, SOC monitoring and penetration testing in real-world environments.',
    icon: ShieldCheck
  },

  {
    title: 'Internship Access',
    description:
      'Work on live cybersecurity projects and gain industry exposure through internships and mentorship programs.',
    icon: BriefcaseBusiness
  },

  {
    title: 'AI Powered Learning',
    description:
      'Learn through interactive dashboards, smart assessments and AI-assisted cyber simulations.',
    icon: Laptop
  },

  {
    title: 'Industry Certifications',
    description:
      'Earn certificates verified with QR authentication and build a strong cybersecurity portfolio.',
    icon: Award
  }

]

export default function WhyCyberSchool() {

  return (

    <section className="why-section">

      <div className="container-custom">

        {/* HEADER */}

        <div className="section-header">

          <div className="section-badge">
            Why CyberSchool
          </div>

          <h2>
            Learn With Real Industry Experience
          </h2>

          <p>
            Built for students who want practical cybersecurity skills,
            internships, certifications and placements.
          </p>

        </div>

        {/* GRID */}

        <div className="why-grid">

          {
            features.map((feature, index) => {

              const Icon = feature.icon

              return (

                <div
                  key={index}
                  className="why-card"
                >

                  <div className="why-icon">

                    <Icon size={34} />

                  </div>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                </div>

              )

            })
          }

        </div>

      </div>

    </section>

  )

}