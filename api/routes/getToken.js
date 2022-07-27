require('dotenv').config()
const { request } = require('express');
const express = require('express');
const router = express.Router();

const fs = require('fs');

const jwt = require('jsonwebtoken');

router.post('/', (req, res, next) => {
    const privateKey = fs.readFileSync(process.env.PRIVATE_KEY_PATH, 'utf-8');
    const accessToken = jwt.sign({data: req.body.username},  privateKey, { algorithm: 'RS256' });
    res.status(200).json({
        accessToken: accessToken,
    })
});

module.exports = router