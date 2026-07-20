
const sortedStories = [...STORIES].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

function storyRow(story, index) {
  const number = String(index + 1).padStart(2, "0");

  return `
    <a class="story-row" href="${story.link}">
      <span class="num">${number}</span>
      <div>
        <h3>${story.title}</h3>
        <p>${story.excerpt}</p>
      </div>
      <div class="story-info">
        <span>${story.readTime}</span>
        <strong>Read →</strong>
      </div>
    </a>
  `;
}

const homepageList = document.querySelector("#homepage-story-list");

if (homepageList) {
  homepageList.innerHTML = sortedStories
    .slice(0, 6)
    .map(storyRow)
    .join("");
}

const fullArchive = document.querySelector("#full-story-list");

if (fullArchive) {
  fullArchive.innerHTML = sortedStories
    .map(storyRow)
    .join("");
}

const featured = STORIES.find(
  story => story.slug === FEATURED_STORY_SLUG
);

if (featured) {
  const title = document.querySelector("#featured-title");
  const excerpt = document.querySelector("#featured-excerpt");
  const time = document.querySelector("#featured-time");
  const link = document.querySelector("#featured-link");
  const mark = document.querySelector("#featured-mark");

  if (title) title.textContent = featured.title;
  if (excerpt) excerpt.textContent = featured.excerpt;
  if (time) time.textContent = featured.readTime;
  if (link) link.href = featured.link;

  if (mark) {
    mark.textContent = featured.title
      .split(/\s+/)
      .map(word => word[0])
      .join("")
      .replace("&", "")
      .slice(0, 3)
      .toUpperCase();
  }
}

const count = document.querySelector("#story-count");
if (count) count.textContent = `${STORIES.length} Stories`;

const updated = document.querySelector("#archive-updated");
if (updated && sortedStories.length) {
  const latestDate = new Date(`${sortedStories[0].date}T12:00:00`);
  updated.textContent = `Updated ${latestDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  })}`;
}
