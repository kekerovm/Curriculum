import React from "react"
import "../styles/dashboard.scss"

export default (props) => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <a href="#">bla</a>
        </nav>
      </aside>
      <main className="main">
        <nav className="topnav"></nav>
        <div className="pdf">
          <iframe type="image/pdf" src="/files/Sample Brochure.pdf" />
        </div>
      </main>
    </div>
  )
}
