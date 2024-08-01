const inputValue = document.querySelector("input");
const inInput = document.querySelector(".in-input");
const mmOutput = document.querySelector(".mm-output");
const mmInput = document.querySelector(".mm-input");
const inOutput = document.querySelector(".in-output");


function convertIN() {
    inInput.innerHTML = inputValue.value;

    mmOutput.innerHTML = (inputValue.value * 25.4).toFixed(2);
}

function convertMM() {
    mmInput.innerHTML = inputValue.value;

    inOutput.innerHTML = (inputValue.value * 0.03937).toFixed(2);
}
