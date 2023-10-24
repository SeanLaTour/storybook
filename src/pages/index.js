import * as React from "react"
import "../styles/defaultStyles.css"

const IndexPage = () => {
  return (
    <div style={{backgroundImage: "url(https://u-static.fotor.com/images/text-to-image/result/PRO-53a560aa2f8b42e1a95d41c043ac1540.jpg)", backgroundSize: "cover", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{textAlign: "center", paddingInline: "20vw", color: "white"}}>The Empty Hide</h1>
      <button onClick={() => {
        window.location.href = window.location.href + "book/";
      }} >Open Book</button>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
