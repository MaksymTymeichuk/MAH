let letter_arr = ['Аа','Бб','Вв','Гг','Ґґ','Дд','Ее','Єє','Жж','Зз','Ии','Іі','Її','Йй','Кк','Лл','Мм','Нн','Оо','Пп','Рр','Сс','Тт','Уу','Фф','Хх','Цц','Чч','Шш','Щщ','Ьь','Юю','Яя'],
arr = document.getElementsByClassName('text'),
block_arr = document.getElementsByClassName("letter"),
counter = 0,
img_arr = ["agrus.jpg"],
letter_info1 = document.getElementById("letter_info")
for(let i=0;i<=33;i++){
    arr[i].innerText = letter_arr[i]
    block_arr[i].addEventListener("click",()=>{
        for(let g=0;g<=33;g++){
        block_arr[g].style.display = "none"
        }
        letter_info1.style.visibility = 'visible'
    })
}
function letter_info(letter,img){
    letter_info1.style.display = 'flex'
}

    

