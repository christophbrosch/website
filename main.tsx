/** @jsx h */

import blog from "blog";

blog({
  title: "Christoph Brosch",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://avatars.githubusercontent.com/u/44674265?s=400&u=57c299479d8881d5ffab9ebc8c6158d0256e27f7&v=4",
  avatarClass: "rounded-full",
  author: "Christoph Brosch",
  links: [
    { title: "Email", url: "mailto:christoph.brosch@outlook.de"},
    { title: "GitHub", url: "https://github.com/christophbrosch" }
  ],
  lang: "en",
  favicon: "favicon.ico"
  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
