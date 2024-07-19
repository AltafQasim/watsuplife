const HorizontalTwoAdv = ({ ads }) => {
  return (
    <div className="sm:pb-10 py-5 px-2 grid justify-items-center gap-y-6 md:grid-cols-2 gap-x-[30px]">
      {ads?.map((item) => (
        <div className="skeleton w-full h-72 text-white text-center flex items-center justify-center">
          <img
            src={item?.document?.file_path}
            className="w-full h-full object-cover rounded-lg"
            alt="ads"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalTwoAdv;
