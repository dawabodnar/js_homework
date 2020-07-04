
function countWords(sentence) {
    var counter = 0;
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i] == " ") {
        counter++;
      }
    }
    counter++; // Для того щоб порахувати останнє слово. А воно без свого пробіла.
    return counter;
  }
  console.log(countWords("Маша бігла по дорозі"));
