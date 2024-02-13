import Heading from "@/components/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { reviews } from "@/components/ui/ReviewDatas";

// next and prev button funtion
const PrevArrow = (props) => {
  const { style, className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "100%",

        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
};
const NextArrow = (props) => {
  const { style, className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "100%",

        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
};

const ClientSays = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      {/* this is heading*/}
      <div className="flex justify-between">
        <Heading subTitle="" title="What Our Client Said about us" />{" "}
      </div>
      <Slider {...settings}>
        {reviews.map((r) => (
          <div className="slider-container hover:bg-[#3461FF] hover:text-white text-black pt-10 rounded-xl bg-white h-[312px] w-full ml-5">
            <div className="flex">
              <img
                className="rounded-full h-[84px] w-[85px]"
                src={r.profileImage}
                alt=""
              />
              <span className="ml-5">
                <h3 className="text-[28px] font-medium">{r.name}</h3>
                <p className="text-[20px]">{r.position}</p>
              </span>{" "}
            </div>
            <p className="mt-5 px-10">{r.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSays;
