const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color:red; color:white; text-align:center;">
            <h1>APP 1</h1>
        </body>
    `)
})

app.listen(3000, () => {
    console.log('App1 running on port 3000')
})
