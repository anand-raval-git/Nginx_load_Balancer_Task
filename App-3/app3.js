const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color:green; color:white; text-align:center;">
            <h1>APP 3</h1>
        </body>
    `)
})

app.listen(3003, () => {
    console.log('App3 running on port 3003')
})