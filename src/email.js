const ejs = require("ejs");
const path = require("path");

const dummyPayload = require("./dummy");

const BLOG_URL = process.env.BLOG_URL;
const BLOG_BARE_URL = process.env.BLOG_BARE_URL;
const BLOG_TITLE = process.env.BLOG_TITLE;
const NEWSLETTER_BANNER = process.env.NEWSLETTER_BANNER;
const NEWSLETTER_TAG = process.env.NEWSLETTER_TAG;

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
      path.join(__dirname, "./views/pages/index.ejs"),
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

const generateEmail = async ({ title, html, url, excerpt }) => {
  const [editionNumber, editionTitle] = title.split(/\s*-\s*/);
  const { BLOG_URL, BLOG_BARE_URL, BLOG_TITLE, NEWSLETTER_BANNER } =
    process.env;
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
