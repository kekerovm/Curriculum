import React from "react"
import { Link } from "react-router-dom"

export default (props) => {
  return (
    <div className="intro">
      <h3>The 1PlaceCurriculums online curriculum features: </h3>
      <ul>
        <li>Entire curriculum available on a SINGLE page</li>

        <li>User-friendly overview for teachers and students </li>
        <li>
          Students get individual logins and work on their own mastery-based
          pace Differentiation, scaffolding, and interactive mastery-based
          lessons
        </li>
        <li>A time-stamping feature on the activities tracks attendance</li>
        <li>An automated system grades lessons and keeps printable reports</li>
        <li>
          No need for individual folders on your book rack that only collect
          dust.
        </li>
        <li>
          One can learn anywhere that there is an internet-connected computer!
        </li>
      </ul>
      <Link to="/curriculum/1">OneClickCurriculum</Link>
    </div>
  )
}
