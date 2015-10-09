//Header Information
var formattedName = HTMLheaderName.replace("%data%", "Chavah Jacobs");

var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace ("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
      "description" : "Lots of stuff. Get description from LinkedIn."
    },
    {
      "employer" : "Freelance",
      "title" : "Content Writer",
      "location" : "Beit Shemesh, Israel",
      "dates" : "April 2001 - December 2010",
      "description" : "Lots of stuff... get description from LinkedIn."
    }
  ]
}

//Projects
var projects = {
  "project" = [
    {
      "title" : "",
      "dates" : "",
      "description" : "",
      "images" :""
    },
    {
      "title" : "",
      "dates" : "",
      "description" : "",
      "images" :""
    },
    {
      "title" : "",
      "dates" : "",
      "description" : "",
      "images" :""
    },
    {
      "title" : "",
      "dates" : "",
      "description" : "",
      "images" :""
    }
  ]
}

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
  "picture-URL" : "images/197x148.gif",
  "welcomeMessage" : "Hello! I'm looking forward to meeting you.",
  "skills" : ["Creative", "Proactive", "Wordsmith", "Energetic", "Hard Working"]
};

//Education
var education = {
  "schools": [
      {
        "name" : "Carlsbad High School",
        "city" : "Carlsbad, California",
        "degree" : "High School Diploma",
        "years" : "1989 - 1993",
        "url" : ""
      },
      {
        "name" : "The University of California, Berkeley",
        "city" : "Berkeley, California",
        "degree" : "BA",
        "major" : "English Literature",
        "minor" : "Classical Civilizations",
        "years" : "1993 - 1997",
        "url" : ""
      }
  ],

  "onlineCourses": [
    "onlineCourse" : [
      {
        "title" : "",
        "school" : "",
        "dates" : "",
        "url" : ""
      },
      {
        "title" : "",
        "school" : "",
        "dates" : "",
        "url" : ""
      },
      {
        "title" : "",
        "school" : "",
        "dates" : "",
        "url" : ""
      },
      {
        "title" : "",
        "school" : "",
        "dates" : "",
        "url" : ""
      }      
    ]
  ]
}
