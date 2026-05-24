'use client'

import {
  LayoutDashboard,
  BookOpen,
  ShieldCheck,
  Calendar,
  Settings,
  Bell,
  Search,
  Trophy,
  Clock3,
  TrendingUp
} from 'lucide-react'

export default function DashboardPage() {

  return (

    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--bg)',
      }}
    >

      {/* SIDEBAR */}
      <aside
        style={{
          width: '280px',
          borderRight: '1px solid var(--border)',
          padding: '32px 22px',
          background: 'var(--bg-secondary)',
        }}
      >

        {/* LOGO */}
        <div
          style={{
            marginBottom: '50px',
          }}
        >

          <h1
            style={{
              fontSize: '30px',
              fontWeight: '800',
              marginBottom: '6px',
            }}
          >
            CyberSchool
          </h1>

          <p
            style={{
              color: 'var(--text-light)',
            }}
          >
            Student Dashboard
          </p>

        </div>

        {/* MENU */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >

          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Overview"
            active
          />

          <SidebarItem
            icon={<BookOpen size={20} />}
            text="My Courses"
          />

          <SidebarItem
            icon={<ShieldCheck size={20} />}
            text="Certificates"
          />

          <SidebarItem
            icon={<Calendar size={20} />}
            text="Events"
          />

          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
          />

        </div>

      </aside>

      {/* MAIN */}
      <section
        style={{
          flex: 1,
          padding: '34px',
        }}
      >

        {/* TOPBAR */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >

          <div>

            <h1
              style={{
                fontSize: '40px',
                fontWeight: '800',
                marginBottom: '8px',
              }}
            >
              Welcome Back 👋
            </h1>

            <p
              style={{
                color: 'var(--text-light)',
              }}
            >
              Continue your cybersecurity journey
            </p>

          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >

            {/* SEARCH */}
            <div
              style={{
                width: '300px',
                height: '54px',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '0 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--bg-secondary)',
              }}
            >

              <Search size={18} />

              <input
                placeholder="Search courses..."
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  color: 'var(--text)',
                }}
              />

            </div>

            {/* NOTIFICATION */}
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-secondary)',
              }}
            >

              <Bell size={20} />

            </div>

          </div>

        </div>

        {/* STATS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(240px,1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >

          <StatCard
            icon={<BookOpen size={24} />}
            title="Courses Enrolled"
            value="05"
          />

          <StatCard
            icon={<ShieldCheck size={24} />}
            title="Certificates"
            value="02"
          />

          <StatCard
            icon={<TrendingUp size={24} />}
            title="Current Rank"
            value="#41"
          />

          <StatCard
            icon={<Clock3 size={24} />}
            title="Hours Learned"
            value="148h"
          />

        </div>

        {/* CONTENT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '24px',
          }}
        >

          {/* LEFT */}
          <div
            className="glass-card"
          >

            <div
              style={{
                marginBottom: '26px',
              }}
            >

              <h2
                style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  marginBottom: '8px',
                }}
              >
                Continue Learning
              </h2>

              <p
                style={{
                  color: 'var(--text-light)',
                }}
              >
                Resume your latest cybersecurity modules
              </p>

            </div>

            <CourseProgress
              title="Ethical Hacking Bootcamp"
              progress="72%"
            />

            <CourseProgress
              title="Advanced Penetration Testing"
              progress="41%"
            />

            <CourseProgress
              title="Digital Forensics"
              progress="88%"
            />

          </div>

          {/* RIGHT */}
          <div
            className="glass-card"
          >

            <div
              style={{
                marginBottom: '26px',
              }}
            >

              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '8px',
                }}
              >
                Achievements
              </h2>

              <p
                style={{
                  color: 'var(--text-light)',
                }}
              >
                Your recent milestones
              </p>

            </div>

            <Achievement
              title="Top Performer"
              subtitle="Ranked in top 5%"
            />

            <Achievement
              title="CTF Winner"
              subtitle="Won March CTF event"
            />

            <Achievement
              title="Certified Analyst"
              subtitle="Completed SOC training"
            />

          </div>

        </div>

      </section>

    </main>

  )
}

/* SIDEBAR ITEM */

function SidebarItem({
  icon,
  text,
  active = false
}: any) {

  return (

    <div
      style={{
        height: '56px',
        borderRadius: '16px',

        background:
          active
            ? 'linear-gradient(135deg,#2563eb,#3b82f6)'
            : 'transparent',

        color:
          active
            ? 'white'
            : 'var(--text)',

        display: 'flex',
        alignItems: 'center',
        gap: '14px',

        padding: '0 18px',

        cursor: 'pointer',

        fontWeight: '600',
      }}
    >

      {icon}

      {text}

    </div>

  )
}

/* STAT CARD */

function StatCard({
  icon,
  title,
  value
}: any) {

  return (

    <div
      className="glass-card"
    >

      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '16px',
          background:
            'linear-gradient(135deg,#2563eb,#3b82f6)',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          color: 'white',

          marginBottom: '18px',
        }}
      >

        {icon}

      </div>

      <p
        style={{
          color: 'var(--text-light)',
          marginBottom: '10px',
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: '34px',
          fontWeight: '800',
        }}
      >
        {value}
      </h2>

    </div>

  )
}

/* COURSE */

function CourseProgress({
  title,
  progress
}: any) {

  return (

    <div
      style={{
        marginBottom: '24px',
      }}
    >

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >

        <h3
          style={{
            fontWeight: '600',
          }}
        >
          {title}
        </h3>

        <span
          style={{
            color: '#2563eb',
            fontWeight: '700',
          }}
        >
          {progress}
        </span>

      </div>

      <div
        style={{
          width: '100%',
          height: '10px',
          borderRadius: '999px',
          background: '#e2e8f0',
          overflow: 'hidden',
        }}
      >

        <div
          style={{
            width: progress,
            height: '100%',
            background:
              'linear-gradient(135deg,#2563eb,#3b82f6)',
          }}
        />

      </div>

    </div>

  )
}

/* ACHIEVEMENT */

function Achievement({
  title,
  subtitle
}: any) {

  return (

    <div
      style={{
        padding: '18px',
        border: '1px solid var(--border)',
        borderRadius: '18px',
        marginBottom: '16px',

        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >

      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '14px',

          background:
            'linear-gradient(135deg,#2563eb,#3b82f6)',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          color: 'white',
        }}
      >

        <Trophy size={22} />

      </div>

      <div>

        <h4
          style={{
            fontWeight: '700',
            marginBottom: '4px',
          }}
        >
          {title}
        </h4>

        <p
          style={{
            color: 'var(--text-light)',
            fontSize: '14px',
          }}
        >
          {subtitle}
        </p>

      </div>

    </div>

  )
}