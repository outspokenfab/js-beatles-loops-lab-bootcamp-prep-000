// add solution here


function theBeatlesPlay(musicians, instruments){
  var musiciansArray = [];
  for(let i = 0; i < musicians.length; i++){
    musiciansArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansArray;
  
}
function johnLennonFacts (factsArray){
  let i = 0;
  var excitedFacts = [];
  
  while (i < factsArray.length){
    excitedFacts.push(factsArry[i] + "!!!");
    i++;
  }
  return  excitedFacts;
}

johnLennonFacts([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]);