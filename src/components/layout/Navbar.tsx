'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

  return (

    <nav
      className="
        sticky
        top-0
        z-50
        border-b
        border-[var(--border)]
        bg-[var(--bg)]/80
        backdrop-blur-xl
      "
    >

      <div
        className="
          container-custom
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* LEFT */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/logo.jpeg"
            alt="CyberSchool"
            width={44}
            height={44}
            className="rounded-xl object-cover"
          />

          <div>

            <h1
              className="
                text-2xl
                font-black
                tracking-tight
              "
            >
              CyberSchool
            </h1>

            <p
              className="
                text-sm
                text-[var(--text-light)]
              "
            >
              Cybersecurity Academy
            </p>

          </div>

        </Link>

        {/* CENTER */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-10
            font-medium
            text-[15px]
          "
        >

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="hover:text-blue-600 transition"
          >
            Courses
          </Link>

          <Link
            href="/events"
            className="hover:text-blue-600 transition"
          >
            Events
          </Link>

          <Link
            href="/placements"
            className="hover:text-blue-600 transition"
          >
            Placements
          </Link>

          <Link
            href="/verify"
            className="hover:text-blue-600 transition"
          >
            Verify
          </Link>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <Link href="/login">

            <button className="secondary-btn">
              Login
            </button>

          </Link>

          <Link href="/courses">

            <button className="primary-btn px-6">
              Enroll Now
            </button>

          </Link>

        </div>

      </div>

    </nav>

  )
}