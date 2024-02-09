type THeading = {
  title: string;
  subTitle: string;
};

const Heading = ({ title, subTitle }: THeading) => {
  return (
    <div className="text-center leading-8 lg:mt-24 mb-14 mt-5">
      <h2 className="mx-auto lg:text-[54px] text-[30px]  font-extrabold lg:mb-3">
        {title}
      </h2>
      <p className="lg:text-lg line-clamp-2 lg:w-[750px] mx-auto">{subTitle}</p>
    </div>
  );
};

export default Heading;
