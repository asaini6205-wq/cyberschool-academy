'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { useRouter } from 'next/navigation'

import {

  LayoutDashboard,
  BookOpen,
  Award,
  FileText,
  CalendarDays,
  Settings,
  LogOut,

} from 'lucide-react'

import { supabase } from '@/lib/supabase'

const links = [

  {
    title:'Overview',
    href:'/dashboard',
    icon:LayoutDashboard,
  },

  {
    title:'My Courses',
    href:'/dashboard/courses',
    icon:BookOpen,
  },

  {
    title:'Certificates',
    href:'/dashboard/certificates',
    icon:Award,
  },

  {
    title:'Assignments',
    href:'/dashboard/assignments',
    icon:FileText,
  },

  {
    title:'Events',
    href:'/dashboard/events',
    icon:CalendarDays,
  },

  {
    title:'Settings',
    href:'/dashboard/settings',
    icon:Settings,
  },

]

export default function Sidebar() {

  const pathname = usePathname()

  const router = useRouter()

  /* =====================================
     LOGOUT
  ===================================== */

  async function handleLogout() {

    const {

      error,

    } = await supabase.auth.signOut()

    if (error) {

      alert(error.message)

      return

    }

    router.push('/login')

    router.refresh()

  }

  return (

    <aside className="dashboard-sidebar">

      {/* LOGO */}

      <div>

        <div className="dashboard-logo">

          <img
            src="/logo.jpeg"
            alt="CyberSchool"
          />

          <div>

            <h2>

              CyberSchool

            </h2>

            <p>

              Student Portal

            </p>

          </div>

        </div>

        {/* NAVIGATION */}

        <nav className="dashboard-nav">

          {

            links.map((item) => {

              const Icon = item.icon

              return (

                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? 'dashboard-link active-dashboard-link'
                      : 'dashboard-link'
                  }
                >

                  <Icon size={20} />

                  {item.title}

                </Link>

              )

            })

          }

        </nav>

      </div>

      {/* LOGOUT */}

      <button
        onClick={handleLogout}
        className="dashboard-logout"
      >

        <LogOut size={18} />

        Logout

      </button>

    </aside>

  )

}