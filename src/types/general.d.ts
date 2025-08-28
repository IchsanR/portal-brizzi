export interface NavMenuItem {
  title: string;
  href: string;
  disabled?: boolean;
  descrion?: string;
}

export interface SidebarItem {
  title: string;
  url: string;
  items?: SidebarItem[];
  isActive?: boolean;
}