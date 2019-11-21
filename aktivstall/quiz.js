var questionlist = [{
  id: "one",
  question: "BigTrail?",
  title: "BigTrail!",
  beschreibung: ""
}, {
  id: "two",
  question: "Tränke?",
  title: "Tränke!",
  beschreibung: ""
}, {
  id: "three",
  question: "Wälzplatz?",
  title: "Wälzplatz!",
  beschreibung: ""
}, {
  id: "four",
  question: "Weide?",
  title: "Weide!",
  beschreibung: ""
}, {
  id: "five",
  question: "Weidentor?",
  title: "Weidentor!",
  beschreibung: ""
}, {
  id: "six",
  question: "Sonnenplatz?",
  title: "Sonnenplatz!",
  beschreibung: ""
}, {
  id: "seven",
  question: "Heu?",
  title: "Heu!",
  beschreibung: ""
}, {
  id: "eight",
  question: "Stroh?",
  title: "Stroh!",
  beschreibung: ""
}, {
  id: "nine",
  question: "Integrationsbox?",
  title: "Integrationsbox!",
  beschreibung: ""
}, {
  id: "ten",
  question: "Schattenplatz?",
  title: "Schattenplatz!",
  beschreibung: ""
}, {
  id: "eleven",
  question: "Reithalle?",
  title: "Reithalle!",
  beschreibung: ""
}, {
  id: "twelve",
  question: "Liegeplatz?",
  title: "Liegeplatz!",
  beschreibung: ""
}, {
  id: "thirteen",
  question: "Kraftfutter?",
  title: "Kraftfutter!",
  beschreibung: ""
}];


var questiontime = false;
var questionid = 0;
var leben = 3;

//Zufallszahl machen
function randomizer(maximum, minimum) {
  var retVal = Math.floor(Math.random() * maximum) + minimum;
  return retVal;
}

//Frage eroieren
$(function() {
  questionid = randomizer(questionlist.length, 0);
  $("#question").text(questionlist[questionid].question)
  questiontime = true;
  loadLives();
})

//leben erstellen
function loadLives() {
  var injection = " ";
  for (var i = 0; i < leben; i++) {
    injection += '<img src="../images/love.png">';
  }
  document.getElementById("lives").innerHTML = injection;

}


$(function() {
  $("#Ebene_1 > path, #Ebene_1 > rect").each(function() {
    $(this).click(function() {
      if (questiontime) {
        if ($(this).attr("class") == (questionlist[questionid].id)) {
          //id found
          showanswers();
          questiontime = false;
        } else {
          //id not found
          leben--;
          loadLives();
          if (leben == 0) {
            document.getElementById("titel").innerHTML = "Du hast verloren";
          }
        }
      } else {
        alert("Drücke erst weiter!");
      }
    })
  })
})

function showanswers() {
  var whereTo = " ";
  switch (questionid) {
    case 0:
      whereTo = "../bigtrail/index.html";
      break;
    case 1:
      whereTo = "../trinke/index.html";
      break;
    case 2:
      whereTo = "../walzplatz/index.html";
      break;
    case 3:
      whereTo = "../weide/index.html";
      break;
    case 4:
      whereTo = "../weidegate/index.html";
      break;
    case 5:
      whereTo = "../sonnenplatz/index.html";
      break;
    case 6:
      whereTo = "../heu/index.html";
      break;
    case 7:
      whereTo = "../stroh/index.html";
      break;
    case 8:
      whereTo = "../integrationsbox/index.html";
      break;
    case 9:
      whereTo = "../schattenplatz/index.html";
      break;
    case 10:
      whereTo = "../reithalle/index.html";
      break;
    case 11:
      whereTo = "../liegeplatz/index.html";
      break;
    case 12:
      whereTo = "../kraftfutter/index.html";
      break;
    default:

  }

  var htmlinjection = '<div class="box">';
  htmlinjection += '<';
  htmlinjection += 'a href = "" class="btn" style="margin-right:10px;">';
  htmlinjection += 'Weiter';
  htmlinjection += '</a>';
  htmlinjection += '<a href ="';
  htmlinjection += whereTo;
  htmlinjection += '" class="btn">';
  htmlinjection += 'Mehr </a></div>';


  document.getElementById("answer").scrollIntoView();
  document.getElementById("titel").innerHTML = questionlist[questionid].title;
  document.getElementById("besch").innerHTML = questionlist[questionid].beschreibung;
  document.getElementById("answer").innerHTML = htmlinjection;
}
