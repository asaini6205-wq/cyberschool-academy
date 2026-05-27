'use client'

import {

  BookOpen,
  Award,
  ShieldCheck,
  Activity,

} from 'lucide-react'

export default function DashboardPage() {

  return (

    <div className="dashboard-home">

      {/* TITLE */}

      <div className="dashboard-home-header">

        <h1>

          Welcome Back 👋

        </h1>

        <p>

          Continue your cybersecurity learning journey.

        </p>

      </div>

      {/* STATS */}

      <div className="dashboard-stats-grid">

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">

            <BookOpen size={24} />

          </div>

          <h2>

            5

          </h2>

          <p>

            Enrolled Courses

          </p>

        </div>

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">

            <Award size={24} />

          </div>

          <h2>

            3

          </h2>

          <p>

            Certificates Earned

          </p>

        </div>

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">

            <ShieldCheck size={24} />

          </div>

          <h2>

            95%

          </h2>

          <p>

            Learning Progress

          </p>

        </div>

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">

            <Activity size={24} />

          </div>

          <h2>

            12

          </h2>

          <p>

            Labs Completed

          </p>

        </div>

      </div>

      {/* COURSES */}

      <div className="dashboard-courses-section">

        <h2>

          Continue Learning

        </h2>

        <div className="dashboard-courses-grid">

          <div className="dashboard-course-card">

            <h3>

              Ethical Hacking

            </h3>

            <p>

              Progress: 72%

            </p>

            <div className="dashboard-progress">

              <div
                className="dashboard-progress-fill"
                style={{
                  width:'72%'
                }}
              />

            </div>

          </div>

          <div className="dashboard-course-card">

            <h3>

              AI Security

            </h3>

            <p>

              Progress: 48%

            </p>

            <div className="dashboard-progress">

              <div
                className="dashboard-progress-fill"
                style={{
                  width:'48%'
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}