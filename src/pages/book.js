import * as React from "react"
import "../styles/defaultStyles.css"

const storyBoard = [
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg",
        pageText: ["Are you ready to start?", "Let's begin."],
        pageAnimation: ["none", "idle", "zoom-up-and-in"],
        pageNumber: 0
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-0d137ecdfd7a491c80319d2dfb151cfa.jpg",
        pageText: ["Longing fingers reach themsleves", "To graze an empty hide"],
        pageAnimation: ["idle", "none", "zoom-up-and-in"],
        pageNumber: 1
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-60a74845f8984673bcdf79a5e72a61c9.jpg",
        pageText: ["Grasping for what doesn't live there", "On the other side"],
        pageAnimation: ["idle", "zoom-up-and-in"],
        pageNumber: 2
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-8cd7cffe59cc4caeae4a2d5d3f01d36a.jpg",
        pageText: ["Parched lips and paper skin flake on it", "Gentely from above"],
        pageAnimation: ["zoom-up-and-in", "none", "zoom-up-and-in"],
        pageNumber: 3
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-0bfea37f83ad433a8ef624e6146fa4ac.jpg",
        pageText: ["The empty hide remembers this"],
        pageAnimation: ["zoom-up-and-in", "zoom-up-and-in", "zoom-up-and-in"],
        pageNumber: 4
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-f40ba095fc2d4228bb505fe5dc157deb.jpg",
        pageText: ["As what it once called love"],
        pageAnimation: ["zoom-up-and-in", "none", "zoom-up-and-in"],
        pageNumber: 5
    }
]

