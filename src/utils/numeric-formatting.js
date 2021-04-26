
export const parseAbbreviatedNumber = (number) => {
  // strongly parameterize this; only match numbers with any number of digits
  // and up to 1 decimal place. pick out some named groups so that we can
  // parse them separately in order to multiply the required numeric portion
  // optionally by a suffix factor if no suffix match is found
  const match = number.match(/^(?<numeric>\d*\.{0,1}\d+)(?<suffix>[KkMmBb])?$/);
  if (!match) return null;

  const { numeric, suffix } = match.groups;

  switch (suffix) {
    case 'k':
    case 'K':
      return Number(numeric) * 1000;
    case 'm':
    case 'M':
      return Number(numeric) * 1000000;
    case 'b':
    case 'B':
      return Number(numeric) * 1000000000;
    default:
      return Number(numeric);
  }
};

export const commaFormatNumber = (number) => {
  // this is a handy way to do this; doesn't necessarily return comma-separated
  // numbers according to local language, but if the point of this is to be
  // human readable it seems reasonable to use it
  return Intl.NumberFormat().format(number);
};
