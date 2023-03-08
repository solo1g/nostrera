import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";

import "@fontsource/pacifico/400.css";
import { Separator } from "../Separator/Separator";

interface SidebarProps {
  routes: any;
}

function Sidebar(props: SidebarProps) {
  const { routes } = props;

  const logo = useBreakpointValue({
    base: "N",
    xl: "Nostrera",
  });

  return (
    <Box
      display={{ base: "none", lg: "block" }}
      position="sticky"
      boxShadow={"variant_2"}
      borderRightRadius="2xl"
      bg="white"
      top="0"
      h="calc(100vh)"
      width={{ xl: "210px", lg: "80px" }}
    >
      <Flex alignItems={"center"} justifyContent={"center"} py="24px">
        <Text fontSize="2rem" fontFamily="Pacifico">
          {logo}
        </Text>
      </Flex>
      <Separator></Separator>
      <SidebarContent routes={routes} />
    </Box>
  );
}

export default Sidebar;
