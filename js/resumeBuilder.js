//Header Information
var formattedName = HTMLheaderName.replace("%data%", "Chavah Jacobs");

var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace ("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Contact Information

var mobile = "050-220-1419";
var formattedMobile = HTMLmobile.replace ("%data%", mobile);
