import Link from 'next/link'

export default function VerifyCTA() {

  return (

    <section className="verify-cta">

      <div className="container-custom">

        <div className="verify-cta-card">

          <div>

            <div className="verify-cta-badge">
              Verification Portal
            </div>

            <h2>
              Verify Certificates
              <br />
              Instantly
            </h2>

            <p>
              Validate CyberSchool Academy
              certificates using our secure
              verification system.
            </p>

          </div>

          <Link href="/verify">

            <button className="verify-cta-btn">
              Open Verification Portal
            </button>

          </Link>

        </div>

      </div>

    </section>

  )

}