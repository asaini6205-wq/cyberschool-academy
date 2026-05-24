'use client'

import {
  Shield,
  Bug,
  Database,
  BrainCircuit
} from 'lucide-react'

const courses = [

  {
    title: 'Ethical Hacking',
    duration: '6 Months',
    students: '4.2K+ Students',
    icon: Shield,
    description:
      'Master penetration testing, vulnerability analysis and red teaming with real-world labs.'
  },

  {
    title: 'Digital Forensics',
    duration: '4 Months',
    students: '2.1K+ Students',
    icon: Database,
    description:
      'Learn cyber crime investigation, memory analysis, malware tracing and forensic tools.'
  },

  {
    title: 'SOC Analyst',
    duration: '5 Months',
    students: '3.5K+ Students',
    icon: Bug,
    description:
      'Monitor threats, detect attacks and work with SIEM tools like real SOC professionals.'
  },

  {
    title: 'AI Security',
    duration: '3 Months',
    students: '1.8K+ Students',
    icon: BrainCircuit,
    description:
      'Understand AI vulnerabilities, prompt injection, LLM security and future cyber threats.'
  }

]

export default function Courses() {

  return (

    <section className="courses-section">

      <div className="container-custom">

        {/* HEADER */}

        <div className="section-header">

          <div className="section-badge">
            Popular Programs
          </div>

          <h2>
            Industry Ready Cybersecurity Courses
          </h2>

          <p>
            Learn with real-world labs,
            live mentorship,
            internships and placement-focused training.
          </p>

        </div>

        {/* GRID */}

        <div className="courses-grid">

          {
            courses.map((course, index) => {

              const Icon = course.icon

              return (

                <div
                  key={index}
                  className="course-card"
                >

                  <div className="course-top">

                    <div className="course-tag">
                      Bestseller
                    </div>

                    <div className="course-duration">
                      {course.duration}
                    </div>

                  </div>

                  <div className="why-icon">

                    <Icon size={34} />

                  </div>

                  <h3>
                    {course.title}
                  </h3>

                  <p className="course-level">

                    {course.description}

                  </p>

                  <div className="course-students">

                    {course.students}

                  </div>

                  <button className="course-btn">

                    Explore Program

                  </button>

                </div>

              )

            })
          }

        </div>

      </div>

    </section>

  )

}