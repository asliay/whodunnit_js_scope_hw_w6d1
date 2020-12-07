// EPISODE 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// verdict:  murderer still Professor Plum, but the code will throw an error and won't get to the end
// const variables can't be reassigned, so murderer = 'Mrs Peacock' wouldn't work and would cause an error