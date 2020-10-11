const express = require('express');

require('./database');

const app = express();

app.use(require('./router/index.router'));

app.listen(3000, () => {
    console.log(`Listen port 3000`);
});
