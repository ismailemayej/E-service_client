import AddButton from "@/components/AddButton";
import RecentEvent from "@/components/AllService/RecentEvent";

const ControlRecentEvent = () => {
  return (
    // <div className="grid lg:grid-cols-2 grid-cols-1">
    <div className="">
      <RecentEvent />
      <AddButton link="add-recentevent">Add RecentEvent</AddButton>
    </div>
    // <div className="ml-[107px] text-left">
    //   <Heading title="Recent Events" subTitle="" />
    // </div>
    // </div>
  );
};

export default ControlRecentEvent;
