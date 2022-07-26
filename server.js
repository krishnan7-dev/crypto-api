const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const getTokenRouter = require('./api/routes/getToken');

app.use('/api/getToken', getTokenRouter);

app.listen(port, () => {
    console.log(`Server listening at port ${ port }`)
})