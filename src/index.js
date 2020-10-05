module.exports = function toReadable (number) {
  const readableNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const readableTenths = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';

  if (number < 20) {
    return readableNums[number];
  }

  let digit = number % 10;
  number = (number - digit) / 10;

  if (number < 2) {
    return readableNums[number];
  } else if (number < 10) {
    return digit === 0 ? readableTenths[number] : `${readableTenths[number]} ${readableNums[digit]}`;
  }

  let tenths = number % 10;
  number = (number - tenths) / 10;

  if (tenths === 0 && digit === 0) {
    return `${readableNums[number]} ${hundred}`;
  } else if (tenths === 0) {
    return `${readableNums[number]} ${hundred} ${readableNums[digit]}`;
  } else if (tenths < 2) {
    return `${readableNums[number]} ${hundred} ${readableNums[tenths * 10 + digit]}`;
  } else if (digit === 0) {
    return `${readableNums[number]} ${hundred} ${readableTenths[tenths]}`;
  }

  return `${readableNums[number]} ${hundred} ${readableTenths[tenths]} ${readableNums[digit]}`;
}