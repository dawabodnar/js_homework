  // вивести слова які закінчуються на букву - t
  
  var words = ["Robet", "Dell", "Sky", "Rabbit"];
	
  for (var i = 0; i < words.length; i++) {
    var slovo = words[i]; // Robet
    var slovoLastIndex = slovo.length - 1; // 5 - 1 = 4
    var slovoLastChar = slovo[slovoLastIndex]; // t
    if  ("t" == slovoLastChar) {  // t == t
    	print(slovo);
    }  
  } 
  // По рядкам:
  // 34: переклали з масиву в змінну слово, щоб зручніше було праацювати.
  // 35: дістали із слова індекс останьої букви.
  // 36: дістали із слова, за допомогою індекса, останню букву.
  // 37: порівняли букву "t" із останьою буквою слова.
    // 38: якщо "t" == "t" то виводимо в консоль слово.