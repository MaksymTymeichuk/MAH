main = document.getElementById("main")
games = document.getElementById("games")
info = document.getElementById("info")
page = document.getElementById("page")
header = document.getElementById("header")
first = document.getElementById("first")
second = document.getElementById("second")
third = document.getElementById("third")
main.addEventListener("click", ()=>{
    main.style.background =  "rgb(50,92,253)"
    main.style.color =  "#003459"
    games.style.background =  "#003459"
    games.style.color = "#EAA221"
    info.style.background =  "#003459"
    info.style.color = "#EAA221"
    page.style.left = "133.5vh"
    document.body.style.background = "#325CFD"
    page.style.background = "rgb(50,92,253)"
    page.style.boxShadow = "inset 10px 10px 100px #003459"
    header.style.boxShadow = "10px 5px 100px #003459"
    second.style.opacity = "0%"
    second.style.marginLeft = '-65px'
    third.style.opacity = "0%"
    third.style.marginLeft = '-65px'
    first.style.opacity = "100%"
    first.style.marginLeft = '0px'
    
    
})
games.addEventListener("click", ()=>{
    games.style.background =  "violet"
    games.style.color =  "#663B94"
    main.style.background =  "#431C75"
    main.style.color = "violet"
    info.style.background =  "#431C75"
    info.style.color = "violet"
    page.style.left = "178.5vh"
    document.body.style.background = "#663B94"
    page.style.background = "#663B94"
    page.style.boxShadow = "inset 10px 20px 40px #431C75"
    header.style.boxShadow = "10px 5px 100px #431C75"
    first.style.opacity = "0%"
    first.style.marginLeft = '-65vh'
    second.style.opacity = "0%"
    second.style.marginLeft = '-65vh'
    third.style.opacity = "100%"
    third.style.marginLeft = '0px'
})
info.addEventListener("click", ()=>{
    info.style.background =  "white"
    info.style.color =  "#F17720"
    main.style.background =  "#F17720"
    main.style.color = "white"
    games.style.background =  "#F17720"
    games.style.color = "white"
    page.style.left = "156vh"
    document.body.style.background = "#FFA630"
    page.style.background = "#FFA630"
    page.style.boxShadow = "inset 10px 20px 40px #F17720"
    header.style.boxShadow = "10px 5px 100px #431C75"
    first.style.opacity = "0%"
    first.style.marginLeft = '-65px'
    third.style.opacity = "0%"
    third.style.marginLeft = '-65px'
    second.style.opacity = "100%"
    second.style.marginLeft = '0px'
})


