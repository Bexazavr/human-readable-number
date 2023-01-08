module.exports = function toReadable (number) {
  const getWordFromNaturalNum = (digit) => {
    switch (digit) {
      case 0: return 'zero';
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
    }
  }
  
  const toWord = (num) => {
    let string = num.toString()
    if (num < 20) {
      switch (num) {
        case 0: return getWordFromNaturalNum(num);
        case 1: return getWordFromNaturalNum(num);
        case 2: return getWordFromNaturalNum(num);
        case 3: return getWordFromNaturalNum(num);
        case 4: return getWordFromNaturalNum(num);
        case 5: return getWordFromNaturalNum(num);
        case 6: return getWordFromNaturalNum(num);
        case 7: return getWordFromNaturalNum(num);
        case 8: return getWordFromNaturalNum(num);
        case 9: return getWordFromNaturalNum(num);
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
      }
    }
    if (num >= 20 && Number(string[1]) !== 0) {
      
      switch (Number(string[0])) {
        case 2: return `twenty ${getWordFromNaturalNum(Number(string[1]))}`
        case 3: return `thirty ${getWordFromNaturalNum(Number(string[1]))}`
        case 4: return `forty ${getWordFromNaturalNum(Number(string[1]))}`
        case 5: return `fifty ${getWordFromNaturalNum(Number(string[1]))}`
        case 6: return `sixty ${getWordFromNaturalNum(Number(string[1]))}`
        case 7: return `seventy ${getWordFromNaturalNum(Number(string[1]))}`
        case 8: return `eighty ${getWordFromNaturalNum(Number(string[1]))}`
        case 9: return `ninety ${getWordFromNaturalNum(Number(string[1]))}`
      }
    }
    if (num >= 20 && Number(string[1]) === 0) {
      switch (Number(string[0])) {
        case 2: return `twenty`
        case 3: return `thirty`
        case 4: return `forty`
        case 5: return `fifty`
        case 6: return `sixty`
        case 7: return `seventy`
        case 8: return `eighty`
        case 9: return `ninety`
      }
    }
  }

  const str = number.toString();
  

  if (str.length === 3 && Number(str[1]+str[2])) {
    return `${toWord(Number(str[0]))} hundred ${toWord(Number(str[1]+str[2]))}`
  }
  if (str.length === 3 && !Number(str[1]+str[2])) {
    return `${toWord(Number(str[0]))} hundred`
  }
  if (str.length === 2) {
    return `${toWord(Number(str[0]+str[1]))}`;
  }
  else {return `${toWord(number)}`}

}