function getPin() {
    const pin = Math.round(Math.random() * 10000);
}

function generatePin() {
    getPin();
    console.log(pin);
}