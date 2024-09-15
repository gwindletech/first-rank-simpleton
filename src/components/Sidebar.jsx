import SidebarIcon from "./SidebarIcon";
import { BsRocket } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";

function Sidebar({ setSection }) {
  return (
    <div className="bg-blue-300 h-screen w-20 fixed flex flex-col shadow-lg pt-4 z-10">
      <SidebarIcon
        icon={<BsRocket size="30" />}
        text={"titration"}
        setSection={setSection}
      />
      <SidebarIcon
        icon={<BsSliders size="30" />}
        text={"monitoring"}
        setSection={setSection}
      />
      <SidebarIcon
        icon={<BsExclamationCircle size="30" />}
        text={"considerations"}
        setSection={setSection}
      />
    </div>
  );
}

export default Sidebar;
