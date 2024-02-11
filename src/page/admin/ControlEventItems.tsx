import AddButton from "@/components/AddButton";
import EventItem from "@/components/AllService/EventItem";
import Heading from "@/components/Heading";

const ControlEventItems = () => {
  return (
    <div>
      <Heading title="Event items" subTitle="" />
      <EventItem />
      <AddButton link="add-eventitem">Add EventItem</AddButton>
    </div>
  );
};

export default ControlEventItems;
