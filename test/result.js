
// результаты теста
let input = document.querySelector('.yes__num')
let answer = document.querySelector('.answer__title')
input.addEventListener('keydown',function(e){
    if(e.keyCode == 13&&e.target){
        if(input.value === '0'){
            answer.innerHTML = `You are absolutly normal<br>person`
        }
        if(input.value === '1'||input.value === '2'){
            answer.innerHTML = `It is also normal, but be<br>careful`
        }
        if(input.value === '3'||input.value === '4'){
            answer.innerHTML = `You need to see a<br>psychologist`
        }
        if(input.value === '5'||input.value === '6'){
            answer.innerHTML = `You need to take pills`
        }
        if(input.value === '7'||input.value === '8'){
            answer.innerHTML = `You are SHIZA.<br>My congratulations`
        }
        if(input.value === '9'||input.value === '10'){
            answer.innerHTML = `DURKA ON THE WAY`
        }
        if(input.value === 'gay'){
            answer.innerHTML = `Who?`
        }
        if(input.value === '666'){
            answer.innerHTML = `Our Father,<br>Who art in the Heavens,<br>hallowed be Thy name.<br>Thy kingdom come,<br>Thy will be done,<br>on earth as it is in heaven.`
        }
        if(input.value === 'gleb'){
            answer.innerHTML = `...Sounds sexy...`
        }
        if(input.value === 'elnur'){
            answer.innerHTML = `Pupsik`
        }
        if(input.value === 'adolf'){
            answer.innerHTML = `Gitler!`
        }
        if(input.value === 'disco!'){
            answer.innerHTML = `Party!`
        }
        if(input.value === 'burgerking'){
            answer.innerHTML = `Govno`
        }
        if(input.value === 'billy'){
            answer.innerHTML = `Legend`
        }
        if(input.value === 'akniet'){
            answer.innerHTML = `Thanks for lerning us JavaScript`
        }
        if(input.value === 'adelya'){
            answer.innerHTML = `Thanks for supporting`
        }
        if(input.value === 'chynara'){
            answer.innerHTML = 'спасибо за пиццу!'
        }
    }
})

