const express = require('express');
const router = express.Router();

const { generateKeyPair, generateKeyPairSync } = require('crypto')
const jwt = require('jsonwebtoken');

// Payload can be any object
// Should return JWT using RS256 algorithm

router.post('/', (req, res, next) => {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    })
    const accessToken = jwt.sign({data: 'foo'},  privateKey, { algorithm: 'RS256' });
    res.status(200).json({
        accessToken: accessToken,
        publicKey: publicKey
    })
});

module.exports = router