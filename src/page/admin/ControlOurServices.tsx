import Services from "@/components/AllService/Services";
import AddButton from "../../components/AddButton";
import Heading from "@/components/Heading";

const ControlOurServices = () => {
  return (
    <div>
      <Heading
        title="Our Services"
        subTitle="Ut posuere felis arcu tellus tempus in in ultricies."
      />
      <Services />
      <AddButton link="add-service">Add Service</AddButton>
    </div>
  );
};

export default ControlOurServices;
