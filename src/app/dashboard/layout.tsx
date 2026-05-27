'use client'
import './dashboard.css'
import Sidebar from '@/components/dashboard/Sidebar'
import DashboardTopbar from '@/components/dashboard/DashboardTopbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="dashboard-main-area">

        <DashboardTopbar />

        <div className="dashboard-page-content">

          {children}

        </div>

      </div>

    </div>

  )

}