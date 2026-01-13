"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "../ui/Logo";
import Cart from "./Cart";
import NavAuth from "./NavAuth";
import NavItems from "./NavItems";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button>
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[75%] border-0 p-0 sm:w-[50%] md:w-[40%]"
          >
            {/* Sidebar header logo */}
            <SheetHeader className="px-5 py-3">
              <SheetTitle className="w-fit">
                <Logo />
              </SheetTitle>

              {/* fallback hidden description for accessibility */}
              <SheetDescription className="sr-only">
                Sheet content
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col items-start gap-4 px-5 py-3">
              {/* Navbar items */}
              <NavItems handleLinkClick={handleLinkClick} />
            </div>
          </SheetContent>
        </Sheet>

        {/* logo */}
        <Logo />

        <div className="flex items-center gap-5">
          {/* shopping bag */}
          <Cart />

          {/* auth button */}
          <NavAuth />
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
