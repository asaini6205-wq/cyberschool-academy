'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import {
  Shield,
  Database,
  Search,
  BrainCircuit,
  Scale,
  Bug,
  Building2,
  GraduationCap,
} from 'lucide-react'

const departments = [

  {
    title: 'Cyber Security',
    icon: Shield,
    description:
      'Advanced cybersecurity training covering SOC operations, threat intelligence and defense systems.',
  },

  {
    title: 'Ethical Hacking',
    icon: Bug,
    description:
      'Hands-on penetration testing, vulnerability assessment and red team operations.',
  },

  {
    title: 'Digital Forensics',
    icon: Database,
    description:
      'Cybercrime investigation, memory analysis, malware tracing and forensic operations.',
  },

  {
    title: 'OSINT Intelligence',
    icon: Search,
    description:
      'Open-source intelligence gathering, cyber investigations and digital profiling.',
  },

  {
    title: 'AI Security',
    icon: BrainCircuit,
    description:
      'Modern AI vulnerabilities, LLM security, prompt injection and AI cyber defense.',
  },

  {
    title: 'Cyber Law',
    icon: Scale,
    description:
      'Cyber law frameworks, IT Act, digital evidence and cybercrime legal procedures.',
  },

  {
    title: 'Offline Unit',
    icon: Building2,
    description:
      'Physical cybersecurity labs, workshops, seminars and offline practical sessions.',
  },

  {
    title: 'University Programs',
    icon: GraduationCap,
    description:
      'Cybersecurity courses and training programs for colleges and universities.',
  },

]

export default function DepartmentsPage() {

  return (

    <>

      <Navbar />

      <main className="departments-page">

        {/* HERO */}

        <section className="departments-hero">

          <div className="container-custom">

            <div className="departments-hero-content">

              <div className="section-badge">

                Academy Departments

              </div>

              <h1>

                Specialized
                <span> Cybersecurity </span>
                Departments

              </h1>

              <p>

                CyberSchool Academy provides
                specialized departments focused on
                practical cybersecurity training,
                investigations,
                AI security and industry readiness.

              </p>

            </div>

          </div>

        </section>

        {/* DEPARTMENTS */}

        <section className="departments-section">

          <div className="container-custom">

            <div className="departments-grid">

              {

                departments.map((department, index) => {

                  const Icon = department.icon

                  return (

                    <div
                      key={index}
                      className="department-card"
                    >

                      <div className="department-icon">

                        <Icon size={30} />

                      </div>

                      <h2>

                        {department.title}

                      </h2>

                      <p>

                        {department.description}

                      </p>

                      <button className="department-btn">

                        Explore Department

                      </button>

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