// add solution here


function theBeatlesPlay(musicians, instruments){
  var musiciansArray = [];
  for(let i = 0; i < musicians.length; i++){
    musiciansArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansArray;
  
}

theBeatlesPlay();