import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://punithrajkumar496:punithrajkumar496@cluster0.svqeffc.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
