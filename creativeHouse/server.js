const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

nunjucks.configure("views", {
    express: server,
    noCache: true

})

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programaca",
        category:"Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nesciunt numquam! Quod minimalibero vitae excepturi, totam impedit doloribus doloremque animi fuga tenetur molestiae? Quaedolorum natus laudantium nemo laborum?",
        url: "http://google.com"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programaca",
        category:"Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nesciunt numquam! Quod minimalibero vitae excepturi, totam impedit doloribus doloremque animi fuga tenetur molestiae? Quaedolorum natus laudantium nemo laborum?",
        url: "http://google.com"
    }, 
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programaca",
        category:"Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nesciunt numquam! Quod minimalibero vitae excepturi, totam impedit doloribus doloremque animi fuga tenetur molestiae? Quaedolorum natus laudantium nemo laborum?",
        url: "http://google.com"
    }, 
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programaca",
        category:"Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nesciunt numquam! Quod minimalibero vitae excepturi, totam impedit doloribus doloremque animi fuga tenetur molestiae? Quaedolorum natus laudantium nemo laborum?",
        url: "http://google.com"
    },                                                  
]

server.use(express.static('backup'))

server.get('/', (req, res) => {
    let lastIdeas = []

    let reversedIdeas = [...ideas].reverse()

    for(idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    } 


    return res.render('index.html', {ideas: lastIdeas})
})

server.get('/ideias', (req, res) => {
    let reversedIdeas = [...ideas].reverse()

    return res.render('ideias.html', {ideas: reversedIdeas})
})


server.listen(3000)