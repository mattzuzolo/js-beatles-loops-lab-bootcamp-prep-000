function theBeatlesPlay (arrayMusicians, arrayInstruments) {

  var myArray = [];
  
  for (let i = 0; i < arrayMusicians.length; i++) {
      myArray[i] = (`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
      console.log((`${arrayMusicians[i]} plays ${arrayInstruments[i]}`))
  }
  
  return myArray;  
}

function johnLennonFacts (arrayFacts) {
  
  var n = 0;
  
  while (n < arrayFacts.length) {
    
    arrayFacts[n] += "!!!"
    n++;
  }
  
  return arrayFacts;
}

function iLoveTheBeatles (num) {
  
  var newArray[];
  
  do
}