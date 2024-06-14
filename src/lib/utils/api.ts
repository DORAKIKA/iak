import type { APIContext, APIRoute } from "astro";

export function useApiRoute(func: APIRoute) {
  return async function (context: APIContext) {
    try {
      return await func(context);
    } catch (e) {
      return new Response("", {
        status: 500,
      });
    }
  };
}
