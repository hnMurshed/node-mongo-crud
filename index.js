const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const Objectid = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

/* 
MongoDB user info
username: murshedul
password: 1CsRBjQKmsrzX0yj
*/

// use middleware
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://murshedul:1CsRBjQKmsrzX0yj@cluster0.dwvav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    
    try {
        await client.connect();

        const userCollection = client.db('Express').collection('User');

        // get multiple documents
        app.get('/users', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);

            const result = await cursor.toArray();

            res.send(result);
        })

        // post a document
        app.post('/user', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
        })

        // delete a document
        app.delete('/user/:userId', async (req, res) => {
            const id = req.params.userId;
            const query = {_id: Objectid(id)}

            const result = await userCollection.deleteOne(query)

            if (result.deletedCount === 1) {
                console.log('document deleted successfully')
            }
            else {
                console.log("Document didn't match with the query to delete")
            }

            res.send(result);
        })

        // get a document
        app.get('/user/:userId', async (req, res) => {
            const id = req.params.userId;

            const query = {_id: Objectid(id)};

            const result = await userCollection.findOne(query);

            res.send(result);
        })

        // update document
        app.put('/user/:userId', async (req, res) => {
            const id = req.params.userId;

            const updateUser = req.body;

            const filter = {_id: Objectid(id)};

            const options = {upsert: true};

            const updateDoc = {
                $set: updateUser
            }

            const result = await userCollection.updateOne(filter, updateDoc, options);

            res.send(result);
        })
    }
    // catch {
    //     console.error('error catched')
    // }
    finally {
        // await client.close();
    }
}

run().catch(console.dir) // the function run must need to call

/* client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log('mongodb cluster connected')
}); */


app.get('/', (req, res) => {
    res.send('My Node Mongo CRUD sever running')
})


app.listen(port, () => {
    console.log('CRUD server running from the port', port)
})