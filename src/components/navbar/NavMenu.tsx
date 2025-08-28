import type { NavMenuItem } from "@/types/general";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";


const navigationMenuItems: NavMenuItem[] = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "/profile" },
];

const NavMenu = () => {
  return (
    <>
      {navigationMenuItems.map((menu, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink>
            <a href={menu.href}>{menu.title}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );
};

export default NavMenu;