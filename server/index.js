const express = require('express');
const cors = require('cors');
const app = express();

// TODO: Configure cors appropriately
app.use(cors());

// TODO: Move to config?
const port = 4000;

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.post('/test', (req, res) => {
    console.log(req);
    const response = {
        'hello': 'world'
    };
    res.send(response);
})

const server = app.listen(port, () => {
    const host = server.address().address;
    console.log(`Server launched on port ${port}`);
})