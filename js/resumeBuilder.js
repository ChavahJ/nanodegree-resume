//Biography
var bio = {
  "name": "Chavah Jacobs",
  "role" : "UX Content Strategist",
  "contacts": {
    "email" : "elynchav@gmail.com",
    "mobile" : "054-220-1419",
    "github" : "chavahj",
    "location" : "Beit Shemesh, Israel"
    },
  "picture" : "images/headshot.jpg",
  "welcomeMessage" : "&quot;Hello! I'm looking forward to meeting you.&quot;",
  "skills" : ["Creative", "Proactive", "Wordsmith", "Energetic", "Hard Working"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedHTMLbioPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

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

// function displayBio() {
//
// }

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
  for (var job in work.jobs) {
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

//Projects
var projectData = {
  "projects" : [
    {
      "title" : "Sample Project One",
      "dates" : "January 2016 - May 2016",
      "description" : "I want to create a website for my mother-in-law, showcasing all her healing skills, including: reflexology, aromatherapy, energy healing, and therapeutic  massage. This is not an eCommerce site, but more of a calling card for her to share with potential clients.",
      "images" : ["http://placehold.it/300x200", "http://placehold.it/300x200", "http://placehold.it/300x200"]
    },
    {
      "title" : "Sample Project Two",
      "dates" : "April 2016 - September 2016",
      "description" : "My husband, in a moment of guilt, offered my website building services to his father — seeing as I was building a website for his mother. In order to preserve peace in the family, I made a website providing details about his musical band.",
      "images" : ["http://placehold.it/300x200", "http://placehold.it/300x200", "http://placehold.it/300x200"]
    }
  ]
}

projectData.display = function () {
  $("#projects").append(HTMLprojectStart);
  for (var project in projectData.projects) {
      var formattedProjTitle = HTMLprojectTitle.replace("%data%", projectData.projects[project].title);
      $(".project-entry:last").append(formattedProjTitle);

      var formattedProjDates = HTMLprojectDates.replace("%data%", projectData.projects[project].dates);
      $(".project-entry:last").append(formattedProjDates);

      var formattedProjDescription = HTMLprojectDescription.replace("%data%", projectData.projects[project].description);
      $(".project-entry:last").append(formattedProjDescription);

      if (projectData.projects[project].images.length > 0) {
        for (image in projectData.projects[project].images) {
          var formattedProjImg = HTMLprojectImage.replace("%data%", projectData.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjImg);
        }
      }
  }
}

projectData.display();

//Education
var education = {
  "schools": [
      {
        "name" : "Carlsbad High School",
        "city" : "Carlsbad, California",
        "degree" : "Diploma",
        "dates" : "1989 - 1993",
        "url" : "http://carlsbadhs.schoolloop.com/"
      },
      {
        "name" : "The University of California, Berkeley",
        "city" : "Berkeley, California",
        "degree" : "BA",
        "major" : "English Literature",
        "minor" : "Classical Civilizations",
        "dates" : "1993 - 1997",
        "url" : "http://www.berkeley.edu/"
      },
      {
        "name" : "EYAHT: College for Women",
        "city" : "Jerusalem, Israel",
        "degree" : "MA",
        "major" : "Judaic Studies",
        "dates" : "1998 - 2001",
        "url" : "https://www.eyaht.info/"
      }
  ],

  "onlineCourses": [
      {
        "title" : "Front End Web Development",
        "school" : "TeamTreehouse.com",
        "dates" : "February 2015 - Present",
        "url" : "http://teamtreehouse.com/tracks/front-end-web-development"
      },
      {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "August 2015 - Present",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
      }
    ]
}

education.display = function () {
  $("#education").append(HTMLschoolStart);
  for (var school in education.schools) {
    var formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url) + ("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    $(".education-entry:last").append(formattedSchoolCity);

    if (education.schools[school].major) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
    }

    if (education.schools[school].minor) {
      var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
      $(".education-entry:last").append(formattedMinor);
    }
  }
}

education.display();

$("#mapDiv").append(googleMap);
