function isAnagram(str1, str2) {
  // Remove any non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();
  console.log(cleanStr1,cleanStr2);
  
  // Check if the two strings have the same length
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  
  // Sort the characters in the two strings and compare them
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');
  console.log(sortedStr1,sortedStr2);
  return sortedStr1 === sortedStr2;
}
console.log(isAnagram("Mary", "Army")); // Output: true
