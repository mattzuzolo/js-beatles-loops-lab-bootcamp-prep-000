function theBeatlesPlay (arrayMusicians, arrayInstruments) {

  var myArray = [];
  
  for (let i = 0; i < arrayMusicians.length; i++) {
      myArray[i] = (`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
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
  
  console.log("function executed ")
  
  var differentArray = [];
  
    do { 
      
        console.log("Do loop executed")
  
    differentArray[num] = "I love the Beatles!"
    num++;
      
    } while (num < 15);
    
      console.log("Do loop terminated")
  
  return differentArray;
}

  console.log("I love the beatles function termianted")