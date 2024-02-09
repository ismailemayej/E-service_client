import { cn } from "@/lib/utils";
import { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
  className: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div
      className={cn(
        "h-full lg:px-[80px] px-4 w-full max-w-[1440px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
