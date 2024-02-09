import Container from "@/components/Container";
import Navbar from "@/page/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Main;
