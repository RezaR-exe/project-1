import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";


const app = express()
app.use(cors())
const port = 8080
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "social",
  password: "Echelon800",
  port: 5432,
});

db.connect();

app.get("/export", async (req, res) => {
    try{
        const result = await db.query("SELECT * FROM posts")
        res.send(result.rows)
    } catch(error) {
        return res.status(400).json({error: "could not retrieve posts from database, server might be down, try again later"})
    }
})

app.post("/import", (req, res) => {
    try {
        db.query("INSERT INTO posts(post_title, post_content, postedBy) VALUES($1, $2, $3)", [req.body.title, req.body.content, req.body.postedBy]);
        return res.status(200).json({info: "post added"});
    } catch(error) {
        return res.status(400).json({error: "post not added, check boxes or try again later"});
    }
})

app.post("/login", async (req, res) => {
    try {
        const foundUser = await db.query("SELECT * FROM users WHERE email = $1", [req.body.email]);
        if (foundUser) {
            if (foundUser.rows[0].password === req.body.password) {
                res.send(foundUser.rows[0])
            } else {
                return res.status(400).json({error: "Incorrect email or password!"});
            }
        }
    } catch (error) {
        console.error(error)
        return res.status(400).json({error: "Could not find user with specified email, watch for typos or try registering!"});
    }
})

app.post("/register", async (req, res) => {
    try {
        const users = await db.query("SELECT * FROM users")
        for (let i=0;i<users.rows.length;i++) {
            if (req.body.email === users.rows[i].email) {
                return res.status(400).json({ error: "Email already registered!" });
            } else {
                try {
                    db.query("INSERT INTO users(email, first_name, last_name, nickname, birth_date, password) VALUES($1, $2, $3, $4, $5, $6)", [req.body.email, req.body.first_name, req.body.last_name, req.body.nickname, req.body.birth_date, req.body.password]);
                    return res.status(200).json({info: "user registered"});
                } catch(error) {
                    console.error(error)
                    return res.status(400).json({error: "db error, try again later!"});
                }
            }
        }
    } catch (error) {
        return res.status(400).json({error: "Could not establish connection with the database, try again later!"});
    }
})


app.post("/edit-user", async (req, res) => {
    try {
        const splitList = [];
        for (let objItem in req.body) {
            if (req.body[objItem] != "") {
                splitList.push(objItem)
            } 
        }
        splitList.pop();
        const constructedString = splitList.map((item, index) => `${item}=$${index+1}`).join(", ")
        await db.query(`UPDATE users SET ${constructedString} WHERE email=$${splitList.length+1}`, [...splitList.map((item) => req.body[item]), req.body.email]);
        return res.status(200).json({info: "User data edited."});
    } catch (error) {
        console.error(error)
        return res.status(400).json({error: "db error, try again later!"});
    }

})


app.listen(port, () => {
    console.log("listening to port 8080");
})
