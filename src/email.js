const ejs = require("ejs");

const renderHtml = async ({
  editionNumber,
  editionTitle,
  url,
  excerpt,
  html,
  BLOG_URL,
  BLOG_BARE_URL,
  BLOG_TITLE,
  NEWSLETTER_BANNER,
}) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(
      "./views/pages/index.ejs",
      {
        editionNumber,
        editionTitle,
        url,
        excerpt,
        html,
        BLOG_URL,
        BLOG_BARE_URL,
        BLOG_TITLE,
        NEWSLETTER_BANNER,
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

const generateEmail = async ({
  title,
  html,
  url,
  excerpt,
  BLOG_URL,
  BLOG_BARE_URL,
  BLOG_TITLE,
  NEWSLETTER_BANNER,
}) => {
  const [editionNumber, editionTitle] = title.split(/\s*-\s*/);
  const renderedHtml = await renderHtml({
    editionNumber,
    editionTitle,
    url,
    excerpt,
    html,
    BLOG_URL,
    BLOG_BARE_URL,
    BLOG_TITLE,
    NEWSLETTER_BANNER,
  });
  return renderedHtml;
};

module.exports = { generateEmail };
