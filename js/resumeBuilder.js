
var bio = {
    "name": "Zainab",
    "role": "Developer",
    "contacts": {
        "mobile": "+9661234567890",
        "email": "Z@ZZ.com",
        "github": "github,com",
        "twitter": "twitter.com",
        "location": "Saudi Arabia"
    },
    "welcomeMessage": "An obstacle is often a stepping stone.",
    "skills": ["Creative person", "Really smart", "extremely reliable"],
    "biopic": "images/bio.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").prepend(formattedMobile);
        $("#footerContacts").prepend(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMsg);


        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill;
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    } //function
};

var education = {
    "schools": [{
            "name": "KSU",
            "location": "Riyadh",
            "degree": "CS",
            "majors": ["IT"],
            "dates": "2000 - 2005",
            "url": "ksu.edu.sa"
        },
        {
            "name": "DAL",
            "location": "Halifax Canada",
            "degree": "MACS",
            "majors": ["Applied CS"],
            "dates": "2012 - 2014",
            "url": "dal.ca"
        }
    ],
    "onlineCourses": [{
            "title": "FEND Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "udacity.com"
        },
        {
            "title": "Flash Animation",
            "school": "Udemy",
            "dates": "2015",
            "url": "Udemy.com"
        }
    ],
    "display": function() {


        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            for (var i = 0; i < education.schools.length; i++) {
                var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                $(".education-entry:last").append(formattedName + formattedDegree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                $(".education-entry:last").append(formattedSchoolDates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                $(".education-entry:last").append(formattedSchoolLocation);
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);

            for (var a = 0; a < education.onlineCourses.length; a++) {
                var formattedOntitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[a].title);
                var formattedOnSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[a].school);
                $(".education-entry:last").append(formattedOntitle + formattedOnSchool);
                var formattedOnDates = HTMLonlineDates.replace("%data%", education.onlineCourses[a].dates);
                $(".education-entry:last").append(formattedOnDates);
                var formattedOnURL = HTMLonlineURL.replace("%data%", education.onlineCourses[a].url);
                $(".education-entry:last").append(formattedOnURL);

            }

        }

    } //func end
};

var work = {
    "jobs": [{
            "employer": "Kids",
            "title": "superMOM",
            "location": "Qatif",
            "dates": "2011 - current",
            "description": "nanny, maid, chef, handyman, insect killer...etc"
        },
        {
            "employer": "Light Studio",
            "title": "Developer/Illustrator",
            "location": "Saudi Arabia",
            "dates": "2015 - current",
            "description": "Work on various project handling code, animation or art illustration"
        }
    ],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {

            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
            
        }
    } //function 
};

var projects = {
    "projects": [{
            "title": "Wojdan",
            "dates": "2017",
            "description": "Visual Novel Game",
            "images": ["images/Woj1.jpg", "images/Woj2.jpg", "images/Woj3.jpg"]
        },
        {
            "title": "360° Artbook",
            "dates": "2015",
            "description": "Artbook with four other artists",
            "images": ["images/zz.jpg", "images/zzz.jpg"]
        }
    ],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[i].images.length > 0) {
                for (var k = 0; k < projects.projects[i].images.length; k++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[k]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        } //for
    } //function
};




$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

