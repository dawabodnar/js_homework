function show(){
   var imageText ="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlcHRZP1A_sgxuH4iNS6hw34pNDGKzfaaiwVh3SIhclOq7CYsJw&s'/>"
   var imgTag = document.getElementById("img");

   var isImagePresent = imgTag.innerHTML.toString().length > 0; // true
   
   if (!isImagePresent) {
      imgTag.innerHTML = imageText
   }
   
   if (isImagePresent) {
      var empty = "";
      imgTag.innerHTML = empty;
   } 
   

}

// function hide(){
//    var imgTag = document.getElementById("img");
//    var empty = "";
//    imgTag.innerHTML = empty;
// }