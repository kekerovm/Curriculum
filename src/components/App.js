import React from "react"
//import { Provider } from "react-redux"
//import store from "../redux/store"
import { BrowserRouter as Router } from "react-router-dom"
import "../styles/base.scss"
import Dashboard from "./Curriculum"

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Dashboard match={{ params: { id: 1 } }} />
      </div>
    </Router>
  )
}

export default App
