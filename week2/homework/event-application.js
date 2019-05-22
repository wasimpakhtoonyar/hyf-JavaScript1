console.log('event application');

// https://www.w3schools.com/js/js_date_methods.asp
const today = new Date();

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getEventWeekday(day) {
    const eventDate = today.getDay() + day;
    console.log('The event is ' + week[eventDate]);
}

getEventWeekday(2);