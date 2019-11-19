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
function loadLives(){
  var injection = " ";
  for(var i = 0; i<leben; i++){
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
          if(leben == 0){
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
  var whereTo = "../mehr/index.html";
  var htmlinjection = '<div class="box">';
  htmlinjection += '<';
  htmlinjection += 'a href = "" >';
  htmlinjection +=  'Weiter';
  htmlinjection += '</a>';
  htmlinjection += '<a href ="';
  htmlinjection += whereTo;
  htmlinjection += '">';
  htmlinjection += 'Mehr </a></div>';


  document.getElementById("answer").scrollIntoView();
  document.getElementById("titel").innerHTML = questionlist[questionid].title;
  document.getElementById("besch").innerHTML = questionlist[questionid].beschreibung;
  document.getElementById("answer").innerHTML = htmlinjection;
}
