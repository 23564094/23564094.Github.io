function getFormattedDate(date) {
  let monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  return `${month} ${year}`
}

function addDaysToDate(date, daysToAdd) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() + daysToAdd);
  
    return newDate
}

let todaysDate = new Date();


let upcoming1 = addDaysToDate(todaysDate);
let upcoming2 = addDaysToDate(todaysDate);
let upcoming3 = addDaysToDate(todaysDate);
let upcoming4 = addDaysToDate(todaysDate);
let upcoming5 = addDaysToDate(todaysDate);
let upcoming6 = addDaysToDate(todaysDate);
let upcoming7 = addDaysToDate(todaysDate);
let upcoming8 = addDaysToDate(todaysDate);
let upcoming9 = addDaysToDate(todaysDate);
let upcoming10 = addDaysToDate(todaysDate);
let upcoming11 = addDaysToDate(todaysDate);
let upcoming12 = addDaysToDate(todaysDate);
//over is start//
let over1 = addDaysToDate(todaysDate, -30);
let over2 = addDaysToDate(todaysDate, -30);
let over3 = addDaysToDate(todaysDate, -30);
let over4 = addDaysToDate(todaysDate, -30);
let over5 = addDaysToDate(todaysDate, -30);
let over6 = addDaysToDate(todaysDate, -30);
let over7 = addDaysToDate(todaysDate, -30);
let over8 = addDaysToDate(todaysDate, -30);
let over9 = addDaysToDate(todaysDate, -30);
let over10 = addDaysToDate(todaysDate, -30);
let over11 = addDaysToDate(todaysDate, -30);
let over12 = addDaysToDate(todaysDate, -30);
let over13 = addDaysToDate(todaysDate, -30);
let over14 = addDaysToDate(todaysDate, -30);
let over15 = addDaysToDate(todaysDate, -30);
//over is end//
let joindate = addDaysToDate(todaysDate, -660);


$('#today').html("" + getFormattedDate(todaysDate));


$('#upcoming1').html("02 " + getFormattedDate(todaysDate));

$('#upcoming2').html("05 " + getFormattedDate(todaysDate));

$('#upcoming3').html("05 " + getFormattedDate(todaysDate));

$('#upcoming4').html("07 " + getFormattedDate(todaysDate));

$('#upcoming5').html("08 " + getFormattedDate(todaysDate));

$('#upcoming6').html("12 " + getFormattedDate(todaysDate));

$('#upcoming7').html("15 " + getFormattedDate(todaysDate));

$('#upcoming8').html("15 " + getFormattedDate(todaysDate));

$('#upcoming9').html("18 " + getFormattedDate(todaysDate));

$('#upcoming10').html("19 " + getFormattedDate(todaysDate));

$('#upcoming11').html("23 " + getFormattedDate(todaysDate));

$('#upcoming12').html("28 " + getFormattedDate(todaysDate));

$('#joindate').html("23 " + getFormattedDate(joindate));


//over start//
$('#over1').html("01 " + getFormattedDate(over1));

$('#over2').html("02 " + getFormattedDate(over2));

$('#over3').html("04 " + getFormattedDate(over3));

$('#over4').html("06 " + getFormattedDate(over4));

$('#over5').html("06 " + getFormattedDate(over5));

$('#over6').html("09 " + getFormattedDate(over6));

$('#over7').html("10 " + getFormattedDate(over7));

$('#over8').html("12 " + getFormattedDate(over8));

$('#over9').html("13 " + getFormattedDate(over9));

$('#over10').html("14 " + getFormattedDate(over10));

$('#over11').html("17 " + getFormattedDate(over11));
$('#over12').html("19 " + getFormattedDate(over12));
$('#over13').html("21 " + getFormattedDate(over13));
$('#over14').html("24 " + getFormattedDate(over14));
$('#over15').html("28 " + getFormattedDate(over15));




