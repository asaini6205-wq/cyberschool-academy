'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Image from 'next/image'

const blogs = [

  {
    title: 'Rise of AI Security Threats in 2026',
    image: '/Hero.png',
    category: 'AI Security',
    date: 'May 2026',
    description:
      'AI systems are becoming new attack surfaces. Learn how cybersecurity is evolving with AI defense systems.',
  },

  {
    title: 'How SOC Analysts Detect Modern Threats',
    image: '/lab1.png',
    category: 'SOC Operations',
    date: 'May 2026',
    description:
      'Explore how security operation centers monitor and detect cyber attacks in real time.',
  },

  {
    title: 'Digital Forensics & Cyber Investigations',
    image: '/lab2.png',
    category: 'Forensics',
    date: 'April 2026',
    description:
      'Understanding cybercrime investigations, memory analysis and forensic workflows.',
  },

  {
    title: 'OSINT Intelligence Gathering Techniques',
    image: '/lab3.png',
    category: 'OSINT',
    date: 'April 2026',
    description:
      'Learn how investigators gather intelligence using public digital footprints and open sources.',
  },

]

export default function BlogPage() {

  return (

    <>

      <Navbar />

      <main className="blog-page">

        {/* HERO */}

        <section className="blog-hero">

          <div className="container-custom">

            <div className="blog-hero-content">

              <div className="section-badge">

                Cyber News & Insights

              </div>

              <h1>

                Cybersecurity
                <span> Knowledge </span>
                Hub

              </h1>

              <p>

                Stay updated with cybersecurity,
                AI security,
                digital forensics,
                ethical hacking and cybercrime trends.

              </p>

            </div>

          </div>

        </section>

        {/* BLOGS */}

        <section className="blog-section">

          <div className="container-custom">

            <div className="blog-grid">

              {

                blogs.map((blog, index) => (

                  <div
                    key={index}
                    className="blog-card"
                  >

                    {/* IMAGE */}

                    <div className="blog-image-wrapper">

                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="blog-image"
                      />

                    </div>

                    {/* CONTENT */}

                    <div className="blog-content">

                      <div className="blog-meta">

                        <span>

                          {blog.category}

                        </span>

                        <p>

                          {blog.date}

                        </p>

                      </div>

                      <h2>

                        {blog.title}

                      </h2>

                      <p className="blog-description">

                        {blog.description}

                      </p>

                      <button className="blog-btn">

                        Read Article

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