const express = require('express');
const router = express.Router();
const Decimal = require('decimal.js');
const formatOutput = require('../helpers/formatOutput');

router.get('/add', (req, res) => {
    const currentNumber = req.query.currentNumber;
    const nextNumber = req.query.nextNumber;

    const currentNumberFloat = parseFloat(currentNumber);
    const nextNumberFloat = parseFloat(nextNumber);

    if(isNaN(currentNumber) || isNaN(nextNumber)) {
        return res.status(400).json({ error: 'Invalid input or missing numbers' });
    }
    const sum = new Decimal(currentNumberFloat).plus(nextNumberFloat);

    const formattedSum = formatOutput(sum, 10);
    
    res.json({result: formattedSum})
})

module.exports = router;