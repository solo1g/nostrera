import { Flex } from "@chakra-ui/react";
import MainPanel from "../components/MainPanel/MainPanel";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../components/Sidebar/SidebarRoutes";

const Feed = () => {
  return (
    <Flex>
      <Sidebar routes={routes}></Sidebar>
      <MainPanel></MainPanel>
    </Flex>
  );
};

export default Feed;
