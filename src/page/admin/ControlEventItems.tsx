const ControlEventItems = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Event Item</h1>
      <div className="flex flex-col items-center">
        <img src="image1.jpg" alt="Image 1" className="w-1/2" />
        <img src="image2.jpg" alt="Image 2" className="w-1/2" />
        <p className="text-center">566</p>
      </div>
    </div>

    // <div classNameName="grid grid-cols-12 gap-5">
    //   <div classNameName="col-span-8">
    //     <div classNameName="col-span-4">
    //       <div classNameName="col-span-4 bg-green-500 h-[270px]"></div>
    //       <div classNameName="col-span-4 bg-red-200 h-[280px]"></div>
    //     </div>
    //   </div>

    //   <div classNameName="col-span-4 bg-red-400 h-[566px]"></div>
    // </div>
  );
};

export default ControlEventItems;
