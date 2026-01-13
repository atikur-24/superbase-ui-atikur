import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  section?: boolean;
  my?: boolean;
  py?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  section = false,
  my,
  py,
  ...props
}) => {
  const Element = section ? "section" : "div";

  return (
    <Element
      className={cn(
        "c-container",
        className,
        my && `section-my`,
        py && `section-py`,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Container;
