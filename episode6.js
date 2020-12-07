// EPISODE 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// verdict: "The murderer is Mrs White"
// the murderer variable is type let and so can be changed. the changeMurderer function first changes it to Mr Green and then Mrs White, before declareMurderer is called.