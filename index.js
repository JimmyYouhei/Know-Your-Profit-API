const express = require('express');

const app = express();

const port = 3000;

app.get("/" , (require , response) => {
    response.send("ok")
})

app.listen(port , () => {
    console.log(`it is running on port ${port}`);
})