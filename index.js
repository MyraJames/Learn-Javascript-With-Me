// build out a function that will go through and capitalize every word 

const toCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  };
  
  const shortStr = "Hi there";
  toCapital(shortStr);
  
  const longStr = "the quick brown fox jumped over the lazy dog";
  toCapital(longStr); 

  // The map() method creates a new array with the results of calling a function for every array element.
  // The map() method calls the provided function once for each element in an array, in order.

// The split() method is used to split a string into an array of substrings, and returns the new array.
// Tip: If an empty string ("") is used as the separator, the string is split between each character.

// The toUpperCase() method converts a string to uppercase letters.

// The slice() method extracts parts of a string and returns the extracted parts in a new string.
// Use the start and end parameters to specify the part of the string you want to extract.
// The first character has the position 0, the second has position 1, and so on.
// The slice() method returns the selected elements in an array, as a new array object.

// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, 
// the given end argument.

// The join() method returns the array as a string.
// The elements will be separated by a specified separator. The default separator is comma (,).