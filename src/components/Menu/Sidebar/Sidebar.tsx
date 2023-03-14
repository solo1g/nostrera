import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

import "@fontsource/pacifico/400.css";
import { MenuBarProps, MenuItemProps } from "../menuItems";
import { Separator } from "../../Separator/Separator";
import SidebarContent from "./SidebarContent";

function Sidebar(props: MenuBarProps) {
  const { logoText, routes } = props;

  const logo = useBreakpointValue({
    base: logoText.substring(0, 1),
    xl: logoText,
  });

  return (
    <Box
      position="sticky"
      boxShadow={"variant_2"}
      borderRightRadius="2xl"
      bg="white"
      top="0"
      h="100vh"
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
