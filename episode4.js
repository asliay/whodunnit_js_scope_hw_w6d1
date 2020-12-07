// EPISODE 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects); 
// suspects = "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard." 
// Because this variable is defined using the declareAllSuspects function which has a local suspectThree variable (Colonel Mustard) which can replace the global suspectThree variable in this specific instance.
console.log(`Suspect three is ${suspectThree}.`);
// "Suspect three is Mrs Peacock"
// But in this case, the console.log will only have access to the global variable suspectThree = Mrs Peacock and so that is what it uses.