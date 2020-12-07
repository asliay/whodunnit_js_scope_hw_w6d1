// EPISODE 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// verdict: "The murderer is Mr Green"
// murderer = Professor Plum is type let and changeable
// when let murderer = Colonel Mustard is declared in the plotTwist function within the changeMurderer function, it (and its change to Miss Scarlet) does not persist beyond the scope of the plotTwist function, and so the changeMurderer function redefines murderer as Mr Green and then nothing else successfully changes