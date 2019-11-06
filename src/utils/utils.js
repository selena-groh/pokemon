export const formatName = str => {
  var splitStr = str.toLowerCase().split("-");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
};

export const formatPokemonName = str => {
  var splitStr = formatName(str).split(" ");

  if (splitStr.length === 1) {
    return splitStr[0];
  }

  return `${splitStr[0]} (${splitStr.slice(1).join(" ")})`;
};

export const formatGenerationName = str => {
  var splitStr = formatName(str).split(" ");
  splitStr[1] = splitStr[1].toUpperCase();

  return splitStr.join(" ");
};
