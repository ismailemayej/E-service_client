import Services from "@/components/AllService/Services";
import AddButton from "../../components/AddButton";
import Heading from "@/components/Heading";
import { motion } from "framer-motion";
import useScrollHook from "@/components/Hook/ScrollHook";

const ControlOurServices = () => {
  const { style, componentRef } = useScrollHook();
  return (
    <motion.div style={style} ref={componentRef}>
      <Heading
        title="Our Services"
        subTitle="Ut posuere felis arcu tellus tempus in in ultricies."
      />
      <Services />
      <AddButton link="add-service">Add Service</AddButton>
    </motion.div>
  );
};

export default ControlOurServices;
