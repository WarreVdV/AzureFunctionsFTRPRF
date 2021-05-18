const cosmos = require("@azure/cosmos");

require("dotenv").config();
const endpoint = process.env.COSMOS_API_URL; // Use the name of the setting that contains your Endpoint
const key = process.env.COSMOS_API_KEY; // Use the name of the setting that contains your Key
const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, key });
// All function invocations also reference the same database and container.
// If on the contrary you need to change the container based on the Trigger, then create the instance inside the Function
const container = client.database("websitefunctions").container("my-blogposts");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  if (req.body && req.body.id) {
    const item = container.item(req.body.id, req.body.id);
    const response = "Deleted BlogPost with id: " + req.body.id;
    await item.delete();

    context.res = {
      status: 200,
      // status: 200, /* Defaults to 200 */
      body: response,
    };
  } else {
    const response = "Nothing deleted: (MISSING ID IN REQUEST BODY)";

    context.res = {
      status: 400,
      // status: 200, /* Defaults to 200 */
      body: response,
    };
  }

  context.done();
};
