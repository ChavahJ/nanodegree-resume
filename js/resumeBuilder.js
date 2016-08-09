//Biography
var bio = {
    "name": "Chavah Jacobs",
    "role": "UX Developer",
    "contacts": {
        "email": "elynchav@gmail.com",
        "mobile": "054-220-1419",
        "github": "ChavahJ</a>",
        "githubURL": "https://github.com/ChavahJ",
        "linkedIn": "Chavah-Jacobs",
        "linkedInURL": "https://il.linkedin.com/pub/chavah-jacobs/49/b99/aa",
        "location": "Beit Shemesh, Israel"
    },
    "picture": "images/headshot.JPG",
    "welcomeMessage": "&quot;I love people, writing, and front-end development. How can I help you?&quot;",
    "skills": ["Creative", "Proactive", "Wordsmith", "Passionate", "Hard Working"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedHTMLbioPic).append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            if (bio.skills[skill]) {
                var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedHTMLskills);
            }
        }
    }

    var formattedHTMLmobile = HTMLmobile.replace("#", bio.contacts.mobile).replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedHTMLmobile);

    var formattedHTMLemail = HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedHTMLemail);

    var formattedHTMLgithub = HTMLgithub.replace("#", bio.contacts.githubURL).replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedHTMLgithub);

    var formattedHTMLlinkedIn = HTMLlinkedIn.replace("#", bio.contacts.linkedInURL).replace("%data%", bio.contacts.linkedIn);
    $("#topContacts,#footerContacts").append(formattedHTMLlinkedIn);
};

//Work
var work = {
    "jobs": [{
        "employer": "Nu Mark Innovations",
        "title": "UX Developer",
        "location": "Beit Shemesh, Israel",
        "dates": "February 2015-Present",
        "description": "I have been creating website pages using mainly HTML, CSS, and Javascript, with a smattering of PHP here and there. I use Git extensively on a daily basis, love it, and have mastered resolving merge conflicts. While I enjoy building new pages, I also have a passion for performance optimization with legacy code. I'm an ardent advocate of a mobile-first approach to design and development, and believe in finding the most simple, clean manner of executing any project. Finally, I work closely with our SEO manager, on our sites' information architecture, including meta information, URL optimization, and fixing broken assets or links."
    }, {
        "employer": "Nu Mark Innovations",
        "title": "Marketing Communications Specialist",
        "location": "Beit Shemesh, Israel",
        "dates": "April 2014-February 2015",
        "description": "SIS Resources, Inc was purchased by Altria, and ultimately became Nu Mark Innovations. I was responsible for writing, editing, and updating content across multiple websites, blogs, and social media sites. I wrote copy for email campaigns, product packaging, user manuals, video scripts, tweets, Facebook posts, and slideshow presentations. Additionally, I coordinated with third-party vendors (for SEO and content marketing needs). In addtion to writing for eCommerce platforms, I also wrote copy for retail marketing and internal departments, such as Human Resources."
    },{
        "employer": "SIS Resources, Inc",
        "title": "Customer Service Manager",
        "location": "Beit Shemesh, Israel",
        "dates": "January 2011-April 2014",
        "description": "I organized the schedule for the customer service department and tracked employee performance (while on the shift).  I successfully appeased and solved problems for upset, confrontational customers — I was the person angry customers got when they wanted to speak to a manager.  Also, I managed fraud/age verification for customer accounts.  I did the initial screening and first interviews for new employees, and trained them.  I created and maintained an internal blog for the department.  Finally, I created a training curriculum, including mapping processes, producing training videos, and working on a training manual."
    }, {
        "employer": "Freelance",
        "title": "Content Writer",
        "location": "Beit Shemesh, Israel",
        "dates": "Apr 2001-Dec 2010",
        "description": "During this time period, I worked a variety of freelance jobs.  My projects included: writing marketing brochures and creating sales packages for Pacific Professionals Inc., a veterinary brokerage firm; creating and maintaining a website for Pacific Professionals Inc., including increasing the site&rsquo;s search engine optimization (SEO); writing ads for Google Adwords and &lsquo;Sell On Amazon&rsquo; program for Jewish Educational Software, resulting in higher click-through rates; summarizing legal depositions for TranscriptSure Legal Services; and creating feature articles for Mishpacha magazine."
    }]
};

work.display = function() {
    for (var job in work.jobs) {
        if (work.jobs[job]) {
            $("#workExperience").append(HTMLworkStart);

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
        }
    }
};

//Projects
var projectData = {
    "projects": [{
        "title": "Wonderland Optimization",
        "url": "http://chavahj.github.io/perfmatters/index.html",
        "dates": "April of 2016",
        "description": "This was a mini-project completed during a course on MVVM Javascript. "
    }, {
        "title": "Sample Project Two",
        "url": "http://chavahj.github.io/perfmatters/index.html",
        "dates": "Apr 2016-Sept 2016",
        "description": "My husband, in a moment of guilt, offered my website building services to his father — seeing as I was building a website for his mother. In order to preserve peace in the family, I made a website providing details about his musical band."
        }]
};

projectData.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var project in projectData.projects) {
        if (projectData.projects[project]) {
            var formattedProjTitle = HTMLprojectTitle.replace("#", projectData.projects[project].url).replace("%data%", projectData.projects[project].title);
            $(".project-entry:last").append(formattedProjTitle);

            var formattedProjDates = HTMLprojectDates.replace("%data%", projectData.projects[project].dates);
            $(".project-entry:last").append(formattedProjDates);

            var formattedProjDescription = HTMLprojectDescription.replace("%data%", projectData.projects[project].description);
            $(".project-entry:last").append(formattedProjDescription);
        }
    }
};

//Education
var education = {
    "schools": [{
        "name": "Carlsbad High School",
        "city": "Carlsbad, California",
        "degree": "Diploma",
        "dates": "1989-1993",
        "url": "http://carlsbadhs.schoolloop.com/"
    }, {
        "name": "The University of California, Berkeley",
        "city": "Berkeley, California",
        "degree": "BA",
        "major": "English Literature",
        "minor": "Classical Civilizations",
        "dates": "1993-1997",
        "url": "http://www.berkeley.edu/"
    }, {
        "name": "EYAHT: College for Women",
        "city": "Jerusalem, Israel",
        "degree": "MA",
        "major": "Judaic Studies",
        "dates": "1998-2001",
        "url": "https://www.eyaht.info/"
    }],

    "onlineCourses": [{
        "schoolUrl": "https://teamtreehouse.com/",
        "title": "Front End Web Development",
        "school": "TeamTreehouse.com",
        "dates": "February 2015 - Present",
        "courseUrl": "http://teamtreehouse.com/tracks/front-end-web-development"
    }, {
        "schoolUrl": "https://www.udacity.com",
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "August 2015 - Present",
        "courseUrl": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        if (education.schools[school]) {
            var formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].name);
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

    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        if (education.onlineCourses[course]) {
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[course].schoolUrl).replace("%data%", education.onlineCourses[course].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedTitleSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;
            $(".education-entry:last").append(formattedTitleSchool);

            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedHTMLonlineDates);

            var formattedHTMLonlineURL = HTMLonlineURL.replace("#", education.onlineCourses[course].courseUrl).replace("%data%", education.onlineCourses[course].courseUrl);
            $(".education-entry:last").append(formattedHTMLonlineURL);
        }
    }
};

bio.display();
work.display();
projectData.display();
education.display();
