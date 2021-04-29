module.exports = async function (context, req, Blog) {
  context.log("JavaScript queue trigger function processed work item");
  const wow = context.bindings.BlogIn
    ? context.bindings.BlogIn
    : "Nothing found";
  const response = Blog
    ? "Found Blog item, Description=" + Blog.name
    : "Blog item not found";
  const name = req.query.Id || (req.body && req.body.Id);
  const par = req.query.PartitionKey || (req.body && req.body.PartitionKey);
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: wow + " : " + name + " and " + par,
    headers: {
      "Content-Type": "application/json",
    },
  };
  context.done();
};
