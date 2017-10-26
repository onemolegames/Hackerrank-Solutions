/**
 * Dates
 */
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let dayIndex = new Date(dateString).getDay();
    dayName = days[dayIndex];
    return dayName;
}

//The following steps contains just test cases

getDayName("10/11/2009");
getDayName("11/10/2010");