const cosmos = require("@azure/cosmos");

require("dotenv").config();
const endpoint = process.env.COSMOS_API_URL; // Use the name of the setting that contains your Endpoint
const key = process.env.COSMOS_API_KEY; // Use the name of the setting that contains your Key
const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, key });
// All function invocations also reference the same database and container.
// If on the contrary you need to change the container based on the Trigger, then create the instance inside the Function
const container = client
  .database("functionTest")
  .container("my-function-container");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const item = container.item(req.body.id, req.body.id);
  const response = "done";
  await item.delete();
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: response,
  };

  context.done();
};
