let letter_arr = ['Аа','Бб','Вв','Гг','Ґґ','Дд','Ее','Єє','Жж','Зз','Ии','Іі','Її','Йй','Кк','Лл','Мм','Нн','Оо','Пп','Рр','Сс','Тт','Уу','Фф','Хх','Цц','Чч','Шш','Щщ','Ьь','Юю','Яя'],
arr = document.getElementsByClassName('text'),
block_arr = document.getElementsByClassName("letter"),
counter = 0
for(let i=0;i<=33;i++){
    arr[i].innerText = letter_arr[i]
    block_arr[i].addEventListener("click",()=>{
        let interval = setInterval(() => {          
        block_arr[counter].style.marginTop = '1000px'
        block_arr[counter].style.opacity = '0%'
        counter += 1

        if(counter ==33){
            clearInterval(interval)
        }
              }, '40')
            
            }
    )
    }

