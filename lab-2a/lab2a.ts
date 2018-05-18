enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum earthPhysics{
    gravity = 9.81,
    c = Math.pow(2.99, 8),
    weight = 1
}

//html elements
let pTodayDate = document.getElementById("p--today-date");
let pYourBirthday = document.getElementById("p--birthday-message");
let ButtonBirthday = document.getElementById("button--birthday");
let iBirthdayPicker = document.getElementById("input--date-picker");



ButtonBirthday.onclick = function()
{
    let yourBday : string = iBirthdayPicker.value;
    let yourBdayDate : Date = new Date(yourBday);

    pYourBirthday.innerHTML = outputBirthday(yourBdayDate);
}



//Today as a date
let today : Date = new Date();

pTodayDate.innerHTML = `Today is ${days[today.getDay()]} ${months[today.getMonth()]}, ${today.getDate()} ${today.getFullYear()}`;

function outputBirthday( input : Date) : string
{
    //today is birthday
    if((input.getDate() === today.getDate()) && input.getMonth() === today.getMonth())
    {
        return `Happy birthday!`;
    }

    let thisYearBday = new Date();
    thisYearBday.setDate(input.getDate());
    thisYearBday.setMonth(input.getMonth());
    thisYearBday.setFullYear(today.getFullYear());

    return `Your birthday is ${days[thisYearBday.getDay()]} ${months[input.getMonth()]} ${input.getDate()}, ${today.getFullYear()}`
}


