// EPISODE 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
//  First Verdict: Mrs Peacock
// within the scope of the declareMurderer function, the murderer variable is Mrs Peacock and so when calling the function, Mrs Peacock is the murderer

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// Second Verdict: Professor Plum
// Outside of the declareMurderer function, murderer has been declared as Professor Plum and so without calling the function and using the local variable, murderer = Professor Plum
