import Image from "next/image";

const WatchColorType = ({ image_src, image_alt, watch_color, setcurrentWatchColor }) => {
  return (
    <div
      className="grid place-items-center cursor-pointer"
      onClick={() => {
        setcurrentWatchColor(image_src);
      }}>
      <div className={`w-[131px] h-[70px] rounded-[10px] ${watch_color} opacity-60 row-start-1 col-start-1`}></div>
      <Image src={image_src} alt={image_alt} className="w-[90px] row-start-1 col-start-1 z-10 pb-8"></Image>
    </div>
  );
};

export default WatchColorType;
