function paintMixer(color1 = 'unknown', color2 = 'unknown') {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * red and yellow should mix to return 'orange'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
  // PLACE YOUR CODE BELOW


  // add parameters to new array
  let colorsToMix = [color1, color2]

  // checks if the color red is included in colorsToMix array
  if (colorsToMix.includes("red")){
    // checks for the other color value in colorsToMix array
    if (colorsToMix.includes("blue")){
      return 'purple';
    }
    else if (colorsToMix.includes("green")){
      return 'brown';
    }
    else if (colorsToMix.includes("yellow")){
      return 'orange';
    }
    else if (colorsToMix[0] === colorsToMix[1]){
      return 'red';
    }
    // if other color is not recognized
    else {
      return 'unknown';
    }
  }
  // checks if the color blue is included in colorsToMix array
  else if (colorsToMix.includes("blue")){
    if (colorsToMix.includes("yellow")){
      return 'green';
    }
  }
  // if neither blue nor red is included in colorsToMix, a color is not recognized
  else {
    return 'unknown';
  }


  // PLACE YOUR CODE ABOVE
}

paintMixer('blue', 'red') === 'purple' && console.log('First mix worked')
paintMixer('red', 'green') === 'brown' && console.log('Second mix worked')
paintMixer('red', 'yellow') ==='orange' && console.log('Third mix worked')
paintMixer('green', 'red')=== 'brown' && console.log('Fourth mix worked')
paintMixer('blue', 'yellow') ==='green' && console.log('Fifth mix worked')
paintMixer('apple', 'frog') ==='unknown' && console.log('Apples and frogs don\'t mix, as expected')

/*
If everything works, you should see the following on the console
when run with "node 1_conditional_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Fifth mix worked
Apples and frogs don't mix, as expected
*/
