"use client";

import { menuConfig } from "@/lib/menuConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  handleLinkClick?: () => void;
}

const NavItems = ({ handleLinkClick }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
        {menuConfig?.map((menu) => {
          const isActive =
            pathname === menu.path ||
            (menu.path !== "/" && pathname.startsWith(menu.path));
          return (
            <li
              key={menu.path}
              className={`text-body cursor-pointer leading-[100%] font-semibold uppercase transition-colors duration-200 ${
                isActive ? "text-heading" : "text-paragraph hover:text-heading"
              }`}
            >
              <Link onClick={handleLinkClick} href={menu.path}>
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItems;
