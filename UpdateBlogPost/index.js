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

  try {
    if (req.body && req.body.id) {
      const item = container.item(req.body.id, req.body.id);

      await item.replace(req.body);
      context.res = {
        // status: 200, /* Defaults to 200 */
        status: 200,
        body: req.body,
      };
    } else {
      context.res = {
        // status: 200, /* Defaults to 200 */
        status: 400,
        body: "Something went wrong",
      };
    }
  } catch (err) {
    if (err.code && err.code === 404) {
      context.res = {
        status: 404,
        body: "Nothing found",
      };
    }
  }

  context.done();
};
