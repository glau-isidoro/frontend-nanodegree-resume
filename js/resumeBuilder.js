var bio = {
  "name" : "Gláucia Isidoro",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+55119********",
    "email" : "g*************o@gmail.com",
    "giihub" : "glau-isidoro",
    "twitter" : "@************",
    "location" : "São Paulo"
  },
  "welcomeMessage" : "Cat ipsum dolor sit amet, if it smells like fish eat as much as you wish",
  "skills" : [
    "awesomeness", "programming", "cryogenic sleep", "Java"
  ],
  "bioPic" : "images/glaucia-e-gato.jpg"
};

var work = {
  "jobs" : [
    {
    "employer" : "Metasix",
    "title" : "Programadora de Sistemas",
    "dates" : "Julho 2016 - atualmente",
    "description" : "Cat ipsum dolor sit amet, then cats take over the world poop on grasses. See owner, run in terror and sometimes switches in french and say miaou just because well why not flop over cat is love, cat is life. Russian blue kitty scratches couch bad kitty sit and stare ignore the squirrels, you'll never catch them anyway, chase imaginary bugs."
  }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Caelum",
      "city" : "São Paulo, SP, BR",
      "degree" : "profissionalizante",
      "dates" : 2016,
      "url" : "https://www.caelum.com.br/"
    },
    {
      "name" : "Campus Code",
      "city" : "São Paulo, SP, BR",
      "degree" : "profissionalizante",
      "dates" : 2016,
      "url" : "https://www.campuscode.com.br/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Java e Orientação a Objetos",
      "school" : "Coursera",
      "dates" : 2016,
      "url" : "https://www.coursera.org/learn/orientacao-a-objetos-com-java"
    }
  ]
};

var projects = {
  "projects" : [
    {
    "title" : "Cat ipsum dolor sit amet",
    "dates" : "2016",
    "description" : "Make muffins hate dog, and attack the dog then pretend like nothing happened for leave hair everywhere. Chase red laser dot spit up on light gray carpet instead of adjacent linoleum knock over christmas tree and make meme, make cute face meow. Curl into a furry donut shake treat bag poop in litter box, scratch the walls find something else more interesting purr for no reason meowzer!. Hopped up on catnip massacre a bird in the living room and then look like the cutest and most innocent animal on the planet.",
    "images" : [
      "http://placekitten.com/200/300",
      "http://placekitten.com/200/300"
    ]
  }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

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

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();
