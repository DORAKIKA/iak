import { useApiRoute } from "@/lib/utils";
import { Users, db, eq } from "astro:db";
import { getSession } from "auth-astro/server";

export const prerender = false;

export const GET = useApiRoute(async ({ request }) => {
  const session = await getSession(request);

  return new Response(JSON.stringify(session));
});

export const POST = useApiRoute(async ({ request }) => {
  const session = await getSession(request);

  if (session?.user) {
    const meRecords = await db
      .select()
      .from(Users)
      .where(eq(Users.email, session.user.email));
    if (meRecords.length) {
      await db
        .update(Users)
        .set({
          avatar: session.user.image,
          name: session.user.name,
        })
        .where(eq(Users.email, session.user.email));
    } else {
      await db.insert(Users).values({
        email: session.user.email,
        avatar: session.user.image,
        name: session.user.name,
      });
    }
  }
  return new Response(JSON.stringify(session));
});
