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
    const result = await db.query("SELECT * FROM posts")
    res.send(result.rows)
})

app.post("/import", (req, res) => {
    db.query("INSERT INTO posts(post_title, post_content) VALUES($1, $2)", [req.body.title, req.body.content])
    res.send("post added")
})

app.post("/login", async (req, res) => {
    try {
        const foundUser = await db.query("SELECT * FROM users WHERE email = $1", [req.body.email])
        if (foundUser) {
            if (foundUser.rows[0].password === req.body.password) {
                res.send(foundUser.rows[0])
            } else {
                res.send(false)
            }
        }
    } catch (error) {
        console.error(error)
        res.send("Could not find user with specified email, watch for typos or try registering!")
    }
})

app.post("/register", (req, res) => {
    db.query("INSERT INTO users(user_email, user_password) VALUES($1, $2)", [req.body.email, req.body.password])
    res.send("user registered")
})

app.listen(port, () => {
    console.log("listening to port 8080")
})
