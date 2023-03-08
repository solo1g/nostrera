import { Box, Flex } from "@chakra-ui/react";
import MainPanel from "../components/MainPanel/MainPanel";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../components/Sidebar/SidebarRoutes";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

const Feed = () => {
  return (
    <Flex>
      <Sidebar routes={routes}></Sidebar>
      {/* <Box width="100px" height="100px" bg="red.500"></Box> */}
      <MainPanel></MainPanel>
    </Flex>
  );
};

export default Feed;
