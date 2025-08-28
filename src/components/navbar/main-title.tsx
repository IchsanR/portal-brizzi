import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
export function MainTitle() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="w-full justify-start text-black text-lg text-center font-semibold bg-transparent" >
          Portal BRIZZI
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
