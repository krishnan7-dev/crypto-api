const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const getTokenRouter = require('./api/routes/getToken');
const secureRouter = require('./api/routes/secure');

// Configuring body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Handling valid endpoints
app.use('/api/getToken', getTokenRouter);
app.use('/api/secure', secureRouter);

// Handling errors
app.use((req, res, next) => {
    const error = new Error('Resource not found. Use a valid api endpoint.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

app.listen(port)