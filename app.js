import express from "express";
import cors from "cors";
import pg from "pg";
import 'dotenv/config';
const connectionString = process.env.DATABASE_URL;
const { Pool } = pg
const pool = new Pool({
    connectionString,
});
const app = express();

const expressPort = 8000;

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

//Connections to Database
app.get('/trivia', (req, res) => {
    pool.query('SELECT * FROM gamescores')
    .then((result) => {
        console.log(result.rows)
        res.status(201).send(result.rows)
    })
    .catch((error) => {
        console.error(error)
        res.status(404).send("Sorry! Nothing Found")
    })
});

app.post('/trivia', async (req, res) => {
    try {
      const { name, gamescore, incorrectscore } = req.body;
      console.log('Received data:', name, gamescore, incorrectscore);
      await pool.query('INSERT INTO gamescores (gameid, username, score, incorrect_answers) VALUES (default, $1, $2, $3)', [name, gamescore, incorrectscore]);
      res.status(201).send('gamescores table updated');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});

app.listen(expressPort, () => {
    console.log("App listening on port 8000")
});