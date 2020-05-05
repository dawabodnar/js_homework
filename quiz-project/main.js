var question1 = {
    text: "Що в JavaScript означає Null:",
    options: [
      "1. Null означає пустий рядок",
      "2. Null означає відсутність значення",
      "3. Null означає невідоме значення",
      "4. Null означає значення нуля"
    ],
    answer: 2
};

var question2 = {
    text: "Як правильно створити масив:",
    options: [
      "1. var array = (2,3,45);",
      "2. array = [2,3,45];",
      "3. var array = [2,3,45];",
      "4. var array = {2,3,45};"
    ],
    answer: 3
};

var question3 = {
    text: "Як вивести текст в консоль:",
    options: [
      "1. alert()",
      "2. console.log()",
      "3. sout()",
      "4. println()"
    ],
    answer: 2
};

startQuiz([question1, question2, question3]);



function startQuiz(questions) {
    var correctUnswers = 0;

    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];

        var questionText = formatQuestionText(question);
        var userAnswer = prompt(questionText);

        if (question.answer == userAnswer) {
            console.log( question.text + "\n" + question.options[userAnswer - 1]  + "\n" + "Ви відповіли вірно!");
            correctUnswers++;
        } else {
            console.log( question.text  + "\n" + question.options[userAnswer - 1] + "\n" + "Ви відповіли невірно!");
        }
    }

    console.log("Загалом правильних відповідей: " + correctUnswers);
}

function formatQuestionText(question) {
    var result = question.text;
    for (var i = 0; i < question.options.length; i++) {
        result += "\n" + question.options[i];
    }
    return result;
}