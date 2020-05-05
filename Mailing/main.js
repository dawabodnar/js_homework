var input = document.getElementById("address");
input.value = "@";
var addresses = [];

function addAddress() {
    var address = document.getElementById("address");

    addresses.push(address.value);
    console.log(addresses);
}
function sendingALetter() {
    var letter = document.getElementById("letter");
    var formatedAdresses = addresses.join(";");

   // window.open("mailto:" + formatedAdresses + "?subject=Test letter&body=" + letter);
    console.log("mailto:" + formatedAdresses + "?subject=Test letter&body=" + letter)
}
