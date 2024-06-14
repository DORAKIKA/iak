import { column, defineDb, defineTable } from "astro:db";

const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    name: column.text(),
    avatar: column.text({ optional: true }),
  },
});

const Reactions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    user: column.number({ references: () => Users.columns.id }),
    slug: column.text(),
    scope: column.text(),
    emoji: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    Reactions,
  },
});
