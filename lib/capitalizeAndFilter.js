const capitalizeAndFilter = (arrayOfStrings) => {
  const omitFWords = arrayOfStrings.filter(string => (string.charAt(0) !== 'f'));
  console.log(omitFWords);  


  const capitalizeLetter = omitFWords.map(string => string.charAt(0).toUpperCase() + string.slice(1));
  console.log(capitalizeLetter);

  return capitalizeLetter;
};

module.exports = { capitalizeAndFilter };