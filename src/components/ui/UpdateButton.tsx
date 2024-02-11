import { MdOutlineSystemUpdateAlt } from "react-icons/md";

const UpdateButton = ({ ...props }) => {
  return (
    <div>
      <button {...props} className="text-3xl text-green-700">
        <MdOutlineSystemUpdateAlt />
      </button>
    </div>
  );
};

export default UpdateButton;
