function getFormattedDate(date) {
  let monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  return `${day} ${month} ${year}`
}

function addDaysToDate(date, daysToAdd) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() + daysToAdd);
  
    return newDate
}
//main temp//
let todaysDate = new Date();
let up1 = addDaysToDate(todaysDate, +5);

let up2 = addDaysToDate(todaysDate, +3);
let up3 = addDaysToDate(todaysDate, +1);
let up4 = addDaysToDate(todaysDate, 0);
let up5 = addDaysToDate(todaysDate, -2);
let up6 = addDaysToDate(todaysDate, -5);
let up7 = addDaysToDate(todaysDate, -6);
let up8 = addDaysToDate(todaysDate, -8);

// basic is start//
let upcomingjob = addDaysToDate(todaysDate, 0);

let Lastdonejob = addDaysToDate(todaysDate, -2);

//over is start//
let over1 = addDaysToDate(todaysDate, -27);

let over2 = addDaysToDate(todaysDate, -26);
let over3 = addDaysToDate(todaysDate, -25);
let over4 = addDaysToDate(todaysDate, -24);
let over5 = addDaysToDate(todaysDate, -23);
let over6 = addDaysToDate(todaysDate, -22);
let over7 = addDaysToDate(todaysDate, -19);
let over8 = addDaysToDate(todaysDate, -17);
let over9 = addDaysToDate(todaysDate, -13);
let over10 = addDaysToDate(todaysDate, -11);
let over11= addDaysToDate(todaysDate, -10);
let over12 = addDaysToDate(todaysDate, -8);
let over13 = addDaysToDate(todaysDate, -7);
let over14 = addDaysToDate(todaysDate, -5);
let over15 = addDaysToDate(todaysDate, -3);
//mod over//

$('#over1').html(" " + getFormattedDate(over1));
$('#over2').html(" " + getFormattedDate(over2));
$('#over3').html(" " + getFormattedDate(over3));
$('#over4').html(" " + getFormattedDate(over4));
$('#over5').html(" " + getFormattedDate(over5));
$('#over6').html(" " + getFormattedDate(over6));
$('#over7').html(" " + getFormattedDate(over7));
$('#over8').html(" " + getFormattedDate(over8));
$('#over9').html(" " + getFormattedDate(over9));
$('#over10').html(" " + getFormattedDate(over10));
$('#over11').html(" " + getFormattedDate(over11));
$('#over12').html(" " + getFormattedDate(over12));
$('#over13').html(" " + getFormattedDate(over13));
$('#over14').html(" " + getFormattedDate(over14));
$('#over15').html(" " + getFormattedDate(over15));
//over is end//





let tenDaysAfterToday = addDaysToDate(todaysDate, 10);
//end main temp//

$('#today').html("" + getFormattedDate(todaysDate));

$('#up1').html(" " + getFormattedDate(up1));
$('#up2').html(" " + getFormattedDate(up2));
$('#up3').html(" " + getFormattedDate(up3));
$('#up4').html(" " + getFormattedDate(up4));
$('#up5').html(" " + getFormattedDate(up5));
$('#up6').html(" " + getFormattedDate(up6));
$('#up7').html(" " + getFormattedDate(up7));
$('#up8').html(" " + getFormattedDate(up8));

// basic is start//

$('#upcomingjob').html(" " + getFormattedDate(upcomingjob));

$('#Lastdonejob').html(" " + getFormattedDate(Lastdonejob));

//basic is end //
$('#ten-days-ahead').html("The date ten days from today is: " + getFormattedDate(tenDaysAfterToday));


