const { MongoClient } = require ("mongodb")

const CONN_STR = 'mongodb+srv://primalmontage:3PGF44ZM3N@cluster0.7qxlejr.mongodb.net/admin?retryWrites=true&replicaSet=atlas-tcnltt-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1'

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

    const movies = database.collection('zaino');

    const query = {colore: 'blu'};

    zaini.findOne(query)
    .then(element => console.log(element))
    .catch(err => console.log(err))
    .finally(()=> client.close())
//}

//run().catch(err => console.log(err));