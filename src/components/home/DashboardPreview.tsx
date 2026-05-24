'use client'

import Image from 'next/image'

export default function DashboardPreview() {

  return (

    <section className="dashboard-section">

      <div className="container-custom">

        <div className="dashboard-header">

          <div className="section-badge">
            Student Experience
          </div>

          <h2>
            Modern Learning Dashboard
          </h2>

          <p>
            Track progress, attend live classes,
            access cyber labs, submit assignments
            and download verified certificates.
          </p>

        </div>

        <div className="dashboard-image-wrapper">

          <div className="dashboard-glow"></div>

          <div className="dashboard-image-card">

            <Image
            src="/dashboard.png"
            alt="Cyber Dashboard"
            width={1400}
            height={900}
            priority
            className="dashboard-image"
/>

          </div>

        </div>

      </div>

    </section>

  )

}