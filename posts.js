// Test content. Each post's `body` is HTML rendered into article.html.
const LOREM_A = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <strong>(ullamco laboris, nisi)</strong>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
const LOREM_B = `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem <a href="#">accusantium doloremque laudantium</a>, totam rem aperiam.`;
const LOREM_C = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <code class="inline">.sample()</code> sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.`;

const SAMPLE_CODE = [
  '<span class="tag">&lt;section</span> class="card"<span class="tag">&gt;</span>',
  '  <span class="tag">&lt;header</span>',
  '    title="Sample heading"<span class="tag">&gt;</span>',
  '  <span class="tag">&lt;/header&gt;</span>',
  '  <span class="tag">&lt;card-body</span>',
  '    content="placeholder text"<span class="tag">&gt;</span>',
  '  <span class="tag">&lt;/card-body&gt;</span>',
  '<span class="tag">&lt;/section&gt;</span>',
].join("\n");

function sampleBody() {
  return `
    <p>${LOREM_A} ${LOREM_B}</p>
    <p>${LOREM_C}</p>
    <div class="code-block">
      <div class="code-head"><span class="label">Code Example</span><button type="button" class="copy">Copy Code</button></div>
      <pre><code>${SAMPLE_CODE}</code></pre>
    </div>
    <p>${LOREM_A} ${LOREM_B}</p>
    <p class="emphasis">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
    <p>${LOREM_C} ${LOREM_A}</p>
  `;
}

const POSTS = [
  { slug: "sample-post-one",   title: "Sample Post Title Number One",              date: "2026-09-28" },
  { slug: "sample-post-two",   title: "A Second Test Article About Something",     date: "2026-09-12" },
  { slug: "sample-post-three", title: "Placeholder Thoughts on Building Things",   date: "2026-08-03" },
  { slug: "sample-post-four",  title: "Lorem Ipsum and the Art of Test Content",   date: "2026-06-21" },
  { slug: "sample-post-five",  title: "Notes From a Hypothetical Project",         date: "2026-03-14" },
  { slug: "sample-post-six",   title: "An Older Example Post From Last Year",      date: "2025-11-30" },
  { slug: "sample-post-seven", title: "Getting Started: A Test Entry",             date: "2025-07-09" },
].map(p => ({ ...p, body: sampleBody() }));

function formatDate(iso, style = "long") {
  const d = new Date(iso + "T00:00:00");
  return style === "short"
    ? d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