const BookPage = () => {
    const [currentPage, setCurrentPage] = React.useState({
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg",
        pageText: ["Are you ready to start?", "Let's begin."],
        pageAnimation: ["zoom-up-and-in", "none", "zoom-up-and-in"],
        pageNumber: 0
    });
    const [currentBackground, setCurrentBackground] = React.useState("https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg");
    const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
    const [currentPageText, setCurrentPageText] = React.useState("Are you ready to start?")
    React.useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener("load",function() {
                setTimeout(function() {
                    window.scrollTo(0, 1);
                }, 1000);
            });
        }
        
    },[currentPage]);

    if(typeof window !== 'undefined') {
        window.addEventListener("load",function() {
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 1000);
        });
    }

    return (
        <div style={{overflow: "hidden", height: "100vh", width: "100vw", backgroundColor: "#E3C5A3", backgroundImage: "url(https://u-static.fotor.com/images/text-to-image/result/PRO-c2398dfed54d44b5afd8ee5bcee19bc9.jpg)", backgroundSize: "cover"}}>
            <img id="background-image" style={{overflow: "hidden", position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh"}} src={currentBackground}></img>
            <div id="page-content-box" className="page-content" style={{overflow: "hidden", position: "fixed", top: "0px", left: "0px", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h3 id="page-content-text" style={{backgroundColor: "#222", borderRadius: "10px", padding: "1rem", opacity: ".7", color: "white"}}>{currentPageText}</h3>
            </div>
            <button id="continue-button" style={{zIndex: 999999, position: "fixed", padding: ".5rem", opacity: .7, borderRadius: "100%", backgroundColor: "#222", color: "white", bottom: "5vh", right: "5vw"}} onClick={() => {
                turnPage(currentPage, setCurrentPage, setCurrentPageIndex, storyBoard, setCurrentPageText)
            }} >Continue</button>
            <button style={{zIndex: 999999, position: "fixed", padding: ".5rem", opacity: .7, borderRadius: "100%", backgroundColor: "#222", color: "white", bottom: "5vh", left: "5vw"}} onClick={() => {
                window.location.reload()
                }}>Beginning</button>
        </div>
    )
}

function disableContinueButton() {
    const button = document.getElementById("continue-button")
    button.style.backgroundColor = "#222";
    button.style.color = "white";
    button.disabled = true;
    setTimeout(() => {
        button.style.backgroundColor = "darkorange";
        button.style.color = "black";
        button.disabled = false;
    }, 5000);
}

function idleImageAnimation(animation) {
    const imageElement = document.getElementById("background-image");

    switch(animation) {
        case "none":
            break;
        case "zoom-up-and-in":
            setTimeout(() => {
                imageElement.style.width = "125vw";
                imageElement.style.height = "125vh";
                imageElement.style.left = "-12.5vw";
                imageElement.style.top = "-10vh";
            }, 500);
            break;
        case "zoom-and-spin-left-0":
            setTimeout(() => {
                imageElement.style.width = "100vw";
                imageElement.style.height = "100vh";
                imageElement.style.left = "0vw";
                imageElement.style.top = "0vh";
                imageElement.style.transform = 'rotate(360deg)';
            },6000)
            break;
        case "idle":
            setTimeout(() => {
                imageElement.style.width = "122vw";
                imageElement.style.height = "122vh";
                imageElement.style.left = "-8vw";
                imageElement.style.top = "-8vh";
            },2000)
            break;
        case "zoom-and-spin-left-180": 
            imageElement.style.width = "250vw";
            imageElement.style.height = "250vh";
            imageElement.style.left = "-75vw";
            imageElement.style.top = "-75vh";
            setTimeout(() => {
                imageElement.style.transform = 'rotate(180deg)';
                setTimeout(() => {
                    imageElement.style.width = "100vw";
                    imageElement.style.height = "100vh";
                    imageElement.style.left = "0vw";
                    imageElement.style.top = "0vh";
                    imageElement.style.transform = 'rotate(360deg)';
                },6000)
            },1000)
            break;
        default:
            return;
    }

    // else {
    //     setTimeout(() => {
    //         imageElement.style.width = "100vw";
    //         imageElement.style.height = "100vh";
    //         imageElement.style.left = "0vw";
    //         imageElement.style.top = "0vh";
    //     }, 2000);
    // }
}

function turnPage(oldCurrentPage, setCurrentPage, setCurrentPageIndex, storyBoard, setCurrentPageText) {
    const currentPage = oldCurrentPage;
    const pageElement = document.getElementById("page-content-box");
    const imgElement = document.getElementById("background-image");
    const textElement = document.getElementById("page-content-text");
    const textIndex = textElement.innerHTML.length ? currentPage.pageText.indexOf(textElement.innerHTML) : 0;
    console.log(currentPage.pageAnimation[textIndex])
    idleImageAnimation(currentPage.pageAnimation[textIndex]);
    disableContinueButton();

    if(currentPage.pageText[textIndex + 1]) {
        pageElement.classList.remove("page-content");
        pageElement.classList.add("page-exit-animation");
        setTimeout(() => {
            textElement.innerHTML = currentPage.pageText[textIndex + 1];
            pageElement.classList.remove("page-exit-animation");
            pageElement.classList.add("page-content");
        }, 1000);
    } else {
        pageElement.classList.remove("page-content");
        pageElement.classList.add("page-exit-animation");
        imgElement.classList.add("page-exit-animation")
        setTimeout(() => {
            imgElement.style.display = "none";
            imgElement.style.width = "100vw";
            imgElement.style.height = "100vh";
            imgElement.style.left = "0vw";
            imgElement.style.top = "0vh";
        }, 1000)
        setTimeout(() => {
            textElement.innerHTML = [storyBoard[currentPage.pageNumber + 1].pageText[0]]
            imgElement.src = storyBoard[currentPage.pageNumber + 1].pageBackground;
            imgElement.classList.remove("page-exit-animation")
            imgElement.style.display = "block";
            pageElement.classList.add("page-content");
            pageElement.classList.remove("page-exit-animation");
        }, 1000);
        setCurrentPage(storyBoard[currentPage.pageNumber + 1])
    }
}



export default BookPage

export const Head = () => <title>Home Page</title>
