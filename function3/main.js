function match(string, string1) {
    
    var isMatch = true;
    
    for (var i = 0; i < 3; i++) {
      console.log(string[i])
        if (string[i] != string1[i]) {
            isMatch = false;
        }
  	 }
    return isMatch;
  }
  console.log(match("abdDDDD", "abdHHH"));
  console.log(match("qqqAA", "rrrNNN"));
  console.log(match("asdfgj", "azxcvjjj"));

  
  function match(string, string1, numberOfChars) {
    
    var isMatch = true;
    
    for (var i = 0; i < numberOfChars; i++) {
      console.log(string[i])
        if (string[i] != string1[i]) {
            isMatch = false;
        }
  	 }
    return isMatch;
  }
  console.log(match("abdDDDD", "abdHHH", 2));
  console.log(match("qqqAA", "rrrNNN", 5));
  console.log(match("asdfgj", "azxcvjjj", 1));



  function match(string, string1) {
    if (string[0] == string1[0] 
        && string[1] == string1[1] 
        && string[2] == string1[2]) {
      return true;
    } else {
      return false;
    }
  }
  console.log(match("abdDDDD", "abdHHH"));
  console.log(match("qqqAA", "rrrNNN"));
  console.log(match("asdfgj", "azxcvjjj"));