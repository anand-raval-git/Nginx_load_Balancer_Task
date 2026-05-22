const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color:blue; color:white; text-align:center;">
            <h1>APP 2</h1>
        </body>
    `)
})

app.listen(3001, () => {
    console.log('App2 running on port 3001')
})