export const sidebarLinks = [
  { title: "文章归档", href: "/posts", icon: "fas fa-archive" },
  { title: "与昨日书", href: "/memories", icon: "fas fa-calendar-day" },
  { title: "吾之足迹", href: "/mark", icon: "fas fa-shoe-prints" },
  { title: "友情链接", href: "/friends", icon: "fas fa-link" },
];


interface HeaderLink {
    title: string,
    desc?: string,
    icon?: string,
    href?: string,
    children?: HeaderLink[],
}
export const headerLinks: HeaderLink[] = [
  {
    title: "时",
    children: [
      { title: "文章归档", href: "/posts", icon: "fas fa-archive" },
      { title: "与昨日书", href: "/memories", icon: "fas fa-calendar-day" },
    ],
  },
  {
    title: "空",
    children: [
      { title: "吾之足迹", href: "/mark", icon: "fas fa-shoe-prints" },
      { title: "友情链接", href: "/friends", icon: "fas fa-link" },
    ],
  },
];
