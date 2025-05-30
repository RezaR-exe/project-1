import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";
// import jwt from "jsonwebtoken";


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

app.post("/register", async (req, res) => {
    try {
        const users = await db.query("SELECT * FROM users")
        for (let i=0;i<users.rows.length;i++) {
            if (req.body.email === users.rows[i].email) {
                return res.status(400).json({ error: "Email already registered!" })
            } else {
                try {
                    db.query("INSERT INTO users(email, first_name, last_name, nickname, birth_date, password) VALUES($1, $2, $3, $4, $5, $6)", [req.body.email, req.body.first_name, req.body.last_name, req.body.nickname, req.body.birth_date, req.body.password])
                    res.send("user registered")
                    break;
                } catch(error) {
                    console.error("db error, try again later")
                    break;
                }
            }
        }
    } catch (error) {
        console.error(error)
    }
})


app.post("/edit-user", async (req, res) => {
    const updateData = await db.query("UPDATE users SET first_name=$1, last_name=$2, nickname=$3, location=$4, bio=$5, birth_date=$6 WHERE email=$7", [req.body.first_name, req.body.last_name, req.body.nickname, req.body.bio, req.body.birth_date, req.body.email])
    return res.status(200).json({error: "User data edited."})
})


app.listen(port, () => {
    console.log("listening to port 8080")
})
