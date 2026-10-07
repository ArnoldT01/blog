// Posts, newest first. Each post's `body` is HTML rendered into article.html.
//
// {
//   slug: "my-post",
//   title: "My Post",
//   date: "2026-01-31",
//   body: `
//     <p>Paragraph text with <strong>bold</strong>, <a href="#">a link</a> and <code class="inline">.code()</code>.</p>
//     <div class="code-block">
//       <div class="code-head"><span class="label">Code Example</span><button type="button" class="copy">Copy Code</button></div>
//       <pre><code><span class="tag">&lt;div&gt;</span>...<span class="tag">&lt;/div&gt;</span></code></pre>
//     </div>
//     <p class="emphasis">Bold italic paragraph.</p>
//   `,
// },
const POSTS = [];

function formatDate(iso, style = "long") {
  const d = new Date(iso + "T00:00:00");
  return style === "short"
    ? d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
