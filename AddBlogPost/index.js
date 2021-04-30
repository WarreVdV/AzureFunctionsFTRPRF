module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  context.bindings.outputDocument = JSON.stringify({
    title: req.body.title,
    blogType: req.body.blogType,
    author: {
      name: req.body.author.name,
      img: req.body.author.img,
      job: req.body.author.job,
    },
    address: req.body.address,
    img: req.body.img,
    summary: req.body.summary,
    timestamp: req.body.timestamp,
    estimate: req.body.estimate,
  });

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: "Added a new blogpost! :",
  };

  context.done();
};
