function formatOutput(num, maxLength) {
    const numString = String(num)
    const limitedNumString = numString.length <= maxLength ? numString : numString.slice(0, maxLength);
    return limitedNumString;
}
module.exports = formatOutput;