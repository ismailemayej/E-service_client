import { ReactNode } from "react";
import { TbSelect } from "react-icons/tb";

type TChildren = {
  children: ReactNode;
};
const Item = ({ children }: TChildren) => {
  return (
    <span className="flex items-center mb-4 gap-2">
      <TbSelect className="bg-white" /> {children}
    </span>
  );
};

export default Item;
