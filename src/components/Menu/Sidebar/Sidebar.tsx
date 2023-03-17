import { Box, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

import "@fontsource/pacifico/400.css";
import { MenuBarProps, MenuItemProps } from "../menuItems";
import { Separator } from "../../Separator/Separator";
import SidebarContent from "./SidebarContent";
import Logo from "../../Logo/Logo";

export enum SideBarVariant {
  FIXED = "fixed",
  FLOATING = "floating",
}

interface SidebarProps extends MenuBarProps {
  width: number;
  borderRadius: number;
  variant: SideBarVariant;
  marginTopPx?: string;
}

Sidebar.defaultProps = {
  width: { base: 40, lg: 20, xl: 200 },
  borderRadius: { base: "2xl" },
};

function Sidebar(props: SidebarProps) {
  const { routes, width, borderRadius, variant } = props;

  const marginBottomPx = variant === SideBarVariant.FLOATING ? "32px" : "0px";
  const marginTopPx = props.marginTopPx ?? marginBottomPx;

  return (
    <Flex
      //base
      position="sticky"
      top="0"
      boxShadow={"variant_2"}
      boxSizing="border-box"
      bg="white"
      //borders
      borderRightRadius={variant == SideBarVariant.FIXED ? borderRadius : ""}
      borderRadius={variant == SideBarVariant.FLOATING ? borderRadius : ""}
      //martings
      marginLeft={variant == SideBarVariant.FLOATING ? 6 : 0}
      marginBottom={marginBottomPx}
      marginTop={marginTopPx}
      //sizes
      //wierd but you need to give space for the separator
      h={`calc(100vh - ${marginBottomPx} - ${marginTopPx})`}
      width={width}
      direction="column"
      overflow="auto"
    >
      <Flex alignItems={"center"} justifyContent={"center"} pt="8">
        <Logo />
      </Flex>
      <Separator spacing={8} />
      <SidebarContent routes={routes} />
    </Flex>
  );
}

export default Sidebar;
