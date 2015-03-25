// Connor Ring Ch. 9 Problem
// March 20th, 2015

// Fill in the regular expressions

verify(/car/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pop/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/fer/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/./,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/no/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/e/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
