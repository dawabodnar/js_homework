function convertHoursToMinutes(hour) {
    var minute = 60
    var HourInMinutes = hour * minute;
    return HourInMinutes
}
//console.log(convertHoursToMinutes(6));






function convertHoursToSeconds(hour) {
    var minute = 60
    var HourInMinutes = hour * minute;
    var secondInMinute = 60
    var HourInSecond = HourInMinutes * secondInMinute
    return HourInSecond
}
console.log(convertHoursToSeconds(2));