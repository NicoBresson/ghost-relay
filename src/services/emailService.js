const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];

apiKey.apiKey = process.env.BREVO_API_KEY;

const { SENDER_EMAIL, SENDER_NAME, REPLY_TO, EMAIL_LIST_ID, CAMPAIGN_TAG } =
  process.env;

const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();

const createEmailCampaign = async ({ htmlContent, slug, title }) => {
  try {
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
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createEmailCampaign };
