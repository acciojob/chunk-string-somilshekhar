function stringChop(str, size) {
  // If the input string is null or empty, return an empty array
  if (str === null || str === "") return [];

  let result = [];

  // Loop through the string and chop it into chunks of the given size
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
