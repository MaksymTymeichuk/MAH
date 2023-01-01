let letter_arr = ['Аа','Бб','Вв','Гг','Ґґ','Дд','Ее','Єє','Жж','Зз','Ии','Іі','Її','Йй','Кк','Лл','Мм','Нн','Оо','Пп','Рр','Сс','Тт','Уу','Фф','Хх','Цц','Чч','Шш','Щщ','Ьь','Юю','Яя'],
arr = document.getElementsByClassName('text'),
block_arr = document.getElementsByClassName("letter"),
counter = 0,
img_counter = 0,
letterstorage = '',
right = document.getElementById("rightturn"),
left = document.getElementById("leftturn"),
letter_info_arr = [["car.gif","orange.gif","shark.gif"]],
letter_info_arr2 = [["Автомобіль","Апельсин","Акула"]]
img_arr = ["car.gif","bull.gif","bear.gif","goose.gif","crow.gif","dolphin.gif","straus.gif","racoon.gif"],
info_arr = ["Автомобіль","Бик","Ведмідь","Гусак","Ґава","Дельфін","Ему","Єнот","Жираф","Заєць","рИба","Індик","Їжак","Йогурт","Корова","Лимон","Миша","Ножиці","Окуляри","Папуга","Равлик","Сир","Тигр","Удав","Фарби","Хом'як","Цукерка","Черевик","Шапка","Щука","КінЬ","Юнга","Яблуко"],
letter_info1 = document.getElementById("letter_info"),
letter_icon = document.getElementById("letter_icon"),
letter_img = document.getElementById("letter_img"),
img_name = document.getElementById("img_name"),
back_button = document.getElementById("back"),
main1 = document.getElementById("main_container"),
rupor = document.getElementById("rupor"),
thing = document.getElementById("thing"),
instr = document.getElementById("instr"),
help = document.getElementById("help"),
help_count = true,
is_new = false,
index = 0,
lock = document.getElementById("lock"),
black_screen = document.getElementById("black_screen"),
gol_arr = ['Аа','Ее','Єє','Ии','Іі','Її','Оо','Уу','Юю','Яя']

back_button.addEventListener("click",letter_info_hide)
if(localStorage.getItem("letter")==false){
    localStorage.setItem("letter","Аа,")
}
if(letterstorage.length==0){
    localStorage.setItem("letter","Аа,")
}
letterstorage = localStorage.getItem("letter")
console.log(letterstorage)

instr.addEventListener("click",()=>{
    if(help_count){
        main1.style.zIndex = "-1"
        help_count = false
        help.style.width = "60vw"
    setTimeout(() => {  help.style.color = "white" }, 1000);
    
    }
    else{
        
        help_count = true
        help.style.color = "#FDAF17" 
        setTimeout(() => {  help.style.width = "0vw"
    }, 1000);
    setTimeout(() => { 
        main1.style.zIndex = "3"
    }, 2000);
        
    }
    
    
})
var audio2 = new Audio('background.mp3');
audio2.play();

var count = true
rupor.addEventListener("click",()=>{
    if(count){
        audio2.pause();
        count = false
        rupor.style.background = "black"
    }
    else{
        audio2.play();
        count = true
        rupor.style.background = "white"
    }
    })



function letter_info_hide(){
    document.body.scrollTop = "100px"
    thing.style.height = "3400px"
    letter_info1.style.opacity = '0%'
    letter_info1.style.display = 'none'
    for(let g=0;g<=32;g++){
        block_arr[g].style.display = "flex"
        if(letterstorage.includes(arr[g].innerText)){
            arr[g].style.opacity = "100%"
            block_arr[g].style.pointerEvents = "all"
        }
        if(is_new){
            black_screen.style.opacity = "50%"
              black_screen.style.height = "3400px"
              black_screen.style.zIndex = "10"
              setTimeout(() => { 
                lock.style.opacity = "100%"
              lock.style.zIndex = "12" 
              lock.style.height = "3400px"
            }, 1000);
            setTimeout(() => { 
                black_screen.style.opacity = "0%"
              black_screen.style.height = "0px"
              black_screen.style.zIndex = "-2"
                lock.style.opacity = "0%"
              lock.style.zIndex = "-2" 
              lock.style.height = "0px"
            }, 3000);
            is_new = false
        }
    }
    
}




for(let i=0;i<=32;i++){
    arr[i].innerText = letter_arr[i]
    if(letterstorage.includes(arr[i].innerText)==false){
        arr[i].style.opacity = "50%"
        block_arr[i].style.pointerEvents = "none"
    }
    
    if(gol_arr.includes(arr[i].innerText)){
        arr[i].style.color = 'red'
    }
    block_arr[i].addEventListener("click",letter_info_show)
}










/*
  */





function letter_info_show(){
    var audio = new Audio('decide.mp3');
    audio.play();
    letter_info1.style.opacity = '100%'
    letter_info1.style.display = "flex"
    thing.style.height = "100vh"
    main1.style.height = "50vh"
    index = letter_arr.indexOf(this.innerText)
    console.log(index)
    if(letterstorage.includes(letter_arr[letter_arr.indexOf(this.innerText)+1])==false){
        letterstorage += letter_arr[letter_arr.indexOf(this.innerText)+1]+','
        localStorage.setItem("letter",letterstorage)
        is_new = true
    }
    
    letter_icon.innerText = letter_arr[letter_arr.indexOf(this.innerText)]
    letter_img.src = img_arr[letter_arr.indexOf(this.innerText)]
    img_name.innerText = info_arr[letter_arr.indexOf(this.innerText)]
    for(let g=0;g<=32;g++){
        block_arr[g].style.display = "none"
    }
    
}



right.addEventListener("click",turn_right)

function turn_right(){
    let pop = new Audio("pop.wav")
    pop.play()
    img_counter +=1
    if(img_counter>2){
        img_counter = 0
    }
    console.log("working")
    letter_img.src = letter_info_arr[index][img_counter]
    img_name.innerText =letter_info_arr2[index][img_counter]
}

left.addEventListener("click",turn_left)

function turn_left(){
    let pop = new Audio("pop.wav")
    pop.play()
    img_counter -=1
    if(img_counter<0){
        img_counter = 2
    }
    console.log("working")
    letter_img.src = letter_info_arr[index][img_counter]
    img_name.innerText =letter_info_arr2[index][img_counter]
}