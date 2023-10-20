import { indexOf } from "lodash"
import * as React from "react"
import backgroundImage from "../images/fotor-ai-20231019185725.jpg"
import "../styles/defaultStyles.css"

const currentPage = {
    pageBackground: backgroundImage,
    pageText: ["Are you like me?", "Do you wonder what's out there?", "If you're alone..."]
}

const BookPage = () => {
    if(typeof window !== 'undefined') {
        window.addEventListener("load",function() {
            setTimeout(function(){
                // This hides the address bar:
                window.scrollTo(0, 1);
            }, 0);
        });
    }

    return (
        <div style={{height: "100vh", width: "100vw", backgroundColor: "black", padding: "1rem"}}>
            <img id="background-image" style={{position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh"}} src={backgroundImage}></img>
            <div id="page-content-box" className="page-content" style={{position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h3 id="page-content-text" style={{backgroundColor: "#222", borderRadius: "10px", padding: "1rem", opacity: ".7", color: "white"}}>Are you like me?</h3>
            </div>
            <button style={{position: "fixed", padding: ".25rem", opacity: .7, borderRadius: "2px", backgroundColor: "#222", color: "white", bottom: "0px", right: "0px"}} onClick={turnPage} >Next</button>
            <button style={{position: "fixed", padding: ".25rem", opacity: .7, borderRadius: "2px", backgroundColor: "#222", color: "white", bottom: "0px", left: "0px"}} onClick={() => {
                window.location.reload()
                }} >Home</button>
        </div>
    )
}

function idleImageAnimation() {
    const imageElement = document.getElementById("background-image");
    setTimeout(() => {
        imageElement.style.width = "125vw";
        imageElement.style.height = "125vh";
        imageElement.style.left = "-12.5vw";
        imageElement.style.top = "-10vh";
    }, 500);
}

function turnPage() {
    idleImageAnimation();
    const pageElement = document.getElementById("page-content-box");
    const textElement = document.getElementById("page-content-text");
    const textIndex = currentPage.pageText.indexOf(textElement.innerHTML)
    console.log(textElement.innerHTML, textIndex)
    if(currentPage.pageText[textIndex + 1]) {
        pageElement.classList.remove("page-content");
        setTimeout(() => {
            textElement.innerHTML = currentPage.pageText[textIndex + 1];
            pageElement.classList.add("page-content");
        }, 1);
    }
}



export default BookPage

export const Head = () => <title>Home Page</title>
