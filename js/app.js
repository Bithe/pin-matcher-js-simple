function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log("Got 3 digit", pin);
        return getPin();

    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    console.log(pin);
}

//Keypad
document.getElementById('keypad').addEventListener("click", function(event) {
    console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers').value;
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;

});