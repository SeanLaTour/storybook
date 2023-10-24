import * as React from "react"
import "../styles/defaultStyles.css"

const storyBoard = [
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg",
        pageText: ["Are you like me?", "Do you wonder...", "If you're alone...?"],
        pageAnimation: ["none", "idle", "zoom-up-and-in"],
        pageNumber: 0
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-24a48eb3593f49d8bab90c6c57365d2f.jpg",
        pageText: ["I want to tell you a story", "A very old story."],
        pageAnimation: ["idle", "none", "zoom-up-and-in"],
        pageNumber: 1
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-7cba7d99b8984256ba3859de36787f23.jpg",
        pageText: ["About a people how came long before you.", "Long before anyone..."],
        pageAnimation: ["idle", "zoom-up-and-in"],
        pageNumber: 2
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-de65118fbfcd4513a338b7be1ccde766.jpg",
        pageText: ["What started as a dream for them.", "What was always just out of reach."],
        pageAnimation: ["zoom-up-and-in", "none", "zoom-up-and-in"],
        pageNumber: 3
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-a9b356f0886c4b939a8b4bf7c6c3997f.jpg",
        pageText: ["Became real.", "And soon they reached their arms out..."],
        pageAnimation: ["zoom-up-and-in", "zoom-up-and-in", "zoom-up-and-in"],
        pageNumber: 4
    },
    {
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-1b808f9475854fe7bccb8b988ae13e75.jpg",
        pageText: ["To the stars."],
        pageAnimation: ["zoom-up-and-in", "none", "zoom-up-and-in"],
        pageNumber: 5
    }
]

const BookPage = () => {
    const [currentPage, setCurrentPage] = React.useState({
        pageBackground: "https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg",
        pageText: ["Are you like me?", "Do you wonder...", "If you're alone...?"],
        pageAnimation: ["zoom-up-and-in", "none", "zoom-up-and-in"],
        pageNumber: 0
    });
    const [currentBackground, setCurrentBackground] = React.useState("https://u-static.fotor.com/images/text-to-image/result/PRO-62de7ec36c224e0eb13ddb59dcbb1f2f.jpg");
    const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
    const [currentPageText, setCurrentPageText] = React.useState("Are you like me?")
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
        <div style={{height: "100vh", width: "100vw", backgroundColor: "#E3C5A3", backgroundImage: "url(https://u-static.fotor.com/images/text-to-image/result/PRO-c2398dfed54d44b5afd8ee5bcee19bc9.jpg)", backgroundSize: "cover"}}>
            <img id="background-image" style={{position: "absolute", top: "0px", left: "0px", width: "100vw", height: "100vh"}} src={currentBackground}></img>
            <div id="page-content-box" className="page-content" style={{position: "absolute", top: "0px", left: "0px", width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h3 id="page-content-text" style={{backgroundColor: "#222", borderRadius: "10px", padding: "1rem", opacity: ".7", color: "white"}}>{currentPageText}</h3>
            </div>
            <button style={{position: "fixed", padding: ".5rem", opacity: .7, borderRadius: "100%", backgroundColor: "#222", color: "white", bottom: "5vh", right: "5vw"}} onClick={() => {
                turnPage(currentPage, setCurrentPage, setCurrentPageIndex, storyBoard, setCurrentPageText)
            }} >Continue</button>
            <button style={{position: "fixed", padding: ".5rem", opacity: .7, borderRadius: "100%", backgroundColor: "#222", color: "white", bottom: "5vh", left: "5vw"}} onClick={() => {
                window.location.reload()
                }}>Beginning</button>
        </div>
    )
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
