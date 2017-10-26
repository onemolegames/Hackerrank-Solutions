/**
 * Button.js
 */
var button = document.getElementById("btn");
var count = button.value;
button.addEventListener("click", function (e) {
    count++;
    button.value = count;
    button.textContent = count.toString();
}, false);