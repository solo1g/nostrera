import { HiHome } from "react-icons/hi";
import { IoMdGlobe, IoMdNotifications } from "react-icons/io";
import { RiSettings3Fill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";

const routes = [
  {
    path: "/",
    name: "My Feed",
    icon: HiHome,
  },
  {
    path: "/global",
    name: "Global Feed",
    icon: IoMdGlobe,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: RiSettings3Fill,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: MdMessage,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: IoMdNotifications,
  },
];

export default routes;
