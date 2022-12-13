let letter_arr = ['Аа','Бб','Вв','Гг','Ґґ','Дд','Ее','Єє','Жж','Зз','Ии','Іі','Її','Йй','Кк','Лл','Мм','Нн','Оо','Пп','Рр','Сс','Тт','Уу','Фф','Хх','Цц','Чч','Шш','Щщ','Ьь','Юю','Яя'],
arr = document.getElementsByClassName('text'),
block_arr = document.getElementsByClassName("letter"),
counter = 0,
img_arr = ["agrus.jpg"],
letter_info1 = document.getElementById("letter_info").addEventListener("click",letter_info(arr[0],img_arr[0]))
for(let i =0;i>=arr.length;i++){
    arr[i].style.innerText = letter_arr[0]
}
function letter_info(letter,img){
    for(let i =0;i>=arr.length;i++){
        block_arr[0].textContent = "s"
    }
    letter_info1.style.display = 'flex'
}
    

