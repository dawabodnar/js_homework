var emptyText = ""
function save() {
    var nameTag = document.getElementById("name");
    console.log(nameTag.value)
    nameTag.value = emptyText;
    var numberTag = document.getElementById("number");
    console.log(numberTag.value);
    numberTag.value = emptyText;
    var schoolTag = document.getElementById("school");
    console.log(schoolTag.value);
    schoolTag.value = emptyText;
    var ageTag = document.getElementById("age");
    console.log(ageTag.value);
    ageTag.value = emptyText;

    var imageText ="<image src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlcHRZP1A_sgxuH4iNS6hw34pNDGKzfaaiwVh3SIhclOq7CYsJw&s/image>"
    var imageTag = document.getElementById("img");
    imageTag.innerHTML = imageText;
}