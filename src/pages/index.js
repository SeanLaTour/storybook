import * as React from "react"

const IndexPage = () => {
  return (
    <div style={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>Home</h1>
      <button onClick={() => {
        window.location.href = window.location.href + "/book/";
      }} >Open Book</button>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
