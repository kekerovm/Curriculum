import express from "express"

const app = express()

app.get("*", (req, res, next) => {
  res.send("Hello world")
})

app.listen(3001, () => {
  console.log("Listening on port 3001")
})
