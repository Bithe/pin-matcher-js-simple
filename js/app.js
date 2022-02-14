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
    const calcInput = document.getElementById('typed-numbers');
    //check
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

//Verify pin
function verifyPin() {
    const genratedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;

    if (genratedPin == typedPin) {
        const successMessage = document.getElementById('notify-success');
        successMessage.style.display = 'block';
    } else {
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
    }
}