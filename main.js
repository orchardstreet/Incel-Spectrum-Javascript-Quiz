var questions = [
"Are you extremely shy?",
"Has someone tried to pair you up more than once or twice?",
"What is your annual income in US dollars?, (numbers, no commas)",
"How many hours a day did you browse 4chan in your youth? (numbers, no commas)",
"Do you consider yourself a 'nazi' or a 'libertarian'?",
"Do you live in a liberal coastal area?",
"Do you have 0 tolerance for political opinions other than your own<br> or refuse to be in a poly relationship or date LGBTQ people?",
"Do you collect welfare?",
"Are you muscular or have good economic prospects?",
"Have you had sex in the last 6 months?"
];
var answers = [];
var count = 0;

function sanitize(input) {
if (input == "") {
    document.getElementById('error').innerHTML = "empty field";
    return false;
}
else if(input.length > 20) {
    document.getElementById('error').innerHTML = "input too long, input less than 21 characters please";
    return false;
}
else if(input.match(/^[0-9]{1,20}$/)){
    return true;
}
else{
    document.getElementById('error').innerHTML = "only numbers please";
    return false;
}
}

function getInput(typee) {
var istypee = "";
if (typee == "binarytrue" || typee == "binaryfalse") {
istypee = "binarychoice";
}
if (count < 10 && (((typee == "text" && count == 3) || (typee == "text" && count == 2)) || ((istypee == "binarychoice" && count != 2) && (istypee == "binarychoice" && count != 3)))) {
    document.getElementById('error').innerHTML = "";
  if (typee == "text") {
    var userInput = document.getElementById('answer').value;
    if (!sanitize(userInput)) {
        return;
    }
    document.getElementById('answer').value = "";
    answers.push(userInput);
  } else if (istypee == "binarychoice") {
       if (typee == "binarytrue") {
       answers.push("true");
       } else if (typee == "binaryfalse") {
       answers.push("false");
       }
  }
    count = count + 1;

    if (count < 10) {
        if (count == 2 || count == 3) {
        document.getElementById("truefalse").style.display= "none";
        document.getElementById("texttrue").style.display= "inline-block";
        } else {
        document.getElementById("truefalse").style.display= "inline-block";
        document.getElementById("texttrue").style.display= "none";
        }
    document.getElementById('question').innerHTML = questions[count];
    }
} 
if (count == 10) {

        document.getElementById("truefalse").style.display= "none";
        document.getElementById("texttrue").style.display= "none";
var shyness = answers[0];
var luck = answers[1];
var income = answers[2];
var fourchanstatus = answers[3];
var altright = answers[4];
var liberallocation = answers[5];
var zerotolerance = answers[6];
var welfare = answers[7];
var hope = answers[8];
var havesex = answers[9];
var answer=""
if ((((income < 50000 && welfare == "false") || (altright == "true" && liberallocation == "true" && zerotolerance == "true") || (shyness == "true" && luck == "false")) || fourchanstatus > 9000) && havesex == "true") {
  document.getElementById('question').innerHTML =  "You got <a href='https://incelwiki.com/w/Nearcel'>nearcel</a>!";
        document.getElementById("nearcelpic").style.display= "inline-block";
  document.getElementById('error').innerHTML =  "A nearcel stands for, 'nearly celibate'.  A nearcel is someone who is not an incel, and has sex, but falls into periods of celibacy from time to time.  They often use money to compensate for a lack of sexual attractiveness.  Nearcels also might be otherwise normal but something else in their life is preventing them from being very successful, such as drug addiction or failing to graduate college.  Arguably, most men are nearcels in the USA.";


}
else if ((((income < 50000 && welfare == "false") || (altright == "true" && liberallocation == "true" && zerotolerance == "true") || (shyness == "true" && luck == "false")) || fourchanstatus > 9000) && havesex == "false") {
  document.getElementById('question').innerHTML =  "You got <a href='https://incelwiki.com/w/Truecel'>truecel</a>!";
        document.getElementById("truecelpic").style.display= "inline-block";
 document.getElementById('error').innerHTML =  "A truecel stands for, 'truly celibate'. A truecel is someone who virtually never has sex.  Some combination of very poor looks, extreme poverty, or very low status prevents him from having any success with women.  The average truecel is so oxytocin-starved, even a brief touching of fingers whilst exchanging cash with a female store clerk who looks like Whoopi Goldberg or Rosie O'Donnell can send truecels over the moon in a frenzy of euphoria.";

}
else if  ((((income < 50000 && welfare == "false") || (altright == "true" && liberallocation == "true" && zerotolerance == "true") || (shyness == "true" && luck == "false")) || fourchanstatus > 9000) && hope == "true") {
  document.getElementById('question').innerHTML =  "You got <a href='https://incelwiki.com/w/Low-tier_normie'>high functioning incel</a>!";
        document.getElementById("hicelpic").style.display= "inline-block";
document.getElementById('error').innerHTML =  "A high-functioning incel, or 'hicel', is someone who is very close to having a normal and regular sexual relationship.  He doesn't have sex, but may very soon.  He doesn't have any severe mental disorders and generally has his life in order.  The reason for his inceldom may have just been situational, or bad luck.";

}
else {
   document.getElementById('question').innerHTML = "You got: <a href='https://incelwiki.com/w/Noncel'>noncel</a>!";
        document.getElementById("noncelpic").style.display= "inline-block";
document.getElementById('error').innerHTML =  "A noncel, is short for, 'pretty much always non-celibate'.  You not only have sex, but you've pretty much never had long spells of celibacy.  At least not as long as your typical incel.  The noncel is a fairly normal person and unlike the nearcel, isn't in much danger of falling into celibacy anytime soon";

        }

}
}  

function truefunc() {
getInput("binarytrue");
}

function falsefunc() {
getInput("binaryfalse");
}

function textfunc() {
getInput("text");
}

var answerButton = document.getElementById('answerbutton');
var trueButton = document.getElementById('truebutton');
var falseButton = document.getElementById('falsebutton');

answerButton.addEventListener('click', textfunc, false);
trueButton.addEventListener('click', truefunc, false);
falseButton.addEventListener('click', falsefunc, false);
