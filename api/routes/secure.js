const express = require('express');
const router = express.Router();

const fs = require('fs');

const jwt = require('jsonwebtoken');

// JWT is sent via headers
// If token is valid, send secure data back
// Else send unauthorised error

router.get('/', (req, res, next) => {
    const publicKey = fs.readFileSync(process.env.PUBLIC_KEY_PATH);
    jwt.verify(req.headers.accesstoken, publicKey, (error, decoded) => {
        if (decoded) {
            res.status(200).json({
                message: "You are authorised"
            })
        }

        if (error) {
            res.status(401).json({
                message: "You are not authorised"
            })
        }
    })
});

module.exports = router;