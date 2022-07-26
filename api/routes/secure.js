const express = require('express');
const router = express.Router();

// JWT is sent via headers
// If token is valid, send secure data back
// Else send unauthorised error

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Requested secure"
    })
});

module.exports = router;