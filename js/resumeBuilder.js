var bio = {
  "name" : "Gláucia Isidoro",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+55119********",
    "email" : "g*************o@gmail.com",
    "linkedin" : "glauciaisidoro",
    "github" : "glau-isidoro",
    "location" : "São Paulo"
    },
  "welcomeMessage" : "Cat ipsum dolor sit amet, if it smells like fish eat as much as you wish",
  "skills" : [
    "awesomeness", "programming", "cryogenic sleep", "Java"
    ],
  "bioPic" : "images/glaucia-e-gato.jpg",
  display : function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLinkedin = HTMLlinkedin.replace(/%data%/g, bio.contacts.linkedin);
    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedLinkedin);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#bottomContacts").append(formattedMobile);
    $("#bottomContacts").append(formattedEmail);
    $("#bottomContacts").append(formattedLinkedin);
    $("#bottomContacts").append(formattedGithub);


    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
    };
  }
};

var work = {
  "jobs" : [
    {
    "employer" : "Metasix",
    "title" : "Programadora de Sistemas",
    "dates" : "Julho 2016 - atualmente",
    "description" : "Cat ipsum dolor sit amet, then cats take over the world poop on grasses. See owner, run in terror and sometimes switches in french and say miaou just because well why not flop over cat is love, cat is life. Russian blue kitty scratches couch bad kitty sit and stare ignore the squirrels, you'll never catch them anyway, chase imaginary bugs.",
    "url" : "http://www.metasix.com.br/",
    }
  ],
  display : function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var education = {
  "schools" : [
    {
      "name" : "Caelum",
      "city" : "São Paulo, SP, BR",
      "degree" : "profissionalizante",
      "dates" : 2016,
      "major" : "Formação Java - Java e Orientação a Objetos / Java para Desenvolvimento Web / Laboratório Java com Testes, JSF e Design Patterns.",
      "url" : "https://www.caelum.com.br/cursos-java/",
    },
    {
      "name" : "Campus Code",
      "city" : "São Paulo, SP, BR",
      "degree" : "profissionalizante",
      "dates" : 2016,
      "major" : "Imersão Ruby on Rails",
      "url" : "https://www.campuscode.com.br/imersao-web",
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Java e Orientação a Objetos",
      "school" : "Coursera",
      "dates" : 2016,
      "url" : "https://www.coursera.org/learn/orientacao-a-objetos-com-java"
    }
  ],
  display : function() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url);
      $(".education-entry:last").append(formattedName);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
      $(".education-entry:last").append(formattedLocation);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
    }

    for (course in education.onlineCourses) {
      $(".education-entry:last").append(HTMLonlineClasses);

      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedTitle);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedSchool);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedUrl);
    }
  }
};

var projects = {
  "projects" : [
    {
    "title" : "Cat ipsum dolor sit amet",
    "dates" : "2016",
    "description" : "Make muffins hate dog, and attack the dog then pretend like nothing happened for leave hair everywhere. Chase red laser dot spit up on light gray carpet instead of adjacent linoleum knock over christmas tree and make meme, make cute face meow. Curl into a furry donut shake treat bag poop in litter box, scratch the walls find something else more interesting purr for no reason meowzer!. Hopped up on catnip massacre a bird in the living room and then look like the cutest and most innocent animal on the planet.",
    "images" : [
      "http://lorempixel.com/1500/700/cats/3/",
      "http://lorempixel.com/1500/700/cats/9/",
      "http://lorempixel.com/1500/700/cats/8/",
      "http://lorempixel.com/1500/700/cats/4/",
      "http://lorempixel.com/1500/700/cats/5/",
      ]
    }
  ],
  display : function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        $(".project-entry:last").append('<div id="imagens-projeto" class="carousel carousel-slider">');
        var i = 0;
        var ordem = ['one!','two!','three!','four!','five!'];
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%ordem%", ordem[i]).replace("%data%", projects.projects[project].images[image]);
          $("#imagens-projeto:last").append(formattedImage);
          i++;
        }
        $(".project-entry:last").append('</div>');
      }
    }
  }
};

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
