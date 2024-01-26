const express = require('express');
const router = express.Router();
const Decimal = require('decimal.js');
const formatOutput = require('../helpers/formatOutput');

router.get('/add', (req, res) => {
    const numbers = req.query.numbers.split(",");
    if (!numbers || !Array.isArray(numbers)) {
        res.status(400).json({ error: "Invalid input or missing numbers parameter!" });
    }
    // Convert our nums string array to floats array
    const decimalNums = numbers.map(num => new Decimal(num));

    if (decimalNums.some(num => num.isNaN())) {
        res.status(400).json({ error: "Invalid numbers in parameter!" });
    }
    // Sum our values and format our output
    const sum = decimalNums.reduce((sum, num) => sum.plus(num), new Decimal(0));

    const formattedSum = formatOutput(sum, 10);
    res.json({formattedSum: formattedSum, value: sum})
})

module.exports = router;