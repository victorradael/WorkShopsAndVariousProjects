const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            img TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            url TEXT

        );
    
    `)
   

    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], (err)=> {
    //     if (err) return console.log(err)

    //     console.log("DELETADO")
    // })

})

module.exports = db;