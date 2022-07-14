const timeAgo = require('node-time-ago');
const html = require("html-template-tag");

const postList = (posts) => {
  const myPosts = posts
      .map(
        (post) => 
          html`<div class='news-item'>
              <p>
                <span class='news-position'>${post.id}. ▲</span><a href='/posts/${post.id}'>${post.title}</a>
                  <small>(by ${post.name})</small>
              </p>
            <small class='news-info'>${post.upvotes} upvotes | ${timeAgo(new Date(post.date).toISOString())}</small>
          </div>`
      )
      .join("");
      
  return (
            `<!DOCTYPE html>
            <html>
            <head>
              <title>Wizard News</title>
              <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
              <div class="news-list">
                <header><img src="/logo.png"/>Wizard News</header>
                ${myPosts}
              </div>
            </body>
          </html>`
        )
    }; 



    module.exports = { postList };