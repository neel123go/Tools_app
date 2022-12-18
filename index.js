const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xoqmpur.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const database = client.db("insertDB").collection("haiku");


    } finally {
        //   await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Yah! Server is running');
})

app.listen(port, () => {
    console.log(`listening on port the ${port}`)
});