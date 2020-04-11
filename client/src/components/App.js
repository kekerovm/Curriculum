import React, { Suspense } from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../styles/base.scss"

import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"
import SectionFive from "./SectionFive"
import SectionSix from "./SectionSix"
import SectionSeven from "./SectionSeven"

const Dashboard = React.lazy(() => import("./Dashboard"))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <Suspense fallback={<p>loading...</p>}>
            <Route path="/" component={Dashboard} />
          </Suspense>
          <div>
            <ul>
              <li>
                <Link to="/">Section One</Link>
              </li>
              <li>
                <Link to="/">Section Two</Link>
              </li>
              <li>
                <Link to="/">Section Three</Link>
              </li>
              <li>
                <Link to="/">Section Four</Link>
              </li>
              <li>
                <Link to="/">Section Five</Link>
              </li>
              <li>
                <Link to="/">Section Six</Link>
              </li>
              <li>
                <Link to="/">Section Six</Link>
              </li>
            </ul>
            <li>
              <Route exact path="/" component={SectionOne} />
            </li>
            <Route path="/section two" component={SectionTwo} />
            <Route path="/section three" component={SectionThree} />
            <Route path="/section four" component={SectionFour} />
            <Route path="/section five" component={SectionFive} />
            <Route path="/section six" component={SectionSix} />
            <Route path="/section seven" component={SectionSeven} />
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App

/* 
App.js
client > src > components > App.js

import React from "react"
import { useExample } from '../hooks'

export default props => {
  const { foo } = useExample()

  return <h1>Hello World {foo}</h1>
}


app.js

const express = require('express')

const app = express()
const port = 3456

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/user/:id", (req, res, next) => {
  console.log(req.params.id)
  res.send("foo")
})

app.get("/user, (req, res, next) => {
  console.log(req.qeury.id)
  res.send("foo")
})

app.use("*" (req, res, next) => {
  console.log(req.body.foo)
  req.send("done")
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})

app.js
server > app.js

const express = require('express')
const exampleRoutes = require("./routes/example")

const app = express()
cost port = 3001

app.use (express.urlencoded({ extended: false }))
app.use (express.json())
  
app.use(exampleRoutes)

app.listen (port, () => {
  console.log(`Listening on port ${port}`)
})

user.js
routes > user.js

const express = require('express')
const router = express.Router()

const user = []
let userId = 1

router.post("/", (req, res, next) => {
  userId++
  next()
})

router.post("/", (req, res, next) => {
  users.push({ ...req.body, id: userId })
  res.json({
    id: userId
    message: "user Added"
})
console.log(userId)
})

router.get("/:id", (req, res, next) => {
  const users = users.find(u => u.id == req.params.id)
  res.json = (user)
})

module.exports = router

example.js
server > routes > example.js

const express = require('express')
const router = express.Router()

router.post("/", (req, res, next) => {
  res.send("hello world")

module.exports = router

index.js
client > src > redux > ducks > example > index.js

import { useEffect } from 'react'
import { useSelectors, useDispatch } from 'react-redux'
import axios from 'axios'

const GET_EXAMPLE = 'ex/GET_EXAMPLE'

const initialState = {
  foo = 'bar'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMPLE:
      return { ...state, foo: action.payload }
    default:
      return state
  }
}

function getExample() {
  return dispatch => {
    axios.get('/api').then(res => {
      const data = res.data
      dispatch({
        type: GET_EXAMPLE,
        payload: data.message
      })
    })
  }
}

export function useExample() {
  const dispatch = useDispatch()
  const foo = useSelector(appState => appState.exampleState.foo)
  const get = () => dispatch(getExample())

  return { foo, get }
  )
}

index.js
client > src > hooks > index.js

export { useExample } from '../redux/ducks/example'

index.js
client > src > redux > ducks > index.js

export { default as exampleState } from './example'

index.js
client > src > index.js

import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/base.css"
import App from './components/App'
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(<Provider store={store}><App />, document.getElementById("root"))

serviceWorker.unregister()
*/
