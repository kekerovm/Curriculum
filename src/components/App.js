import React from "react"
//import { Provider } from "react-redux"
//import store from "../redux/store"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../styles/base.scss"
import Curriculum from "./Curriculum"
import Home from "./Home"

export default (props) => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home}></Route>
        {/* <Curriculum match={{ params: { id: 1 } }} /> */}
        <Route path="/curriculum/:id" component={Curriculum} />
      </div>
    </Router>
  )
}
