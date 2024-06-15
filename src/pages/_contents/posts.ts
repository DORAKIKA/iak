import { type CollectionEntry, getCollection } from "astro:content";
import _ from "lodash";

const getPosts = await (async function () {
  const posts = await getCollection("posts");

  return function () {
    return _.cloneDeep(posts);
  };
})();

// 获取star文章，star从大到小排序
export function getStarPosts(count: number) {
  const posts = getPosts();

  const starPosts = posts.filter((post) => post.data.star !== undefined);

  starPosts.sort((a, b) => {
    if (a.data.star === undefined || b.data.star === undefined) return 0;

    if (a.data.star !== b.data.star) {
      return a.data.star > b.data.star ? -1 : 1;
    } else {
      return a.data.date > b.data.date ? -1 : 1;
    }
  });

  starPosts.splice(count);

  return starPosts;
}

// 获取最近文章
export function getRecentPosts(count: number) {
  const posts = getPosts();

  posts.sort((a, b) => {
    return a.data.date > b.data.date ? -1 : 1;
  });

  posts.splice(count);

  return posts;
}

// 获取相关文章
export function getRelatedPosts(
  target: CollectionEntry<"posts">,
  count: number
) {
  // tags, category
  const posts = getPosts().filter((p) => p.id !== target.id);
  const map = new Map<string, number[]>();
  posts.forEach((post) => {
    let value = [0, 0];

    const tags: String[] = [];
    post.data.tags && tags.push(...post.data.tags);
    target.data.tags && tags.push(...target.data.tags);
    const tagsSet = new Set(tags);

    // tags权重
    value[0] = tags.length - tagsSet.size;
    // category 权重
    if (
      post.data.category === target.data.category &&
      target.data.category !== undefined
    ) {
      value[1] = 1;
    }
    map.set(post.id, value);
  });

  // 权重排序
  posts.sort((a, b) => {
    const aW = map.get(a.id);
    const bW = map.get(b.id);

    if (aW === undefined) return -1;
    if (bW === undefined) return 1;

    for (let i = 0; i < aW.length; i++) {
      if (aW[i] === bW[i]) continue;
      return aW[i] > bW[i] ? -1 : 1;
    }
    // 同权重按时间排序
    if (a.data.date === undefined || b.data.date === undefined) return 0;
    return a.data.date > b.data.date ? -1 : 1;
  });

  // count
  posts.splice(count);

  return posts;
}

// 获取下一篇文章
export function getPrevAndNext(target: CollectionEntry<"posts">) {
  let nextPost: CollectionEntry<"posts"> | undefined,
    prevPost: CollectionEntry<"posts"> | undefined;
  const posts = getPosts();
  posts.forEach((post) => {
    if (post.data.date > target.data.date) {
      if ((nextPost && post.data.date < nextPost.data.date) || !nextPost) {
        nextPost = post;
      }
    } else if (post.data.date < target.data.date) {
      if ((prevPost && post.data.date > prevPost.data.date) || !prevPost) {
        prevPost = post;
      }
    }
  });

  return [prevPost, nextPost];
}
