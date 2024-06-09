import { type CollectionEntry } from "astro:content";

export function getPostUrl(post: CollectionEntry<"posts">) {
  return `/post/${post.slug}`;
}

/** 获取文章标签 */
export function getPostTags(posts: CollectionEntry<"posts">[]) {
  const tagsMap = new Map();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      if (tagsMap.has(tag)) {
        tagsMap.set(tag, tagsMap.get(tag) + 1);
      } else {
        tagsMap.set(tag, 1);
      }
    });
  });
  const tags = Array.from(tagsMap)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);

  return tags;
}

export function searchPosts(search: string, posts: CollectionEntry<"posts">[]) {
  const queryText = search.toLowerCase();
  const results = posts.filter((p) => {
    if (p.data.title && p.data.title.toLowerCase().indexOf(queryText) !== -1) {
      return true;
    }

    if (
      p.data.description &&
      p.data.description.toLowerCase().indexOf(queryText) !== -1
    ) {
      return true;
    }

    if (
      p.data.category &&
      p.data.category.toLowerCase().indexOf(queryText) !== -1
    ) {
      return true;
    }
    if (
      p.data.tags &&
      p.data.tags.join(" ").toLowerCase().indexOf(queryText) !== -1
    ) {
      return true;
    }

    return false;
  });
  return results;
}
