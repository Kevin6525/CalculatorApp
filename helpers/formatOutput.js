function formatOutput(num, maxLength) {
    const numString = String(num.toExponential(4))
    const limitedNumString = numString.length <= maxLength ? numString : numString.slice(0, maxLength);
    return limitedNumString;
}
module.exports = formatOutput;