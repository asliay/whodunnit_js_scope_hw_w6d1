// EPISODE 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard'; 
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room'); 
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// verdict: "The weapon is Candle Stick"
// Step 1: changeScenario function changes room to dining room
// Step 2: plotTwist function is called, passing in Dining Room. Dining Room === Dining Room, so murderer is changed to Colonel Mustard.
// Step 3: unexpectedOutcome function is called, passing in Colonel Mustard. This matches current murderer, so weapon is changed to Candle Stick.