const express = require("express");
const path = require("path");

const { generateEmail } = require("../email");
const { createEmailCampaign } = require("../services/emailService");
const dummyPayload = require("../dummy");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "../views"));

app.get("/", async (req, res) => {
  const { title, html, url, excerpt } = dummyPayload;
  const { BLOG_URL, BLOG_BARE_URL, BLOG_TITLE, NEWSLETTER_BANNER } =
    process.env;
  const [editionNumber, editionTitle] = title.split(/\s*-\s*/);
  res.render("pages/index", {
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
});

app.post("/", async (req, res) => {
  try {
    console.log({ headers: req.headers });
    const { slug, title, html, url, excerpt, tags } = req.body.post.current;
    const newsletterTag = process.env.NEWSLETTER_TAG;
    if (tags.some((tag) => tag.name === newsletterTag)) {
      const htmlContent = await generateEmail({
        title,
        html,
        url,
        excerpt,
      });

      await createEmailCampaign({ htmlContent, slug, title });
    }
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

module.exports = { app };
