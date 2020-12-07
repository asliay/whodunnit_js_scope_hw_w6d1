// EPISODE 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// verdict: "The murderer is Professor Plum"
// the murderer variable in the if statement does not persist ouside of the if statement so the initial murderer = Professor Plum is still the same