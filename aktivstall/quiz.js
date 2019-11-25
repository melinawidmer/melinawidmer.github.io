//eine Liste, mit allen fragen, titeln und beschreibungen auf einmal.
var questionlist = [{
  id: "one",
  question: "Ich möchte mich im Aktivstall auf dem Big Trail fortbewegen!",
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

//macht die Fragezeit falsch was bedeutet questiontime soll später regeln, ob man noch spielen darf oder nicht
var questiontime = false;
//wählt ein Element aus der obrigen Liste aus, ist aber im Moment noch gar nichts.
var questionid = 0;
//Die Anzahl Leben und somit Herzen.
var leben = 3;

//Zufallszahl machen
function randomizer(maximum, minimum) {
  var retVal = Math.floor(Math.random() * maximum) + minimum;
  return retVal;
}

//Frage eroieren
$(function() {
  //macht questionid die Zufallszahl
  questionid = randomizer(questionlist.length, 0);
  /*fügt in das element mit der ID question in HTML den text ein,
  der unter der Liste an der Stelle der Questionid gefunden werden
  kann und unter dem Argument question zu finden ist..
  */
  $("#question").text(questionlist[questionid].question)
  //die Zeit zu antworten ist nun wahr.
  questiontime = true;
  //ruft die Methode loadLives von unten auf
  loadLives();
})

//leben erstellen
function loadLives() {
  //die injection wird vorbereitet
  var injection = " ";
  //Für jedes Leben von oben wird das innere gemacht
  for (var i = 0; i < leben; i++) {
    //das hier wird gemacht
    //Bilder werden aus dem vorderen Ordner und dem darauffolgenden Ordner images gesucht.
    injection += '<img src="../images/love.png">';
  }
  //in das Element mit der ID lives wird dieser Text geladen, was dann die Bilder anzeigt
  document.getElementById("lives").innerHTML = injection;

}

//Dazu da um auf jedes Element des SVGs Klicken zu können
$(function() {
  $("#Ebene_1 > path, #Ebene_1 > rect").each(function() {
    $(this).click(function() {
      //überprüfen ob man überhaupt spielen darf zu diesem Zeitpunkt
      if (questiontime) {
        //wenn ja dann überprüfen ob der Klassenname des geklickten SVGs der ID der Frage entspricht und somit richtig wäre
        if ($(this).attr("class") == (questionlist[questionid].id)) {
          //Es ist das richtige
          //showAnswers Methode von Unten wird ausgeführt
          showanswers();
          //Man darf nicht mehr auf Elemente drücken.
          questiontime = false;
        } else {
          //Es ist das falsche
          //Ein Leben wird abgezogen
          leben--;
          //LoadLives Methode von oben wird ausgeführt
          loadLives();
          //Wenn keine Leben mehr da sind
          if (leben == 0) {
            //muss Du hast verlorenn dargestellt werden.
            document.getElementById("titel").innerHTML = "Du hast verloren";
          }
        }
      } else {
        //Wenn man nicht spielen darf wird dieser Alert ausgeführt, das feld , das oben erscheint.
        alert("Drücke erst weiter!");
      }
    })
  })
})
//show Answers Methdoe
function showanswers() {
  //den Link für den Mehr dazu Knopf ist zunächst leer.
  var whereTo = " ";
  //den Inhalt der questionid überprüfen
  switch (questionid) {
    //wenn der Inhalt 0 ist
    case 0:
    //muss der Link auf die BigTrail Seite verweisen
      whereTo = "../bigtrail/index.html";
      //questionid muss nicht weiter überprüft werden, da es gefudnen wurde und die Schlaufe wird abgebrochen
      break;
    case 1:
    //usw
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
 //einfügen in HTML wird vorbereitet, erstellt die beiden Knöpfe Weiter und Mehrdazu
  var htmlinjection = '<div class="box">';
  htmlinjection += '<';
  //Weiter Knopf Link bleibt leer, was eine Aktualisierung der Seite zur Folge hat und somit eine neue Frage erstellt.
  htmlinjection += 'a href = "" class="btn" style="margin-right:10px;">';
  htmlinjection += 'Weiter';
  htmlinjection += '</a>';
  htmlinjection += '<a href ="';
  //Der Link für Mehr dazu wird eingefügt
  htmlinjection += whereTo;
  htmlinjection += '" class="btn">';
  htmlinjection += 'Mehr dazu </a></div>';

  //Wenn die Antwort stimmt, wird hinunter gescrollt um die Antwort anzuzeigen
  document.getElementById("answer").scrollIntoView();
  //Die Antworten in HTML laden
  document.getElementById("titel").innerHTML = questionlist[questionid].title;
  document.getElementById("besch").innerHTML = questionlist[questionid].beschreibung;
  document.getElementById("answer").innerHTML = htmlinjection;
}
