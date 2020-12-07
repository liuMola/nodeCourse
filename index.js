const express = require('express');
const app = express();

//register route on app object
app.get('/', (req, res)=> {
    res.send({hi: 'there'});
    console.log(req)
})

app.listen(5000);