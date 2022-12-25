let letter_arr = ['Аа','Бб','Вв','Гг','Ґґ','Дд','Ее','Єє','Жж','Зз','Ии','Іі','Її','Йй','Кк','Лл','Мм','Нн','Оо','Пп','Рр','Сс','Тт','Уу','Фф','Хх','Цц','Чч','Шш','Щщ','Ьь','Юю','Яя'],
arr = document.getElementsByClassName('text'),
block_arr = document.getElementsByClassName("letter"),
counter = 0,
img_arr = ["car.gif","bull.gif","bear.gif","goose.gif","crow.gif","dolphin.gif","straus.gif","racoon.gif"],
info_arr = ["Автомобіль","Бик","Ведмідь","Гусак","Ґава","Дельфін","Ему","Єнот","Жираф","Заєць","рИба","Індик","Їжак","Йогурт","Корова","Лимон","Миша","Ножиці","Окуляри","Папуга","Равлик","Сир","Тигр","Удав","Фарби","Хом'як","Цукерка","Черевик","Шапка","Щука","КінЬ","Юнга","Яблуко"],
letter_info1 = document.getElementById("letter_info"),
letter_icon = document.getElementById("letter_icon"),
letter_img = document.getElementById("letter_img"),
img_name = document.getElementById("img_name"),
back_button = document.getElementById("back"),
main1 = document.getElementById("main_container")

back_button.addEventListener("click",letter_info_hide)




function letter_info_hide(){
    
    letter_info1.style.opacity = '0%'
    letter_info1.style.display = 'none'
    for(let g=0;g<=33;g++){
        block_arr[g].style.display = "flex"
    }
}




for(let i=0;i<=33;i++){
    arr[i].innerText = letter_arr[i]
    block_arr[i].addEventListener("click",letter_info_show)
}



function letter_info_show(){
    var audio = new Audio('decide.mp3');
    audio.play();
    letter_info1.style.opacity = '100%'
    letter_info1.style.display = "flex"
    main1.style.height = "50vh"
    
    letter_icon.innerText = letter_arr[letter_arr.indexOf(this.innerText)]
    letter_img.src = img_arr[letter_arr.indexOf(this.innerText)]
    img_name.innerText = info_arr[letter_arr.indexOf(this.innerText)]
    for(let g=0;g<=33;g++){
        block_arr[g].style.display = "none"
    }
    
}




 

