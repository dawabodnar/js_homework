
var counter = 0;

function send1() {
    var textSasha = document.getElementById("inp");
    var name = document.getElementById("sasha");
    var messages = document.getElementById("chat");
    messages.innerHTML = messages.innerHTML + name.textContent + "<div>" + textSasha.value + "</div>";
    var emptyText = "";
    textSasha.value = emptyText;

    counter++;
    var numberOfMessagesDiv = document.getElementById("numberOfMessages");
    numberOfMessagesDiv.textContent = counter;
}
function send2() {
    var textVasia = document.getElementById("inp1");
    var name = document.getElementById("vasia");
    var messages = document.getElementById("chat");
    messages.innerHTML = messages.innerHTML + name.textContent + "<div>" + textVasia.value + "</div>";
    var emptyText = "";
    textVasia.value = emptyText;

    counter++;
    var numberOfMessagesDiv = document.getElementById("numberOfMessages");
    numberOfMessagesDiv.textContent = counter;
}

