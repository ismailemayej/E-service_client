import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";

const DeleteAndUpdate = ({ ...props }) => {
  return (
    <div>
      <button className="text-3xl text-green-700 mr-4">
        <MdOutlineSystemUpdateAlt />
      </button>
      <button {...props} className="text-3xl text-red-500">
        <MdDelete />
      </button>
    </div>
  );
};

export default DeleteAndUpdate;
