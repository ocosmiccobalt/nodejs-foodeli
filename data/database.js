import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

let database;

export async function initDb() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  database = client.db('foodeli');
}

function getDb() {
  if (!database) {
    throw new Error('Database not connected!');
  }

  return database;
}

export default getDb;
