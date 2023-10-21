import * as React from "react"
import pageBackground1 from "../images/fotor-ai-20231019185725.jpg"
import pageBackground2 from "../images/fotor-ai-20231019234522.jpg"
import "../styles/defaultStyles.css"

let animationToggle = true;

const storyBoard = [
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg",
        pageText: ["Are you like me?", "Do you wonder...", "If you're alone...?"],
        pageNumber: 0
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-24a48eb3593f49d8bab90c6c57365d2f.jpg",
        pageText: ["I want to tell you a story", "From long, long ago"],
        pageNumber: 1
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-7cba7d99b8984256ba3859de36787f23.jpg",
        pageText: ["I don't have any stuff for here...", "Sooo.. what's up Jules?", "You're like really pretty and stuff"],
        pageNumber: 2
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-24a48eb3593f49d8bab90c6c57365d2f.jpg",
        pageText: ["Miss you, pretty", "Okay...", "The end haha"],
        pageNumber: 3
    }
]

const BookPage = () => {
    const [currentPage, setCurrentPage] = React.useState({
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg",
        pageText: ["Are you like me?", "Do you wonder...", "If you're alone...?"],
        pageNumber: 0
    });
    const [currentBackground, setCurrentBackground] = React.useState("https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg");
    const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
    const [currentPageText, setCurrentPageText] = React.useState("Are you like me?")
    React.useEffect(() => {
        setTimeout(() => {

        }, 1000);
        // setCurrentPage([storyBoard[currentPageIndex + 1]]);
        if(typeof window !== 'undefined') {
            window.addEventListener("load",function() {
                setTimeout(function() {
                    window.scrollTo(0, 1);
                }, 1000);
            });
        }
        
    },[currentPage]);



    return (
        <div style={{height: "100vh", width: "100vw", backgroundColor: "black", padding: "1rem"}}>
            <img id="background-image" style={{position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh"}} src={currentBackground}></img>
            <div id="page-content-box" className="page-content" style={{position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h3 id="page-content-text" style={{backgroundColor: "#222", borderRadius: "10px", padding: "1rem", opacity: ".7", color: "white"}}>{currentPageText}</h3>
            </div>
            <button style={{position: "fixed", padding: ".25rem", opacity: .7, borderRadius: "2px", backgroundColor: "#222", color: "white", bottom: "0px", right: "0px"}} onClick={() => {
                turnPage(currentPage, setCurrentPage, setCurrentPageIndex, storyBoard, setCurrentPageText)
            }} >Next</button>
            <button style={{position: "fixed", padding: ".25rem", opacity: .7, borderRadius: "2px", backgroundColor: "#222", color: "white", bottom: "0px", left: "0px"}} onClick={() => {
                window.location.reload()
                }}>Home</button>
        </div>
    )
}

function idleImageAnimation() {
    const imageElement = document.getElementById("background-image");

    if(animationToggle) {
        setTimeout(() => {
            imageElement.style.width = "125vw";
            imageElement.style.height = "125vh";
            imageElement.style.left = "-12.5vw";
            imageElement.style.top = "-10vh";
        }, 500);
    }
    else {
        setTimeout(() => {
            imageElement.style.width = "100vw";
            imageElement.style.height = "100vh";
            imageElement.style.left = "0vw";
            imageElement.style.top = "0vh";
        }, 2000);
    }

    animationToggle = !animationToggle;
}

function turnPage(oldCurrentPage, setCurrentPage, setCurrentPageIndex, storyBoard, setCurrentPageText) {
    const currentPage = oldCurrentPage;
    idleImageAnimation();
    const pageElement = document.getElementById("page-content-box");
    const imgElement = document.getElementById("background-image");
    const textElement = document.getElementById("page-content-text");
    const textIndex = textElement.innerHTML.length ? currentPage.pageText.indexOf(textElement.innerHTML) : 0;
    
    if(currentPage.pageText[textIndex + 1]) {
        pageElement.classList.remove("page-content");
        setTimeout(() => {
            textElement.innerHTML = currentPage.pageText[textIndex + 1];
            pageElement.classList.add("page-content");
        }, 1);
    } else {
        pageElement.classList.remove("page-content");
        imgElement.classList.add("page-exit-animation")
        setTimeout(() => {
            imgElement.style.display = "none";
        }, 1000)
        setTimeout(() => {
            textElement.innerHTML = [storyBoard[currentPage.pageNumber + 1].pageText[0]]
            imgElement.src = storyBoard[currentPage.pageNumber + 1].pageBackground;
            imgElement.classList.remove("page-exit-animation")
            imgElement.style.display = "block";
            pageElement.classList.add("page-content");
        }, 2000);
        setCurrentPage(storyBoard[currentPage.pageNumber + 1])
    }
}



export default BookPage

export const Head = () => <title>Home Page</title>
