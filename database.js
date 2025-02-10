const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://NodeUser:NodePassWba678@nodelearning1.mngbs.mongodb.net/";

const client = new MongoClient(url);

const dbName = "NewDataBase";

async function main() {
  await client.connect();
  console.log("Connection to DB is SuccessFul :-");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Infinity",
    lastName: "Infinity",
    city: "Infinity",
    PhoneNumber: "+853563221222332222##",
  };

  const insertResult = await collection.insertOne(data);
  console.log(insertResult);

  const updateResult = await collection.updateOne(
    { lastName: "Titthi" },
    { $set: { lastName: "BillPoi" } }
  );
  console.log(updateResult);
  const deletedRes = await collection.deleteOne({
    PhoneNumber: "+853563221222332222##",
  });
  console.log("Deleted Document===> ", deletedRes);

  const findResult = await collection.find({}).toArray();
  console.log("Found Data =====> ", findResult);
  return "Connected SuccessFully to DataBase : 🙂";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
