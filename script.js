let operation = document.getElementById("operation");
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
    if (button.className == "digits") {
        button.addEventListener("click", () => writeStandard(button));
    } else if (button.className == "ops") {
        button.addEventListener("click", () => writeSpecial(button));
    }
});

function writeStandard(button) {
    operation.innerText += button.innerText;
    writable = true;
}
writable = false;

function writeSpecial(button) {
    if (
        writable &&
        (button.id == "add" ||
            button.id == "sub" ||
            button.id == "mult" ||
            button.id == "div")
    ) {
        operation.innerText += button.innerText;
        writable = false;
    }
}

function calcul() {
    operation = operation.innerText;

    console.log(typeof operation);
    for (let i = 0; i < operation.clientHeight; i++) {
        console.log(typeof operation[i]);
    }
}
