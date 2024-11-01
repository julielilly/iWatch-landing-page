const ChangeCTA = ({ bg_color, active }) => {
  return <div className={`h-[24px] w-[24px] rounded-full border-[1px] border-white ${bg_color} ${active} m-[3px] cursor-pointer hover:h-[26px] hover:w-[26px] hover:border-[2px] hover:m-[2px] hover:drop-shadow-md`}></div>;
};

export default ChangeCTA;
