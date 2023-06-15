const express = require('express')
const app = express()
const port = 5002

const {usersRouter} = require("./routers")
app.use('/user', usersRouter)

app.use((req, res) => {
    res.send('<h1>Welcome to the API</h1>');
});

app.get('/', (req,res) => {
    console.log("hello from api")
    res.send("hello from api")
});

app.listen(port, () => {
    console.log(`The API is running on port ${port}!`);
});
