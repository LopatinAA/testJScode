const greeting = (name) => {
let date = new Date
let hours = date.getHours(0)
let timeOfDay = 
(hours >= 6 && hours <= 10 ) ? 'morning' :
(hours >= 11 && hours <= 17 ) ? 'afternoon' :
(hours >= 18 && hours <= 23 ) ? 'evening' :
(hours >= 0 && hours <= 10 ) ? 'night' : null;
console.log('baseTask-06:')
switch (timeOfDay) {
    case 'morning' : console.log('good morning',name); break;
    case 'afternoon' : console.log('good afternoon',name); break;
    case 'evening' : console.log('good evening',name); break;
    case 'night' : console.log('good night',name); break;
}
}
greeting('Mark')