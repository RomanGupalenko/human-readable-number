module.exports = function toReadable (number) {
    if (number === 0) return "zero";
    let result = "";
    let stringNumbers_1_9 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let stringNumbers_10_19 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let stringNumbers_20_90 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let numberToString = String(number);
    if (numberToString.length === 3 &&
        number % 100 === 0)
    {
        result += stringNumbers_1_9[parseInt(numberToString[0]) - 1] + " hundred";
        return result;
    }
    else if (numberToString.length === 3 &&
             number % 100 !== 0)
    {
        result += stringNumbers_1_9[parseInt(numberToString[0]) - 1] + " hundred ";
        numberToString = numberToString.slice(1,);
    }
    if (numberToString.length === 2    && 
        numberToString[0] !== "0"      && 
        parseInt(numberToString) >= 10 && 
        parseInt(numberToString) <= 19)
    {
        result += stringNumbers_10_19[parseInt(numberToString[1])];
        return result;
    }
    else if (numberToString.length === 2      && 
             numberToString[0] !== "0"        && 
             parseInt(numberToString) % 10 === 0)
    {
        result += stringNumbers_20_90[parseInt(numberToString[0]) - 2];
        return result;
    }
    else if (numberToString.length === 2      && 
             numberToString[0] !== "0"        && 
             parseInt(numberToString) % 10 !== 0)
    {
        result += stringNumbers_20_90[parseInt(numberToString[0]) - 2] + " ";
        numberToString = numberToString.slice(1,);
    }
    else if (numberToString.length === 2 && 
             numberToString[0] === "0")
    {
    		numberToString = numberToString.slice(1,);
    }
    if (numberToString.length === 1)
    {
        result += stringNumbers_1_9[parseInt(numberToString) - 1];
    }
    return result;
}
