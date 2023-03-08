import { Flex } from "@chakra-ui/react";
import MainPanel from "../components/MainPanel/MainPanel";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../components/Sidebar/SidebarRoutes";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

const Feed = () => {
  return (
    <Flex>
      <Sidebar routes={routes}></Sidebar>
      <MainPanel></MainPanel>
    </Flex>
  );
};

export default Feed;
