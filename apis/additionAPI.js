const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    const currentNumber = req.query.currentNumber;
    const nextNumber = req.query.nextNumber;

    if(!currentNumber || !nextNumber) {
        return res.status(400).json({ error: 'Invalid input or missing numbers' });
    }
    const sum = parseInt(currentNumber) + parseInt(nextNumber);
    res.json({result: sum})
})

module.exports = router;