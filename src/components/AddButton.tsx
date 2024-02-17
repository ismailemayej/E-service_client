import { ReactNode } from "react";
import { Link } from "react-router-dom";
type TAddbutton = {
  link: string;
  children: ReactNode;
};

const AddButton = ({ link, children }: TAddbutton) => {
  return (
    <Link to={link}>
      <div className="bg-blue-500 font-bold text-white w-[50%] py-3 my-4 mx-auto px-4 text-center text-2xl rounded-lg">
        {children}
      </div>
    </Link>
  );
};

export default AddButton;
