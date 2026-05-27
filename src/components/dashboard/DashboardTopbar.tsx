'use client'

import {

  Search,
  Bell,

} from 'lucide-react'

export default function DashboardTopbar() {

  return (

    <header className="dashboard-topbar">

      {/* SEARCH */}

      <div className="dashboard-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search dashboard..."
        />

      </div>

      {/* RIGHT */}

      <div className="dashboard-topbar-right">

        <button className="dashboard-notification">

          <Bell size={20} />

        </button>

        <div className="dashboard-user">

          <img
            src="/logo.jpeg"
            alt="User"
          />

          <div>

            <h4>

              Cyber Student

            </h4>

            <p>

              Student Account

            </p>

          </div>

        </div>

      </div>

    </header>

  )

}