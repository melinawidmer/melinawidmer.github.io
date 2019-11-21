var questionlist = [{
  id: "one",
  question: "Ich möchte mich im Aktivstall fortbewegen!",
  title: "BigTrail!",
  beschreibung: "Genau, das ist unser Big Trail!"
}, {
  id: "two",
  question: "Ich habe Durst, wohin muss ich nun gehen?",
  title: "Tränke!",
  beschreibung: "Endlich konnte ich meinen Durst löschen!"
}, {
  id: "three",
  question: "Wo kann ich mich genüsslich wälzen?",
  title: "Wälzplatz!",
  beschreibung: "Genau, das ist der Wälzplatz! Lass uns weitergehen!"
}, {
  id: "four",
  question: "Ich möchte mich richtig austoben und etwas Gras fressen, wohin soll ich gehen?",
  title: "Weide!",
  beschreibung: "Wow, die Weide!"
}, {
  id: "five",
  question: "Wo ist der Eingang der Weide?",
  title: "Weidentor!",
  beschreibung: "Genau, hier ist das beliebte Tor!"
}, {
  id: "six",
  question: "Ich möchte etwas die frische Frühlingssonne geniessen!",
  title: "Sonnenplatz!",
  beschreibung: "Super, hier ist es schon viel wärmer!"
}, {
  id: "seven",
  question: "Ich habe Hunger!",
  title: "Heu!",
  beschreibung: "Richtig, das sind unsere Raufutterautomaten!"
}, {
  id: "eight",
  question: "Ich möchte als Zusatz noch etwas Stroh fressen!",
  title: "Stroh!",
  beschreibung: "Genau, hier finde ich eine Strohraufe!"
}, {
  id: "nine",
  question: "Ein neuer Freund ist bei uns im Stall angekommen, wo steht er wohl?",
  title: "Integrationsbox!",
  beschreibung: "Toll, so kann ich ihn näher betrachten!"
}, {
  id: "ten",
  question: "Ich habe heiss, lass uns etwas in den Schatten gehen!",
  title: "Schattenplatz!",
  beschreibung: "Super gemacht, jetzt geht es mir schon sichtlich besser!"
}, {
  id: "eleven",
  question: "Meine Besitzerin möchte mit mir eine Reitstunde besuchen, wohin soll sie mich bringen?",
  title: "Reithalle!",
  beschreibung: "Genau, hier ist unsere Reithalle."
}, {
  id: "twelve",
  question: "Ich bin müde und möchte mich gerne etwas ausruhen, wohin soll ich mich bewegen?",
  title: "Liegeplatz!",
  beschreibung: "Toll, nun konnte ich mich richtig entspannen!"
}, {
  id: "thirteen",
  question: "Ich habe Hunger und durch meine harte Arbeit, die ich heute geleistet habe brauche ich unbedingt Energie, wo soll ich hingehen?",
  title: "Kraftfutter!",
  beschreibung: "Richtig, dass sind unsere Kraftfutterautomaten, nun kann ich wieder herumtollen!"
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
