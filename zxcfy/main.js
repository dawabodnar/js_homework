function existsHigher(array,number){
    for(var i = 0; i < array.length; i++){
        if(array[i] > number){
            return true
        }else{
        }
    }
    return false
}
console.log(existsHigher([5, 3, 1, 2, 4], 10));