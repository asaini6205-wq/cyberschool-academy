'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname()

  const links = [

    {
      name: 'Home',
      path: '/',
    },

    {
      name: 'Courses',
      path: '/courses',
    },

    {
      name: 'Departments',
      path: '/departments',
    },

    {
      name: 'Events',
      path: '/events',
    },

    {
      name: 'Placements',
      path: '/placements',
    },

    {
      name: 'Verify',
      path: '/verify',
    },

    {
      name: 'Blog',
      path: '/blog',
    },

    {
      name: 'Contact',
      path: '/contact',
    },

  ]

  return (

    <header className="main-navbar">

      <div className="main-navbar-container">

        {/* LOGO */}

        <Link
          href="/"
          className="main-logo"
        >

          <img
            src="/logo.jpeg"
            alt="CyberSchool"
          />

          <div>

            <h2>CyberSchool</h2>

            <p>Cybersecurity Academy</p>

          </div>

        </Link>

        {/* LINKS */}

        <nav className="main-nav-links">

          {
            links.map((item) => (

              <Link
                key={item.path}
                href={item.path}
                className={
                  pathname === item.path
                    ? 'nav-link active-nav'
                    : 'nav-link'
                }
              >

                {item.name}

              </Link>

            ))
          }

        </nav>

        {/* ACTIONS */}

        <div className="main-nav-actions">

          <Link
            href="/login"
            className="login-nav-btn"
          >

            Login

          </Link>

          <Link
            href="/courses"
            className="enroll-nav-btn"
          >

            Enroll Now

          </Link>

        </div>

      </div>

    </header>

  )

}