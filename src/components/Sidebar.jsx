import SidebarIcon from "./SidebarIcon";
import { BsRocket } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="bg-blue-300 h-screen w-20 m-0 flex flex-col shadow-lg pt-4">
      <SidebarIcon icon={<BsRocket size="30" />} text={"titration"} />
      <SidebarIcon icon={<BsSliders size="30" />} text={"monitoring"} />
      <SidebarIcon icon={<BsExclamationCircle size="30" />} text={"caution"} />
    </div>
  );
}

export default Sidebar;
