function onset() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    console.log(buttons);

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            // console.log(e.target.dataset.operand)
            let value1 = e.target.dataset.operand;
            screen.value += value1;
            console.log(screen.value);
        })
    });
    if (equal) {
        equal.addEventListener('click', function (e) {
            if (screen.value === '') {
                screen.value = "";
            }
            else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        })
    }
    if (clear) {
        clear.addEventListener('click', function (e) {
            screen.value = "";
        })
    }



}

function init() {
    document.getElementById('clickableSection').addEventListener('click', event => {
        console.log(event)
        if (event.target) {
            const userInput = document.getElementById('user-input');

            // console.log(event.target.dataset);
            if (event.target.dataset.operand === "=") {
                console.log( eval(userInput.value))
                userInput.value = eval(userInput.value)
            } else if (event.target.dataset.operand === "C") {
                userInput.value = ""
            }
            else {
                userInput.value = userInput.value + String(event.target.dataset.operand)
            }
        }
    })
}

// document.body.onload = function () {
//     // init()
//     onset()
// }

onset();