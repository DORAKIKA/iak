import { getRandomArr, useApiRoute } from "@/lib/utils";
import { searchPosts } from "@/lib/utils/content";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false;

export const GET: APIRoute = useApiRoute(async ({ request }) => {
  // 请求解析
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  let size = Number(url.searchParams.get("size") ?? 1);
  const search = url.searchParams.get("search");

  //   获取posts
  let posts = await getCollection("posts", (entry) => !entry.data.draft);

  if (search) {
    posts = searchPosts(search, posts);
  }

  const purePosts = posts.map((p) => {
    const { body, ...rest } = p;
    return rest;
  });

  size = isNaN(size) ? purePosts.length : size;
  let res = type === "random" ? getRandomArr(purePosts) : purePosts;
  res = res.splice(0, size);

  return new Response(JSON.stringify(res));
});
