function getFormattedDate(date) {
  let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  return `${month}  ${year}`
}

function addDaysToDate(date, daysToAdd) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() + daysToAdd);
  
    return newDate
}

let available = new Date();

let review = new Date();

let nextmonth = addDaysToDate(available, -30);

$('#available').html("Available Jobs in " + getFormattedDate(available));

$('#review').html("Arjun Reddy's Performance Review by Client in " + getFormattedDate(available));

$('#nextmonth').html("Job History of " + getFormattedDate(nextmonth));


