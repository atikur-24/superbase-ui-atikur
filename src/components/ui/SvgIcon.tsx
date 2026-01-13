import { cn } from "@/lib/utils";
import Image from "next/image";

type SvgIconProps = Omit<
  React.ComponentPropsWithoutRef<typeof Image>,
  "alt"
> & {
  size?: number;
  src: string;
  alt?: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  size = 24,
  src,
  alt = "Icon",
  className,
  ...rest
}) => (
  <Image
    src={`/svgs/${src}`}
    alt={alt}
    width={size}
    height={size}
    className={cn(className)}
    priority={rest.priority ?? false}
    {...rest}
  />
);

export default SvgIcon;
