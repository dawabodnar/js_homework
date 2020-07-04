function search() {
    var text = document.getElementById("slova");
    if (text.value == "кіт") {
        var imageCat = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Zoo_Wuppertal_Schwarzfusskatze.jpg/258px-Zoo_Wuppertal_Schwarzfusskatze.jpg'/>"
        var imageTag = document.getElementById("imgCat");
        imageTag.innerHTML = imageCat;
    }
    if (text.value == "пес") {
        var imageDog = "<img src='https://pbs.twimg.com/profile_images/1128176463851790336/ULk0gbdZ_400x400.jpg'/>"
        var imageTag2 = document.getElementById("imgDog");
        imageTag2.innerHTML = imageDog;
    }
    if (text.value == "машина") {
        var imageCar = "<img src='https://versiya.info/uploads/posts/2019-03/1553594330_krg.jpg'/>"
        var imageTag3 = document.getElementById("imgCar");
        imageTag3.innerHTML = imageCar;
    }
}