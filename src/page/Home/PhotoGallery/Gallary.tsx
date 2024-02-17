import Heading from "@/components/Heading";
import useScrollHook from "@/components/Hook/ScrollHook";
import PricingLisfIcon from "@/components/ui/PricingLisfIcon";
import { motion } from "framer-motion";

export const Gallary = () => {
  const { style, componentRef } = useScrollHook();
  const img1 =
    "https://img.freepik.com/free-photo/businessman-discussing-marketing-statistics-with-remote-manager-during-online-videocall-meeting-conference-busy-entrepreneur-planning-business-collaboration-startup-office-teleconference-call_482257-40110.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img2 =
    "https://img.freepik.com/premium-photo/workers-formal-clothes-office_146671-8115.jpg";
  const img3 =
    "https://img.freepik.com/free-photo/talented-designers-focused-work_1098-16115.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img4 =
    "https://img.freepik.com/free-photo/medium-shot-people-working-office_23-2149313735.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img5 =
    "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img6 =
    "https://img.freepik.com/premium-photo/full-length-successful-adult-man-30s-formal-wear-glasses-sitting-table-using-laptop-while-working-office-room_171337-39369.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img7 =
    "https://img.freepik.com/free-photo/medium-shot-smiley-people-working-together_23-2149300627.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img8 =
    "https://img.freepik.com/free-photo/people-with-laptops-office_23-2147656717.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img9 =
    "https://img.freepik.com/premium-photo/group-office-worker-working-with-computer-desk-modern-office_49071-3248.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";
  const img10 =
    "https://img.freepik.com/free-photo/smartly-dressed-asian-woman-sitting-desk-office-with-tablet_1098-20206.jpg?size=626&ext=jpg&ga=GA1.1.1176224295.1705248743&semt=ais";

  const names = [
    { name: "this is the photo gallary" },
    { name: "this is the photo gallary" },
    { name: "this is the photo gallary" },
    { name: "this is the photo gallary" },
    { name: "this is the photo gallary" },
    { name: "this is the photo gallary" },
  ];
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="grid mt-[188px] lg:grid-cols-2 grid-cols-1"
    >
      <div className="items-center">
        <span className="mr-20">
          <Heading subTitle="" title="Gallary" />
        </span>
        <p className="mr-[120px] mb-8">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        {names.map((name) => (
          <span className="mb-4">
            <PricingLisfIcon name={name.name} />
          </span>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-3 justify-center items-center">
        <div className="mb-10">
          <div className="mb-2 border-4 border-white rounded-lg h-[192px] w-[110px] ml-[30px]">
            <img className=" rounded-lg  w-[100%] h-[100%]" src={img1} alt="" />
          </div>
          <div className="border-4 border-white rounded-lg flex justify-start  h-[258px] w-[172px] ml-[30px]">
            <img className="rounded-lg  w-[80%] h-[100%]" src={img2} alt="" />
          </div>
        </div>

        {/* ----------------- */}
        <div className="mb-20">
          <div className="mb-2 border-4 border-white rounded-lg h-[212px] w-[140px]">
            <img className=" rounded-lg  w-[100%] h-[100%]" src={img3} alt="" />
          </div>
          <div className="mb-2 border-4 border-white rounded-lg h-[215px] w-[140px]">
            <img className="rounded-lg  w-[100%] h-[100%]" src={img4} alt="" />
          </div>
          <div className="border-4 border-white rounded-lg h-[160px] w-[140px]">
            <img className="rounded-lg  w-[100%] h-[100%]" src={img5} alt="" />
          </div>
        </div>
        {/* ------------- */}
        <div className="mb-20">
          <div className="mb-3 border-4 border-white rounded-lg h-[171px] w-[140px]">
            <img className=" rounded-lg  w-[100%] h-[100%]" src={img6} alt="" />
          </div>
          <div className="mb-3 border-4 border-white rounded-lg  h-[172px] w-[140px]">
            <img className="rounded-lg  w-[100%] h-[100%]" src={img7} alt="" />
          </div>
          <div className="h-[192px] w-[140px]">
            <img
              className="mb-2 rounded-lg  w-[100%] h-[100%]"
              src={img8}
              alt=""
            />
          </div>
        </div>
        {/* ------------ */}
        <div className="mb-20 lg:block hidden">
          <div className="mb-3 border-4 border-white rounded-lg h-[255px] w-[160px]">
            <img className=" rounded-lg  w-[100%] h-[100%]" src={img9} alt="" />
          </div>
          <div className="mb-3 border-4 border-white rounded-lg  h-[165px] w-[128px]">
            <img className="rounded-lg  w-[100%] h-[100%]" src={img10} alt="" />
          </div>
        </div>
        {/* ------------------ */}
      </div>
    </motion.div>
  );
};

export default Gallary;
