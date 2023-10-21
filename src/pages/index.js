import * as React from "react"

const IndexPage = () => {
  return (
    <div style={{backgroundImage: "url(https://u-static.fotor.com/images/text-to-image/result/PRO-a6da605dc2a945e38dd11245d19d6654.jpg)", backgroundSize: "cover", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{textAlign: "center", paddingInline: "20vw"}}>There Once, We Were Many</h1>
      <button onClick={() => {
        window.location.href = window.location.href + "book/";
      }} >Open Book</button>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
