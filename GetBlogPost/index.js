module.exports = async function (context, req, Blog) {
  context.log("JavaScript queue trigger function processed work item");
  const response = Blog ? Blog : "Blog item not found";
  const status = Blog ? 200 : 404;
  context.res = {
    status,
    // status: 200, /* Defaults to 200 */
    body: response,
    headers: {
      "Content-Type": "application/json",
    },
  };
  context.done();
};
