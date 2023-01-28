const date = new Date();

function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString('en-US', {
                timeZone,
            }),
        );
    }
    return new Date(
        date.toLocaleString('en-US', {
            timeZone,
        }),
    );
}

const localDate = changeTimeZone(new Date(), 'Asia/Dhaka');
const getYear = localDate.getFullYear();
const getMonth = localDate.getMonth();
const getDate = localDate.getDate();
const getDay = localDate.getDay();

let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const month = monthName[getMonth];
const weekDay = weekDays[getDay];
const todaysDate = `${weekDay}, ${getDate} ${month} ${getYear}`;