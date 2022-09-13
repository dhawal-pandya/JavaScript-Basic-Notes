var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function () {
    var newMessage = document.createElement("li");
    // we need a new element inside the ul that is achieved so, and it should be li, as in a data entry in the list.
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    // 
    textbox.value = "";
});