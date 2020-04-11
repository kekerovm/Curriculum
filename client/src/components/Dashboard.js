import React from "react"
import "../styles/dashboard.scss"

export default (props) => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <div></div>
          <a href="#">CURRICULUM</a>
          <div>
            <ul>
              <li>
                a href="/">Art
                <a />
              </li>
              <li>
                a href="/">Biology
                <a />
              </li>
              <li>
                a href="/">Business Studies
                <a />
              </li>
              <li>
                a href="/">Chemistry
                <a />
              </li>
              <li>
                a href="/">Computer Science
                <a />
              </li>
              <li>
                a href="/">Design and Technology
                <a />
              </li>
              <li>
                a href="/">Economics
                <a />
              </li>
              <li>
                a href="/">English
                <a />
              </li>
              <li>
                a href="/">Foreign Languages
                <a />
              </li>
              <li>
                a href="/">Information Technology
                <a />
              </li>
              <li>
                a href="/">Mathematics
                <a />
              </li>
              <li>
                a href="/">Music
                <a />
              </li>
              <li>
                a href="/">Physics
                <a />
              </li>
              <li>
                a href="/">Psychology
                <a />
              </li>
              <li>
                a href="/">Sociology
                <a />
              </li>
            </ul>
          </div>
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
