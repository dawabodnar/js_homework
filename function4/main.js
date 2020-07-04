function removeFirstLast(string) {
    var newString = "";
    for (var i = 1; i < string.length - 1; i++) {
      newString = newString + string[i];
      //console.log(newString);
    }
    return newString;
  }
  console.log(removeFirstLast("asdasdas"));
