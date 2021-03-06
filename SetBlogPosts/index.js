module.exports = function (context) {
  context.log("JavaScript HTTP trigger function processed a request.");

  context.bindings.outputDocument = JSON.stringify([
    {
      title: "Higlighted Post",
      blogType: "Text",
      author: {
        name: "Katelijne Duerinck",
        img: "/Katelijne.jpg",
        job: "Co-founder FTRPRF",
      },
      img: "/hipsterroom.jpg",
      summary:
        'This will be the first blogpost shown in the overview. It will have a "new" flag to indicate that this post will be the first and the most recent',
      timestamp: new Date(2021, 2, 22),
      estimate: 6,
      content: "Nothing",
    },
    {
      title: "Second post",
      blogType: "Text",
      author: {
        name: "Katelijne Duerinck",
        img: "/Katelijne.jpg",
        job: "Co-founder FTRPRF",
      },
      img: "/keyboard-zoom.jpg",
      summary:
        'This will be the second blogpost shown in the overview. It won\'t have a "new" flag, as it will not be the most recent post',
      timestamp: new Date(2021, 2, 19),
      estimate: 10,
      content: "Nothing",
    },
    {
      title: "Third post",
      blogType: "Text",
      author: {
        name: "Katelijne Duerinck",
        img: "/Katelijne.jpg",
        job: "Co-founder FTRPRF",
      },
      img: "/clean-mac.jpg",
      summary: "This will be the third blogpost shown in the overview.",
      timestamp: new Date(2021, 2, 17),
      estimate: 3,
      content: "Nothing",
    },
    {
      title: "Understanding the basics of JavaScript",
      blogType: "Tutorial",
      author: {
        name: "Katelijne Duerinck",
        img: "/Katelijne.jpg",
        job: "Co-founder FTRPRF",
      },
      img: "/generic-laptop1.jpg",
      summary:
        "Learning to master JavaScript isn't as hard as it sounds. But to learn how to work with this framework, you'll need some basic knowledge. In this first part, we'll cover the basics :)",
      timestamp: new Date(2021, 5, 5),
      estimate: 3,
      content: "Nothing",
    },
  ]);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: "Went well",
  };

  context.done();
};
