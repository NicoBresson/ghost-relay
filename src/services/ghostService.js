const ghostContentAPI = require("@tryghost/content-api");

const api = new ghostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.GHOST_API_KEY,
  version: "v5.0",
});

const getPost = async (postId) => {
  try {
    const post = await api.posts.read({ id: postId });
    return post;
  } catch (error) {
    console.log("Error while getting post", { postId, error });
    throw new Error({ error });
  }
};

module.exports = { getPost };
