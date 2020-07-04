function calculate(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var isPair = array[i] % 2;
        if (isPair != 0) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(calculate([2, 4, 5, 7]));