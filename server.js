const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Calculator</h1>');
})



app.listen(port, function(){
    console.log('Server has started on port 3000')
})