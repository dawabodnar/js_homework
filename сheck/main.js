function check(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return true
        } else {
        }
    }
    return false
}
console.log(check([1, 2, 3, 4, 5], 1));
console.log(check(["hello","my", "freinds", "you"], "Word"));