'use client'

import {

  FileText,
  Upload,
  Clock3,
  CheckCircle2,

} from 'lucide-react'

const assignments = [

  {
    title:'Network Vulnerability Report',
    course:'Ethical Hacking',
    deadline:'10 June 2026',
    status:'Pending',
  },

  {
    title:'AI Threat Analysis',
    course:'AI Security',
    deadline:'14 June 2026',
    status:'Submitted',
  },

  {
    title:'Memory Investigation Task',
    course:'Digital Forensics',
    deadline:'18 June 2026',
    status:'Pending',
  },

]

export default function AssignmentsPage() {

  return (

    <div className="dashboard-assignments-page">

      {/* HEADER */}

      <div className="dashboard-home-header">

        <h1>

          Assignments 📄

        </h1>

        <p>

          Upload and manage your
          cybersecurity assignments.

        </p>

      </div>

      {/* GRID */}

      <div className="assignments-grid">

        {

          assignments.map((assignment,index)=>(

            <div
              key={index}
              className="assignment-card"
            >

              {/* TOP */}

              <div className="assignment-top">

                <div className="assignment-icon">

                  <FileText size={24} />

                </div>

                <div
                  className={
                    assignment.status ===
                    'Submitted'
                      ? 'assignment-status submitted-status'
                      : 'assignment-status pending-status'
                  }
                >

                  {

                    assignment.status ===
                    'Submitted'

                    ? <CheckCircle2 size={15} />

                    : <Clock3 size={15} />

                  }

                  {assignment.status}

                </div>

              </div>

              {/* TITLE */}

              <h2>

                {assignment.title}

              </h2>

              {/* INFO */}

              <div className="assignment-info">

                <div>

                  <span>

                    Course

                  </span>

                  <p>

                    {assignment.course}

                  </p>

                </div>

                <div>

                  <span>

                    Deadline

                  </span>

                  <p>

                    {assignment.deadline}

                  </p>

                </div>

              </div>

              {/* BUTTON */}

              <button className="upload-assignment-btn">

                <Upload size={18} />

                Upload Assignment

              </button>

            </div>

          ))

        }

      </div>

    </div>

  )

}