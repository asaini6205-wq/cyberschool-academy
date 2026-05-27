'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import { useState } from 'react'

import '@/styles/verify.css'

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

    <>

      <Navbar />

      <main className="verify-page">

        <section className="verify-section">

          <div className="verify-card">

            {/* BADGE */}

            <div className="verify-badge">

              CyberSchool Verification Portal

            </div>

            {/* TITLE */}

            <h1 className="verify-title">

              Verify Certificate

              <br />

              Authenticity

            </h1>

            {/* SUBTITLE */}

            <p className="verify-subtitle">

              Validate CyberSchool Academy certificates
              instantly using our secure verification
              system.

            </p>

            {/* FORM */}

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
                className="verify-button"
              >

                {
                  loading
                    ? 'Checking...'
                    : 'Verify Certificate'
                }

              </button>

            </div>

            {/* RESULT */}

            {

              result && (

                <div className="verify-result">

                  {

                    result.success ? (

                      <div className="certificate-card">

                        {/* TOP */}

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

                        {/* GRID */}

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

                        {/* FOOTER */}

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

        </section>

      </main>

      <Footer />

    </>

  )

}