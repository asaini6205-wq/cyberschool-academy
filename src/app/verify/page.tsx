'use client'

import { useState } from 'react'

export default function VerifyPage() {

  const [certificateId, setCertificateId] = useState('')

  const [result, setResult] = useState<any>(null)

  const [loading, setLoading] = useState(false)

  async function handleVerify() {

    if (!certificateId) return

    setLoading(true)

    setResult(null)

    try {

      const res = await fetch('/api/verify', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          certificateId,
        }),
      })

      const data = await res.json()

      setResult(data)

    } catch (error) {

      console.log(error)

      setResult({
        success: false,
      })

    }

    setLoading(false)
  }

  return (

    <main className="verify-page">

      <div className="verify-container">

        <div className="verify-badge">
          CyberSchool Verification Portal
        </div>

        <h1 className="verify-title">
          Verify Certificate
          <br />
          Authenticity
        </h1>

        <p className="verify-description">
          Validate CyberSchool Academy certificates
          instantly using our secure verification
          system.
        </p>

        <div className="verify-form">

          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) =>
              setCertificateId(e.target.value)
            }
            className="verify-input"
          />

          <button
            onClick={handleVerify}
            className="verify-btn"
          >
            {
              loading
                ? 'Checking...'
                : 'Verify Certificate'
            }
          </button>

        </div>

        {
          result && (

            <div className="verify-result">

              {
                result.success ? (

                  <div className="certificate-card">

                    <div className="certificate-top">

                      <div>

                        <div className="verified-badge">
                          VERIFIED CERTIFICATE
                        </div>

                        <h2>
                          CyberSchool Academy
                        </h2>

                        <p className="certificate-subtitle">
                          Official Certification
                          Verification Record
                        </p>

                      </div>

                      <div className="certificate-status">
                        VALID
                      </div>

                    </div>

                    <div className="certificate-divider"></div>

                    <div className="certificate-grid">

                      <div className="certificate-item">

                        <span>
                          Student Name
                        </span>

                        <h3>
                          {
                            result.certificate
                              .student_name
                          }
                        </h3>

                      </div>

                      <div className="certificate-item">

                        <span>
                          Course
                        </span>

                        <h3>
                          {
                            result.certificate
                              .course_name
                          }
                        </h3>

                      </div>

                      <div className="certificate-item">

                        <span>
                          Certificate ID
                        </span>

                        <h3>
                          {
                            result.certificate
                              .certificate_id
                          }
                        </h3>

                      </div>

                      <div className="certificate-item">

                        <span>
                          Completion Date
                        </span>

                        <h3>
                          {
                            result.certificate
                              .completion_date
                          }
                        </h3>

                      </div>

                    </div>

                    <div className="certificate-footer">

                      <div>

                        <span>
                          Issued By
                        </span>

                        <p>
                          CyberSchool Academy
                        </p>

                      </div>

                      <div>

                        <span>
                          Security Status
                        </span>

                        <p className="secure-text">
                          Digitally Verified
                        </p>

                      </div>

                    </div>

                  </div>

                ) : (

                  <div className="invalid-result">

                    <div className="status-invalid">
                      INVALID
                    </div>

                    <h2>
                      Certificate Not Found
                    </h2>

                    <p>
                      This certificate ID does not
                      exist in our verification
                      database.
                    </p>

                  </div>

                )
              }

            </div>

          )
        }

      </div>

    </main>

  )

}