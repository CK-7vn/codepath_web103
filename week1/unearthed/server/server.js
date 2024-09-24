const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
})

app.use('/public', express.static('../client/public'))
app.use('/scripts', express.static('./public/scripts'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server listening on port `${PORT}`')
});
