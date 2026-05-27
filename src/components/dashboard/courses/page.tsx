'use client'

import {

  BookOpen,
  Clock3,
  PlayCircle,

} from 'lucide-react'

const courses = [

  {
    title:'Ethical Hacking',
    instructor:'Rahul Sharma',
    duration:'6 Months',
    progress:'72%',
  },

  {
    title:'AI Security',
    instructor:'Aman Verma',
    duration:'3 Months',
    progress:'48%',
  },

  {
    title:'Digital Forensics',
    instructor:'Neha Singh',
    duration:'4 Months',
    progress:'91%',
  },

]

export default function DashboardCoursesPage() {

  return (

    <div className="dashboard-courses-page">

      {/* HEADER */}

      <div className="dashboard-home-header">

        <h1>

          My Courses 📚

        </h1>

        <p>

          Continue learning and track
          your cybersecurity progress.

        </p>

      </div>

      {/* GRID */}

      <div className="student-courses-grid">

        {

          courses.map((course,index)=>(

            <div
              key={index}
              className="student-course-card"
            >

              {/* TOP */}

              <div className="student-course-top">

                <div className="student-course-icon">

                  <BookOpen size={24} />

                </div>

                <div className="student-course-progress">

                  {course.progress}

                </div>

              </div>

              {/* TITLE */}

              <h2>

                {course.title}

              </h2>

              {/* INFO */}

              <div className="student-course-info">

                <div>

                  <span>

                    Instructor

                  </span>

                  <p>

                    {course.instructor}

                  </p>

                </div>

                <div>

                  <span>

                    Duration

                  </span>

                  <p>

                    {course.duration}

                  </p>

                </div>

              </div>

              {/* PROGRESS */}

              <div className="student-progress-wrapper">

                <div className="student-progress-bar">

                  <div
                    className="student-progress-fill"
                    style={{
                      width:course.progress
                    }}
                  />

                </div>

              </div>

              {/* BUTTON */}

              <button className="continue-course-btn">

                <PlayCircle size={18} />

                Continue Learning

              </button>

            </div>

          ))

        }

      </div>

    </div>

  )

}