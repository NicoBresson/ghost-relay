const path = require("path");
require("dotenv").config();
const express = require("express");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const { generateEmail } = require("./email");
const dummyPayload = require("./dummy");

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const SENDER_NAME = process.env.SENDER_NAME;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const REPLY_TO = process.env.REPLY_TO;
const EMAIL_LIST_ID = process.env.EMAIL_LIST_ID;
const BLOG_URL = process.env.BLOG_URL;
const BLOG_BARE_URL = process.env.BLOG_BARE_URL;
const BLOG_TITLE = process.env.BLOG_TITLE;
const NEWSLETTER_BANNER = process.env.NEWSLETTER_BANNER;
const NEWSLETTER_TAG = process.env.NEWSLETTER_TAG;
const CAMPAIGN_TAG = process.env.CAMPAIGN_TAG;

const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  try {
    const { title, html, url, excerpt } = dummyPayload;
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
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { slug, title, html, url, excerpt, tags } = req.body.post.current;
    if (tags.some((tag) => tag.name === NEWSLETTER_TAG)) {
      const htmlContent = await generateEmail({
        title,
        html,
        url,
        excerpt,
        BLOG_URL,
        BLOG_BARE_URL,
        BLOG_TITLE,
        NEWSLETTER_BANNER,
      });

      const response = await apiInstance.createEmailCampaign({
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        tag: CAMPAIGN_TAG,
        name: slug,
        subject: title,
        replyTo: REPLY_TO,
        recipients: {
          listIds: [parseInt(EMAIL_LIST_ID, 10)],
        },
        inlineImageActivation: false,
        htmlContent,
      });
      console.log({ response });
    }
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
