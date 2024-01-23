let players = document.querySelector('.players');
let chances = document.querySelector('.chances');
let error = document.querySelector('.error');
let input_1 = document.querySelector('.input_1');
let submit_btn1 = document.querySelector('.submit_btn1');
let input_2 = document.querySelector('.input_2');
let submit_btn2 = document.querySelector('.submit_btn2');
let input_3 = document.querySelector('.input_3');
let submit_btn3 = document.querySelector('.submit_btn3');
let winner = document.querySelector('.winner');
let trofy = document.querySelector('.trofy');
let game_icon = document.querySelector('.game_icon');
let click = 0
let click2 = 0

submit_btn1.addEventListener('click', ()=>{
    if (input_1.value - 0) {
        if (input_1.value < 10) {
            players.innerHTML = "Player 2";
            input_1.style = "display: none;";
            submit_btn1.style = "display: none;";
            input_2.style = "display: inline-block;";
            submit_btn2.style = "display: inline-block;";
            chances.style = "display: inline-block;";
            chance_number.style = "display: inline-block"
        }else{
            error.style = "display:none;";
            alert(error.innerHTML = "Please input a number under 10.!");
        }
    }else{
        error.style = "display:none;";
        alert(error.innerHTML = "Please input a number");
    }
})

submit_btn2.addEventListener('click', ()=>{
    ++click
    if (input_2.value - 0) {
        if (input_2.value < 10) {
            if (click < 6) {
                if (input_1.value === input_2.value) {
                    input_2.style = "display:none;";
                    submit_btn2.style = "display:none;";

                    input_3.style = "display: inline-block;";
                    submit_btn3.style = "display: inline-block;";
                    players.innerHTML = "Player 3";
                }
            }else{
                input_2.style = "display:none;";
                submit_btn2.style = "display:none;";

                input_3.style = "display: inline-block;";
                submit_btn3.style = "display: inline-block;";
                players.innerHTML = "Player 3";
            }
        }else{
            error.style = "display:none;";
            alert(error.innerHTML = "Please input a number under 10.!");
        }
    }else{
        error.style = "display:none;";
        alert(error.innerHTML = "Please input a number");
    }
})

submit_btn3.addEventListener('click', ()=>{
    ++click2
    if (input_3.value - 0) {
        if (input_3.value < 10) {
            if (click2 < 6) {
                if (input_1.value === input_3.value && input_1.value === input_2.value) {
                    input_3.style = "display:none;";
                    submit_btn3.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    trofy.style = "display: inline-block;";
                    winner.innerHTML = "Winner is Player-2 & Player-3";
                }else if (input_1.value === input_3.value) {
                    input_3.style = "display:none;";
                    submit_btn3.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    trofy.style = "display: inline-block;";
                    winner.innerHTML = "Winner is Player-1 & Player-3";
                }
            }else if (input_1.value === input_2.value) {
                    input_3.style = "display:none;";
                    submit_btn3.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    trofy.style = "display: inline-block;";
                    winner.innerHTML = "Winner is Player-1 & Player-2";
            }else{
                    input_3.style = "display:none;";
                    submit_btn3.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    trofy.style = "display: inline-block;";
                    winner.innerHTML = "Winner is Player-1";
            }
        }else{
            error.style = "display:none;";
            alert(error.innerHTML = "Please input a number under 10.!");
        }
    }else{
        error.style = "display:none;";
        alert(error.innerHTML = "Please input a number");
    }
})


