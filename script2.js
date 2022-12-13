let letter_arr = ['Аа','Бб','Вв','Гг','Ґґ','Дд','Ее','Єє','Жж','Зз','Ии','Іі','Її','Йй','Кк','Лл','Мм','Нн','Оо','Пп','Рр','Сс','Тт','Уу','Фф','Хх','Цц','Чч','Шш','Щщ','Ьь','Юю','Яя'],
arr = document.getElementsByClassName('text'),
block_arr = document.getElementsByClassName("letter"),
counter = 0,
img_arr = ["agrus.jpg","bull.jpg","vinograd.jpg"],
info_arr = ["Агрус","Бик","Виноград"],
letter_info1 = document.getElementById("letter_info"),
letter_icon = document.getElementById("letter_icon"),
letter_img = document.getElementById("letter_img"),
img_name = document.getElementById("img_name")

for(let i=0;i<=33;i++){
    arr[i].innerText = letter_arr[i]
    block_arr[i].addEventListener("click",letter_info)
}
function letter_info(){
    letter_info1.style.opacity = '100%'
    letter_icon.innerText = letter_arr[letter_arr.indexOf(this.innerText)]
    letter_img.src = img_arr[letter_arr.indexOf(this.innerText)]
    img_name.innerText = info_arr[letter_arr.indexOf(this.innerText)]
    for(let g=0;g<=33;g++){
        block_arr[g].style.display = "none"
    }
}

    

