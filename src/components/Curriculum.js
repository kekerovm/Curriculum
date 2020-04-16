import React, { useState, useEffect } from "react"
import "../styles/dashboard.scss"
import { Route, Link } from "react-router-dom"
import Section from "./Section"
import axios from "axios"

export default (props) => {
  const [currName, setCurrName] = useState("")
  const [sections, setSections] = useState([])

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/currs/${props.match.params.id}?_embed=sections`
      )
      .then((resp) => {
        const { data } = resp
        console.log(data)
        setCurrName(data.name)
        setSections(data.sections)
      })
  }, [props.match.params])

  return (
    <div className="dashboard">
      <aside className="sidebar">
        {sections.map((section) => (
          <div key={"section" + section.id}>
            <Link to={"/section/" + section.id}>{section.name}</Link>
          </div>
        ))}
      </aside>
      <main className="main">
        <nav className="topnav">{currName}</nav>
        <div className="pdf">
          <Route path="/section/:id" component={Section} />
        </div>
      </main>
    </div>
  )
}
