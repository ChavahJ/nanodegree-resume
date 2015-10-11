//Biography
var bio = {
  "name": "Chavah Jacobs",
  "role" : "Web Developer",
  "contacts": {
    "email" : "elynchav@gmail.com",
    "mobile" : "054-220-1419",
    "github" : "chavahj",
    "location" : "Beit Shemesh, Israel"
    },
  "picture" : "images/197x148.gif",
  "welcomeMessage" : "Hello! I'm looking forward to meeting you.",
  "skills" : ["Creative", "Proactive", "Wordsmith", "Energetic", "Hard Working"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

// var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.picture);
// $("#header").append(formattedHTMLbioPic);

if (bio.skills.length > 0 ) {
  $("#header").append(HTMLskillsStart);

  var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedHTMLskills);
  var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedHTMLskills);
  var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedHTMLskills);
  var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedHTMLskills);
  var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedHTMLskills);
}

//Work
var work = {
  "jobs" : [
    {
      "employer" : "SIS Resources, Inc",
      "title" : "Jr Web Developer",
      "location" : "Beit Shemesh, Israel",
      "dates" : "April 2015 - Present",
      "description" : "Coding with HTML, CSS, JavaScript, and PHP."
    },
    {
      "employer" : "SIS Resources, Inc",
      "title" : "Content Writer",
      "location" : "Beit Shemesh, Israel",
      "dates" : "January 2014 - April 2015",
      "description" : "Creating content across a wide variety of platforms."
    },
    {
      "employer" : "SIS Resources, Inc",
      "title" : "Customer Service Manager",
      "location" : "Beit Shemesh, Israel",
      "dates" : "January 2011 - January 2014",
      "description" : "Ran a customer service department of approximately 30 people."
    },
    {
      "employer" : "Freelance",
      "title" : "Content Writer",
      "location" : "Beit Shemesh, Israel",
      "dates" : "April 2001 - December 2010",
      "description" : "Wrote articles for magazines, website content, and edited translated text for clarity."
    }
  ]
}

function displayWork() {
  for (job in work.jobs) {
    //create new div for work experience
    $("#workExperience").append(HTMLworkStart);

    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  };
}

displayWork();

// //Projects
// var projects = {
//   "project" = [
//     {
//       "title" : "",
//       "dates" : "",
//       "description" : "",
//       "images" :""
//     },
//     {
//       "title" : "",
//       "dates" : "",
//       "description" : "",
//       "images" :""
//     },
//     {
//       "title" : "",
//       "dates" : "",
//       "description" : "",
//       "images" :""
//     },
//     {
//       "title" : "",
//       "dates" : "",
//       "description" : "",
//       "images" :""
//     }
//   ]
// }


// //Education
// var education = {
//   "schools": [
//       {
//         "name" : "Carlsbad High School",
//         "city" : "Carlsbad, California",
//         "degree" : "High School Diploma",
//         "years" : "1989 - 1993",
//         "url" : ""
//       },
//       {
//         "name" : "The University of California, Berkeley",
//         "city" : "Berkeley, California",
//         "degree" : "BA",
//         "major" : "English Literature",
//         "minor" : "Classical Civilizations",
//         "years" : "1993 - 1997",
//         "url" : ""
//       }
//   ],

//   "onlineCourses": [
//     "onlineCourse" : [
//       {
//         "title" : "Front End Web Development",
//         "school" : "TeamTreehouse.com",
//         "dates" : "February 2015 - Present",
//         "url" : "http://teamtreehouse.com/tracks/front-end-web-development"
//       },
//       {
//         "title" : "Front-End Web Developer Nanodegree",
//         "school" : "Udacity",
//         "dates" : "August 2015 - Present",
//         "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
//       }
//     ]
//   ]
// }
