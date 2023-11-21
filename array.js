let array = [];
function push() {
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    array.push(inputValue);
    resultField.value = `${array}`
}
function pop() {
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    array.pop();
    resultField.value = `${array}`
}
function shift() {
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    array.shift(inputValue);
    resultField.value = `${array}`
}
function unshift() {
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    array.unshift(inputValue);
    resultField.value = `${array}`;
}

function reverse() {
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    array.reverse(inputValue);
    resultField.value = `${array}`;
}
function string() {
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    let arrayString = array.toString();
    resultField.value = `${typeof (arrayString)}`;
}
function delet() {
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    // delete array();
    resultField.value=""
}
function sort() {
    let resultField = document.getElementById("output");
    array.sort()
    resultField.value = `${array}`;
}
function cat(){
    let inputValue = document.getElementById("inputs").value;
    let resultField = document.getElementById("output");
    let value = document.getElementById("con").value;
    total=inputValue.concat(value)
    resultField.value = total;

}