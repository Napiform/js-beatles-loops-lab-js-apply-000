// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
  let theBand = [];
  for (i = 0; i < musicians.length; i++) {
    theBand.push(`${musicians[i]} plays ${instruments[i]}.`)
  }
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
}

function iLoveTheBeatles(number) {
  var youreForcingMeToDoThis = [];
  do {
    youreForcingMeToDoThis.push("I love the Beatles!");
  } while (number < 15);
  return youreForcingMeToDoThis;
}