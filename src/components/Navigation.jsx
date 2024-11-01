import NavigationLink from "./NavigationLink";

const Navigation = () => {
  return (
    <ul className="flex gap-[26px] items-center">
      <li>
        <NavigationLink linkName="Mac" />
      </li>
      <li>
        <NavigationLink linkName="iPhone" />
      </li>
      <li>
        <NavigationLink linkName="iPad" />
      </li>
      <li className=" py-[2px] bg-white text-[#B6CCDA] rounded-full">
        <NavigationLink linkName="iWatch" />
      </li>
      <li>
        <NavigationLink linkName="Support" />
      </li>
    </ul>
  );
};

export default Navigation;
