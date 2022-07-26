const express = require('express');
const router = express.Router();

// getToken should be handling POST request.
// Payload can be any object
// Should return JWT using RS256 algorithm

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Requested Get Token"
    })
});

module.exports = router