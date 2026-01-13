import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/images/logo.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("h-auto max-w-25 select-none lg:max-w-full", className)}
    >
      <Image src={logoImg} alt="Super Base" priority />
    </Link>
  );
};

export default Logo;
