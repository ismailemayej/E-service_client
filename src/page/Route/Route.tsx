import { Navigate, createBrowserRouter } from "react-router-dom";
import Contact from "../Header/Navbar/Contact";
import Main from "@/LayOut/Main/Main";
import Home from "../Home/Home";
import AdminHome from "../../LayOut/AdminLayOut/AdminHome";
import Deshboard from "../admin/Deshboard";
import About from "../Header/Navbar/About";
import AddServices from "../admin/add/AddServices";
import ControlOurServices from "../admin/ControlOurServices";
import AddEventItem from "../admin/add/AddEventItem";
import AddRecentEvent from "../admin/add/AddRecentevent";
import ControlEventItems from "../admin/ControlEventItems";
import ControlRecentEvent from "../admin/ControlRecentEvent";
import AddBlogAndNews from "../admin/add/AddBlogAndNews";
import ControlBlogAndNews from "../admin/ControlBlogAndNews";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
    children: [
      { index: true, element: <Navigate to="deshboard" /> },
      { path: "deshboard", element: <Deshboard /> },
      { path: "ourservices", element: <ControlOurServices /> },
      { path: "eventitem", element: <ControlEventItems /> },
      { path: "recentevent", element: <ControlRecentEvent /> },
      { path: "ourservices/add-service", element: <AddServices /> },
      { path: "eventitem/add-eventitem", element: <AddEventItem /> },
      { path: "recentevent/add-recentevent", element: <AddRecentEvent /> },
      {
        path: "blogandnews",
        element: <ControlBlogAndNews />,
      },
      {
        path: "blogandnews/add-blogandnews",
        element: <AddBlogAndNews />,
      },
    ],
  },
]);

export default route;
