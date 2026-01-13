import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputClassName?: string;
  labelClassName?: string;
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    { type = "text", label, inputClassName, labelClassName, id, ...props },
    ref,
  ) => {
    return (
      <div className="relative">
        <input
          type={type}
          ref={ref}
          id={id}
          className={cn(
            "peer border-stroke text-heading border-border text-body block h-12 w-full appearance-none rounded-sm border bg-transparent px-4 pt-4 pb-2.5 leading-normal focus:ring-0 focus:outline-none disabled:bg-[rgba(221,221,221,0.20)]",
            inputClassName,
          )}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "text-heading absolute start-1 top-1 origin-left -translate-y-4 scale-75 transform bg-white px-4 text-sm duration-300 peer-placeholder-shown:top-1/3 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-3 disabled:bg-[rgba(221,221,221,0.20)] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
            labelClassName,
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;
