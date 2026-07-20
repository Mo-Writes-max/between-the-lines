
BETWEEN THE LINES — WEBSITE FILES

FILES
-----
index.html          Homepage
stories.html        Full Archive containing every story
podcast.html        Your original podcast page, unchanged
styles.css          Shared homepage and Archive styling
stories-data.js     Controls story titles, links, dates, excerpts, and featured story
site.js             Automatically builds the homepage and Archive lists
stories/            Keep your existing individual story HTML files in this folder


IMPORTANT BEFORE UPLOADING
--------------------------
1. Keep your existing story files inside the stories folder.
2. Check every "link" in stories-data.js and make sure it matches the exact
   filename of your existing story page.
3. Replace the # in the homepage newsletter button with your Beehiiv link.
4. If your existing About or Contact content is longer, paste it into the
   matching sections in index.html.


ADDING A NEW STORY
------------------
1. Create the story page:
   stories/smile.html

2. Add this object inside stories-data.js:

{
  title: "Smile",
  slug: "smile",
  link: "stories/smile.html",
  date: "2026-07-21",
  readTime: "2 min read",
  excerpt: "A short description."
}

The website will automatically:
- put it first under Latest Stories
- add it to the full Archive
- update the story count
- update the Archive month
- sort everything newest first


CHANGING THE FEATURED STORY
---------------------------
At the top of stories-data.js, change:

const FEATURED_STORY_SLUG = "love-darkness";

For example:

const FEATURED_STORY_SLUG = "hallway";
