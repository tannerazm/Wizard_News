const html = require("html-template-tag");

const postDetails = (post, res) => {
    if (!post.id) {
        res.status(404)
        return (
            html`<!DOCTYPE html>
        <html>
        <head>
          <title>Wizard News</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <header><img src="/logo.png"/>Wizard News</header>
          <div class="not-found">
            <p>Accio Page! 🧙‍♀️ ... Page Not Found</p>
            <img src="https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/236948228_208404031298312_108476030876271756_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_t4AJEILFowAX9z_e6f&_nc_ht=scontent-den4-1.xx&oh=00_AT_DjLb_9cNHlnNrUVz1SFEWtkiF7-acRb7f-gBkpKD3XQ&oe=62D42060" />
          </div>
        </body>
        </html>`)
      } else {
      return(
        html`<!DOCTYPE html>
      <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/>Wizard News</header>
          <div class='news-item'>
            <p>
              ${post.title} <small>(by ${post.name})</small>
            </p>
            <p>
              ${post.content}
            </p>
          </div>
        </div>
      </body>
    </html>`)
      }
}
module.exports = { postDetails };