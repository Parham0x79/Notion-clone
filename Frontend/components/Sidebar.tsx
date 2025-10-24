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
    <div
      className="relative p-2 md:p-4 lg:min-w-[20vw] xl:min-w-[15vw]
        text-center shadow-xl"
    >
      {/* sidebar on smaller device */}

      <Sheet>
        <SheetTrigger>
          {/* menu icon's hidden on bigger screen size */}
          <MenuIcon size={30} className="lg:hidden" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="border-b p-2 italic font-nunito text-xl">
              Menu
            </SheetTitle>

            {/* sidebar contents */}
            <div className="flex flex-col p-2 md:p-5 my-5">{menuOptions}</div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* sidebar on bigger device */}
      <div className="hidden lg:flex flex-col gap-10">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;

