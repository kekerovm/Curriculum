import React, { useEffect, useState, Fragment } from "react"
import axios from "axios"

function Section(props) {
  const [sectionName, setSectionName] = useState("")
  const [components, setComponents] = useState([])

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/sections/${props.match.params.id}?_embed=components`
      )
      .then((resp) => {
        const { data } = resp
        setSectionName(data.name)
        setComponents(data.components)
      })
  }, [props.match.params])

  return (
    <div>
      <h1>{sectionName}</h1>
      {components.map((comp) => (
        <Fragment key={"comp" + comp.id}>
          <h2>{comp.title}</h2>
          {comp.content.map((par, i) => (
            <p key={"par" + comp.id + i}>{par}</p>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default Section
