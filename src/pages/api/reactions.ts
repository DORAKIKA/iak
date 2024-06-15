import { useApiRoute } from "@/lib/utils";
import { db, Reactions, and, eq, Users } from "astro:db";
import { getSession } from "auth-astro/server";

export const prerender = false;

export const GET = useApiRoute(async ({ request }) => {
  const url = new URL(request.url);
  const scope = url.searchParams.get("scope");
  const slug = url.searchParams.get("slug");

  if (!scope || !slug) {
    return new Response("scope and slug needed", { status: 400 });
  }

  const res = {
    user_reaction: null,
    reactions: [],
  };

  const session = await getSession(request);
  let ans, user;
  if (session?.user) {
    const batchResult = await db.batch([
      db
        .select()
        .from(Reactions)
        .where(and(eq(Reactions.scope, scope), eq(Reactions.slug, slug))),
      db.select().from(Users).where(eq(Users.email, session.user.email)),
    ]);
    ans = batchResult[0];
    if (batchResult[1].length) {
      user = batchResult[1][0];
    }
  } else {
    ans = await db
      .select()
      .from(Reactions)
      .where(and(eq(Reactions.scope, scope), eq(Reactions.slug, slug)));
  }
  const emojiMap = new Map();

  ans.forEach((item) => {
    if (item.user === user?.id) {
      res.user_reaction = item.emoji;
    }
    emojiMap.set(item.emoji, (emojiMap.get(item.emoji) ?? 0) + 1);
  });
  res.reactions = Array.from(emojiMap);

  return new Response(JSON.stringify(res));
});

export const POST = useApiRoute(async ({ request }) => {
  const json = await request.json();
  if (!json?.slug || !json?.scope || !json?.reaction) {
    return new Response(null, { status: 400 });
  }

  const session = await getSession(request);
  if (!session?.user) return new Response(null, { status: 401 });

  const meRecords = await queryMe(session.user.email);
  if (meRecords.length <= 0) return new Response(null, { status: 401 });

  console.log(json);
  const me = meRecords[0];

  if (!me) {
    return new Response(null, { status: 401 });
  }

  const myReactions = await db
    .select()
    .from(Reactions)
    .where(
      and(
        eq(Reactions.user, me.id),
        eq(Reactions.scope, json.scope),
        eq(Reactions.slug, json.slug)
      )
    );
  if (myReactions.length) {
    const lastReaction = myReactions[0];
    await db
      .update(Reactions)
      .set({ emoji: json.reaction })
      .where(eq(Reactions.id, lastReaction.id));
  } else {
    await db.insert(Reactions).values({
      user: me.id,
      slug: json.slug,
      scope: json.scope,
      emoji: json.reaction,
    });
  }
  return new Response(JSON.stringify(true));
});

function queryMe(email) {
  return db.select().from(Users).where(eq(Users.email, email));
}
