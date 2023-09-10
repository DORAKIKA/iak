export interface MenuLinkItemOption {
    id: string,
    title: string,
    icon: string,
    href: string
}
export interface MenuButtonItemOption {
    id: string,
    title: string,
    icon: string,
    onClick: Function
}
export enum menuItemProtype {
    post = 'post'
}
export interface MenuItemProOption {
    id: string,
    type: MenuItemProType,
    title: string,
    data?: any,
    slug: string
}
export type MenuItemOption = MenuLinkItemOption | MenuButtonItemOption | MenuItemProOption