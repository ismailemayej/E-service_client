import Container from "@/components/Container";
import Footer from "@/page/Footer/Footer";
import Navbar from "@/page/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Container className="">
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Main;
