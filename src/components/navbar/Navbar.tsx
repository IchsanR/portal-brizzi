import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavMenu />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;