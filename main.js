const { MongoClient } = require ("mongodb")

const CONN_STR = 'mongodb+srv://sunshinemocha:DpqKByxiAWpYXvfD@cluster0.dl5kklx.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(CONN_STR)

// async function run() {
//     try {
//         const database = client.db("francesco");

//         const movies = database.collection('zaino');

//         const query = {colore: 'blu'};

//         const element = await zaini.findOne(query);

//         console.log(element);

//     } finally {

//         await client.close();
//     }

    const database = client.db("francesco");

    const zaino = database.collection('zaino');

    const query = {colore: 'blu'};

    zaino.findOne(query)
    .then(element => console.log(element))
    .catch(err => console.log(err))
    .finally(()=> client.close())
//}

//run().catch(err => console.log(err));