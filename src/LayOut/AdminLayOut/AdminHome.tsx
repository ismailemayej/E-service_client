import Navbar from "@/page/Header/Navbar/Navbar";
import AdminSidebar from "@/page/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminHome = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <AdminSidebar />
        <div className="col-span-10 p-2 h-[200vh] ml-7">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminHome;
