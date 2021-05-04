module.exports = async function (context, req, Blog) {
  context.log("JavaScript queue trigger function processed work item");
  const response = Blog ? Blog : "Blog item not found";
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: response,
    headers: {
      "Content-Type": "application/json",
    },
  };
  context.done();
};
