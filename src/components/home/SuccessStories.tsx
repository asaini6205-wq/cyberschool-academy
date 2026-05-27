'use client'

import Image from 'next/image'

import { Briefcase } from 'lucide-react'

export default function SuccessStories() {

  const students = [

    {
      name: 'Aarav Sharma',
      role: 'SOC Analyst at TCS',
      image: '/logo.jpeg',
      package: '₹8.5 LPA',
    },

    {
      name: 'Priya Mehta',
      role: 'Cybersecurity Intern at Deloitte',
      image: '/logo.jpeg',
      package: '₹6.2 LPA',
    },

    {
      name: 'Rohan Verma',
      role: 'Penetration Tester at Infosys',
      image: '/logo.jpeg',
      package: '₹9.1 LPA',
    },

  ]

  return (

    <section className="success-section">

      <div className="container-custom">

        <div className="success-header">

          <div className="section-badge">

            Placements & Success

          </div>

          <h2 className="success-title">

            Students Building
            <span> Real Careers</span>

          </h2>

          <p className="success-description">

            Real internships,
            placements and
            cybersecurity projects
            helping students launch
            industry-ready careers.

          </p>

        </div>

        <div className="success-grid">

          {

            students.map((student, index) => (

              <div
                key={index}
                className="success-card"
              >

                <div className="success-image-wrapper">

                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="success-image"
                  />

                </div>

                <div className="success-content">

                  <div className="success-package">

                    <Briefcase size={16} />

                    {student.package}

                  </div>

                  <h3>

                    {student.name}

                  </h3>

                  <p>

                    {student.role}

                  </p>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  )

}