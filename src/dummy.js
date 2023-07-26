module.exports = {
  title: "The Bootstrapping Byte #5 - Bonjour Monsieur Claude",
  slug: "the-bootstrapping-byte-5",
  url: "https://bootstrappingdad.com/the-bootstrapping-byte-5/",
  excerpt:
    " News from the chat-bot front, business models for solopreneurs, common mistakes with server components and how to fix them, a documentary about the man behind fireship.io",
  html: `<p>This week: news from the chat-bot front, business models for solopreneurs and some nice nerdy stuff.</p>
      <p>To the web version: <a
          href="https://bootstrappingdad.com/the-bootstrapping-byte-5/">https://bootstrappingdad.com/the-bootstrapping-byte-5/</a>
      </p>
      <h2 id="%F0%9F%A6%BE-news-from-the-ai-chatbot-front">🦾 News from the AI-chatbot front</h2>
      <p>The week has been pretty rich on the chatbot scene. My 3 picks are the new ChatGPT's plugin, Claude 2 from
        Anthropic and Bard landing in Europe.</p>
      <h3 id="openais-new-plugin-code-interpretera-data-analyst-in-your-pocket">OpenAI's new plugin "Code interpreter" - a
        data analyst in your pocket</h3>
      <p>OpenAI rolled-out a new plugin for ChatGPT Plus users: Code interpreter. It allows users to run Python code in a
        sandboxed environment that can under command do a series of complex tasks: Data analysis, Image processing or Code
        editing.</p>
      <figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container"
          href="https://medium.com/@KanikaB/chat-gpts-code-interpreter-plugin-here-is-everything-you-need-to-know-leverage-the-tool-31d154836ed0">
          <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">Chat GPT’s CODE INTERPRETER Plugin — Here is EVERYTHING you need to know:
              Leverage the tool…</div>
            <div class="kg-bookmark-description">Chat GPT has just released it’s new Plugin Code interpreter, and this
              plugin is totally insane.</div>
            <div class="kg-bookmark-metadata"><img class="kg-bookmark-icon"
                src="https://cdn-static-1.medium.com/_/fp/icons/Medium-Avatar-500x500.svg" alt=""><span
                class="kg-bookmark-author">Medium</span><span class="kg-bookmark-publisher">Kanika B K</span></div>
          </div>
          <div class="kg-bookmark-thumbnail"><img src="https://miro.medium.com/v2/resize:fit:1200/0*lw83Qw5KmI3WoYZd"
              alt=""></div>
        </a></figure>
      <p><strong>TL;DR:</strong></p>
      <ul>
        <li>ChatGPT has released a new plugin called Code Interpreter, which allows users to run Python code in a sandboxed
          environment.</li>
        <li>The Code Interpreter can be used for a variety of tasks such as data analysis, image processing, code editing,
          and other tasks like generating text, translating languages, and writing creative content.</li>
        <li>The plugin can be enabled from the settings under Beta Features, and it can be used to upload and analyze files,
          including CSV files, Excel spreadsheets, and SQL databases.</li>
        <li>The author used the plugin to perform deep data analysis on a .csv file of Customer Lifetime Value, generating
          various visualizations and insights.</li>
        <li>The Code Interpreter can also be used to create presentations, perform calculations, and generate various types
          of visual charts.</li>
      </ul>
      <h3 id="anthropic-jumping-into-the-arena-with-claude-2">Anthropic jumping into the arena with Claude 2</h3>
      <p>In the meantime, Anthropic - a competitor of OpenAI founded by former employees - deployed its new chatbot: Claude
        2. Having read different post comparing it to ChatGPT, it seems to do an excellent job when extracting data from
        document and has been trained on data up to early 2023. To be continued..</p>
      <figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container"
          href="https://techcrunch.com/2023/07/11/anthropic-releases-claude-2-the-second-generation-of-its-ai-chatbot/?guccounter&#x3D;1&amp;guce_referrer&#x3D;aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&amp;guce_referrer_sig&#x3D;AQAAAGjfX2RS8wcBwmU8C7zy_IoUt8t5o87yOo48z1pkqTugG7DsPPiy4HQm9UDuaWvFhln8xdqxHIQ2gm9jxT2CKVlPl0O5pcBugff31PePwOkfWzm7YZeD6AaJFdYkJ3CfPSpoRO5MCNf1vT5bQSAjgDem-c_klyH6dTAa65WUEJtm">
          <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">Anthropic releases Claude 2, its second-gen AI chatbot</div>
            <div class="kg-bookmark-description">Anthropic, the AI startup founded by ex-OpenAI execs, has released its
              newest chatbot, Claude 2. It’s ostensibly improved in several ways.</div>
            <div class="kg-bookmark-metadata"><img class="kg-bookmark-icon"
                src="https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w&#x3D;192"
                alt=""><span class="kg-bookmark-author">TechCrunch</span><span class="kg-bookmark-publisher">Kyle
                Wiggers</span></div>
          </div>
          <div class="kg-bookmark-thumbnail"><img
              src="https://techcrunch.com/wp-content/uploads/2023/05/anthropic-header.jpg?resize&#x3D;1200,675" alt="">
          </div>
        </a></figure>
      <p><strong>TL;DR:</strong></p>
      <p>Anthropic, an AI startup co-founded by ex-OpenAI executives, has released Claude 2, a new text-generating AI model
        available in beta in the U.S. and U.K.</p>
      <ul>
        <li>Claude 2 is an improvement over its predecessor, Claude 1.3, scoring higher on tests such as the bar exam, the
          U.S. Medical Licensing Exam, and Python coding tests.</li>
        <li>The new model was trained on more recent data and has improved reasoning and self-awareness, but it still shares
          the same architecture as Claude 1.3.</li>
        <li>Despite improvements, Claude 2 still has limitations such as hallucination, generating toxic text, and data
          regurgitation, but Anthropic claims it is "2x better" at giving harmless responses.</li>
        <li>Anthropic has raised $1.45 billion to date and estimates it will need $5 billion over the next two years to
          create its envisioned chatbot, with most of the cash going towards compute infrastructure.</li>
      </ul>
      <h3 id="googles-chatbot-bard-finally-released-in-the-eu">Google's chatbot Bard finally released in the EU</h3>
      <p>I asked Bard to present himself in a short elevator speech, I let you judge 🙃:</p>
      <figure class="kg-card kg-image-card"><img
          src="https://bootstrappingdad.com/content/images/2023/07/Screenshot-2023-07-14-at-21.09.33.png" class="kg-image"
          alt loading="lazy" width="1268" height="832"
          srcset="https://bootstrappingdad.com/content/images/size/w600/2023/07/Screenshot-2023-07-14-at-21.09.33.png 600w, https://bootstrappingdad.com/content/images/size/w1000/2023/07/Screenshot-2023-07-14-at-21.09.33.png 1000w, https://bootstrappingdad.com/content/images/2023/07/Screenshot-2023-07-14-at-21.09.33.png 1268w"
          sizes="(min-width: 720px) 720px"></figure>
      <p>To start messing around with Bard👇</p>
      <figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://bard.google.com/">
          <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">‎Try Bard, an AI experiment by Google</div>
            <div class="kg-bookmark-description">Bard is your creative and helpful collaborator to supercharge your
              imagination, boost productivity, and bring ideas to life.</div>
            <div class="kg-bookmark-metadata"><img class="kg-bookmark-icon"
                src="https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg" alt=""></div>
          </div>
          <div class="kg-bookmark-thumbnail"><img src="https://www.gstatic.com/lamda/images/bard_thumbnail.png" alt="">
          </div>
        </a></figure>
      <h2 id="%F0%9F%8D%9C-economic-model-that-work-best-for-1-person-businesses"><br>🍜 Economic model that work best for
        1-person businesses</h2>
      <p>Indie hacking is a trendy topic: the idea that you could build your own small business and make a living from that.
        But where to start? Having an overview of the types of business that (might) work for solopreneur is a good way to
        start their journey.</p>
      <figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container"
          href="https://open.substack.com/pub/tinyempires/p/9-best-business-models-for-a-strong?r&#x3D;1g4oim&amp;utm_medium&#x3D;ios&amp;utm_campaign&#x3D;post">
          <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">9 best business models for a strong 1-person business?</div>
            <div class="kg-bookmark-description">Welcome to the 3rd edition of Tiny Empires. This week sponsored by Million
              Labs. A quick note before today’s post: I hosted the first Tiny Empires event this week “How to build a
              6-figure business with no staff”. Thanks to everyone who came along. Despite some microphone issues at the
              start, we had</div>
            <div class="kg-bookmark-metadata"><img class="kg-bookmark-icon"
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffc331ef5-7f88-4eec-a963-55fc7b577980%2Fapple-touch-icon-1024x1024.png"
                alt=""><span class="kg-bookmark-author">Tiny Empires</span><span class="kg-bookmark-publisher">JT</span>
            </div>
          </div>
          <div class="kg-bookmark-thumbnail"><img
              src="https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fffd6ccb9-8b73-4e63-b163-73215ea9bd6b_2366x1318.png"
              alt=""></div>
        </a></figure>
      <h2 id="%F0%9F%A4%93-getting-familiar-with-server-components-in-next-jsskip-if-youre-not-a-developer"><br>🤓 Getting
        familiar with server components in Next JS - (Skip if you're not a developer)</h2>
      <p>Server components are gaining hype with the release of next 13. As I'm playing around with it, I've found a good
        resource about the common mistake devs make when starting with server components and most important how to fix them.
      </p>
      <figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container"
          href="https://www.propelauth.com/post/5-common-pitfalls-with-server-components-in-next13-with-examples">
          <div class="kg-bookmark-content">
            <div class="kg-bookmark-title">5 Common Pitfalls with Server Components in Next13 (with examples)</div>
            <div class="kg-bookmark-description">The App Router is a new feature in NextJS 13, and it was recently switched
              to being the recommended option when you create a new NextJS application. This effectively replaces the Pages
              Router, and NextJS has documentation on how you can incrementally switch over. The most notable difference in
              the</div>
            <div class="kg-bookmark-metadata"><img class="kg-bookmark-icon"
                src="https://cdn.getmidnight.com/a1241f0fcb8d83a4c0387f234e241914/2022/10/Group-221.png" alt=""><span
                class="kg-bookmark-author">PropelAuth Blog</span><span class="kg-bookmark-publisher">Andrew Israel</span>
            </div>
          </div>
          <div class="kg-bookmark-thumbnail"><img
              src="https://cdn.getmidnight.com/a1241f0fcb8d83a4c0387f234e241914/2023/07/5-Common-Pitfalls-with-Server-Components-in-Next13--with-examples-.png"
              alt=""></div>
        </a></figure>
      <h2 id="%F0%9F%8D%AA-tasty-treat-of-the-week-meet-jeff-delaney-from-fireshipio"><br>🍪 Tasty treat of the week: Meet
        Jeff Delaney from Fireship.io</h2>
      <p>If you're in tech, you've probably heard about the Youtube channel Fireship.io, famous for it's short and funny
        explainers. Honeypot just released a portrait of Jeff Delaney, the guy behind this 2M+ subscriber channel, a nice
        short documentary to watch.</p>
      <figure class="kg-card kg-embed-card"><iframe width="200" height="113"
          src="https://www.youtube.com/embed/XRoSBWYMefY?start=191&feature=oembed" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen title="Meet Jeff Delaney: The Mastermind Behind @Fireship"></iframe></figure>
      <p>Thanks for reading! Subscribe to The Boostrapping Dad to receive my weekly newsletter directly in your inbox 🥐☕️
      </p>
      <div class="kg-card kg-button-card kg-align-left"><a href="https://bootstrappingdad.com/#/portal/signup/free"
          class="kg-btn kg-btn-accent">Subscribe to The Boostrapping Dad</a></div>
      <p>See you next week!</p>`,
  tags: [{ name: "Digest" }],
};
