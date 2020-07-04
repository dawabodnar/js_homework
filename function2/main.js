function desc(number) {
    var array = [];
    for (var i = number; i > 0; i--) {
      array.push(i);
    }
    return array;
  }
  console.log(desc(6));
  console.log(desc(7));
  console.log(desc(8));