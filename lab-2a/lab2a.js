"use strict";
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var earthPhysics;
(function (earthPhysics) {
    earthPhysics[earthPhysics["gravity"] = 9.81] = "gravity";
    earthPhysics[earthPhysics["c"] = Math.pow(2.99, 8)] = "c";
    earthPhysics[earthPhysics["weight"] = 1] = "weight";
})(earthPhysics || (earthPhysics = {}));
//html elements
var pTodayDate = document.getElementById("p--today-date");
var pYourBirthday = document.getElementById("p--birthday-message");
var ButtonBirthday = document.getElementById("button--birthday");
var iBirthdayPicker = document.getElementById("input--date-picker");
ButtonBirthday.onclick = function () {
    var yourBday = iBirthdayPicker.value;
    var yourBdayDate = new Date(yourBday);
    pYourBirthday.innerHTML = outputBirthday(yourBdayDate);
};
//Today as a date
var today = new Date();
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + " " + months[today.getMonth()] + ", " + today.getDate() + " " + today.getFullYear();
function outputBirthday(input) {
    //today is birthday
    if ((input.getDate() === today.getDate()) && input.getMonth() === today.getMonth()) {
        return "Happy birthday!";
    }
    var thisYearBday = new Date();
    thisYearBday.setDate(input.getDate());
    thisYearBday.setMonth(input.getMonth());
    thisYearBday.setFullYear(today.getFullYear());
    return "Your birthday is " + days[thisYearBday.getDay()] + " " + months[input.getMonth()] + " " + input.getDate() + ", " + today.getFullYear();
}
