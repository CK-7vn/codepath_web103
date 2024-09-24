const express = require('express');

const app = express();

app.get("/", function(req, res) {
    res.send("Hello world");
})

app.get('/products', function (req, res) {
    res.send("Here are the products in this site")
})

app.get('/products/:product_id', function (req, res) {
    res.send(`product id: ${req.params.product_id}`);
})

app.get('*', function(req, res) {
    res.status(404).send("Error 404 not found");
})
app.listen(3000, function() {
    console.log("Server started on port 3000")
})
