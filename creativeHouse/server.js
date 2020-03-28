const express = require('express')
const nunjucks = require('nunjucks')
const db = require("./db")

const server = express()

nunjucks.configure("views", {
    express: server,
    noCache: true

})

server.use(express.static('backup'))
server.use(express.urlencoded({ extended: true }))

server.get('/', async (req, res) => {
    let lastIdeas = []
    await db.all(`SELECT * FROM ideas`, (err, result) => {
        if (err) if (err) return console.log(err)

         let reversedIdeas =  [...result].reverse()

        for (idea of reversedIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
                console.log(lastIdeas.length)
            }
        }
    })





    return res.render('index.html', { ideas: lastIdeas })
})
server.post('/', (req, res) => {
    const { image_url, title, category, description, link } = req.body

    const query = `
        INSERT INTO ideas(
            img,
            title,
            category,
            description,
             url
        ) VALUES(?,?,?,?,?);`

    const values = [
        image_url,
        title,
        category,
        description,
        link
    ]

    db.get(query, values, (err) => {
        if (err) return console.log(err)

    })
    return res.redirect('/ideias')
})

server.get('/ideias', (req, res) => {
    db.all(`SELECT * FROM ideas`, (err, result) => {
        if (err) if (err) return console.log(err)

        let reversedIdeas = [...result].reverse()

        return res.render('ideias.html', { ideas: reversedIdeas })
    })
    
})



server.listen(3000)