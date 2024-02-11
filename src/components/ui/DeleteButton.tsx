import { MdDelete } from "react-icons/md";

const DeleteAndUpdate = ({ ...Delete }) => {
  return (
    <div>
      <button {...Delete} className="text-3xl text-red-500">
        <MdDelete />
      </button>
    </div>
  );
};

export default DeleteAndUpdate;
