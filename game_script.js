let rupor = document.getElementById("rupor")
let count = 0
var audio = new Audio('background.mp3')
audio.play()
var help = document.getElementById("help")
var instr = document.getElementById("instr")
var help_count = true

let main = document.getElementById("main")

var game_arr = document.getElementsByClassName("game")
game_arr[0].addEventListener("click", ()=>{
    console.log("l")
    main.style.display = "none"
})

instr.addEventListener("click",()=>{
    if(help_count){
        help.style.zIndex = "3"
        help_count = false
        help.style.opacity = "100%"
        help.style.width = "60vw"
        
    setTimeout(() => {  help.style.color = "white" }, 1000);
    
    }
    else{
        help.style.opacity = "0%"
        help_count = true
        help.style.color = "orange" 
        setTimeout(() => {  help.style.width = "0vw"
    }, 1000);
    setTimeout(() => { 
        help.style.zIndex = "-1"
    }, 2000);
        
    }
    
    
})





rupor.addEventListener("click", ()=>{
    if(count==0){
        rupor.style.background = "black"
        count = 1
        audio.pause()
    }
    else{
        audio.play()
        rupor.style.background = "white"
        count = 0
    }
    
})