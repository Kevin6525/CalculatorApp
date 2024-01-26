function formatOutput(num, maxLength) {
    const scientificNum = num >= 1e10 || num <= 1e-6 ? num.toExponential(4) : num
    const numString = String(scientificNum)
    const limitedNumString = numString.length <= maxLength ? numString : numString.slice(0, maxLength);
    return limitedNumString;
}
module.exports = formatOutput;