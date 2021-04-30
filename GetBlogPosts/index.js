module.exports = async function (context, req, Blogs) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const blogs = Blogs ? Blogs : "No blogs found";

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: blogs,
  };
};
