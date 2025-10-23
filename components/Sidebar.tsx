import { MenuIcon } from "lucide-react";
import NewDocBtn from "./NewDocBtn";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocBtn />
    </>
  );

  return (
    <div className="relative p-2 md:p-5 lg:min-w-[15vw] text-center">
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={40} className="lg:hidden" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="underline">Menu</SheetTitle>

            <div className="flex flex-col p-2 md:p-5 my-10">{menuOptions}</div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* sidebar on smaller device */}
      <div className="hidden lg:block my-10">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
