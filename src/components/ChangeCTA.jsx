"use client";
const ChangeCTA = ({ bg_color, active, setcurrentWatchColor, currentWatchColor }) => {
  // if (currentWatchColor === currentWatchColor) {
  //   active = "h-[26px] w-[26px] border-[2px] m-[2.5px] drop-shadow-md";
  // }

  return (
    <div
      className={`h-[24px] w-[24px] rounded-full border-[1px] border-white ${bg_color} m-[3px] cursor-pointer hover:h-[26px] hover:w-[26px] hover:border-[2px] hover:m-[2.5px] hover:drop-shadow-md  ${active}`}
      onClick={() => {
        setcurrentWatchColor(currentWatchColor);
      }}></div>
  );
};

export default ChangeCTA;
