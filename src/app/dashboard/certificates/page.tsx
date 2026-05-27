'use client'

import {

  ShieldCheck,
  Download,
  Eye,

} from 'lucide-react'

const certificates = [

  {
    id:'CSA-EH-2026-001',
    course:'Ethical Hacking',
    issueDate:'12 March 2026',
    status:'Verified',
  },

  {
    id:'CSA-AI-2026-014',
    course:'AI Security',
    issueDate:'02 April 2026',
    status:'Verified',
  },

  {
    id:'CSA-DF-2026-020',
    course:'Digital Forensics',
    issueDate:'18 April 2026',
    status:'Verified',
  },

]

export default function CertificatesPage() {

  return (

    <div className="dashboard-certificates-page">

      {/* HEADER */}

      <div className="dashboard-home-header">

        <h1>

          Certificates 🏆

        </h1>

        <p>

          View, verify and download your
          CyberSchool Academy certificates.

        </p>

      </div>

      {/* GRID */}

      <div className="certificate-grid">

        {

          certificates.map((certificate,index)=>(

            <div
              key={index}
              className="certificate-card"
            >

              {/* TOP */}

              <div className="certificate-top">

                <div className="certificate-icon">

                  <ShieldCheck size={26} />

                </div>

                <div className="certificate-status">

                  {certificate.status}

                </div>

              </div>

              {/* TITLE */}

              <h2>

                {certificate.course}

              </h2>

              {/* ID */}

              <div className="certificate-info">

                <span>

                  Certificate ID

                </span>

                <p>

                  {certificate.id}

                </p>

              </div>

              {/* DATE */}

              <div className="certificate-info">

                <span>

                  Issued On

                </span>

                <p>

                  {certificate.issueDate}

                </p>

              </div>

              {/* BUTTONS */}

              <div className="certificate-actions">

                <button className="certificate-btn secondary-btn">

                  <Eye size={18} />

                  Verify

                </button>

                <button className="certificate-btn primary-btn">

                  <Download size={18} />

                  Download

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  )

}