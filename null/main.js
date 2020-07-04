function removeNull(array) {
    var array1 = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== null) {
            array1.push(array[i]);
        }
    }
    return array1
}
console.log(removeNull(["a", null, "b", null]));
console.log(removeNull([null, null, null, null, null]));