import {
  Drawer,
  DrawerCloseButton,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Logo from "../components/Logo/Logo";
import menuItems from "../components/Menu/menuItems";
import Sidebar, { SideBarVariant } from "../components/Menu/Sidebar/Sidebar";
import TopBar from "../components/Menu/TopBar/TopBar";

function WithMenuLayout(props: PropsWithChildren) {
  const menuProps = {
    logo: Logo(),
    routes: menuItems,
  };

  const mobile = useBreakpointValue({ base: true, lg: false });

  if (mobile) {
    return (
      <>
        <TopBar {...menuProps}></TopBar>
        {props.children}
      </>
    );
  }

  return (
    <Flex>
      <Sidebar variant={SideBarVariant.FIXED} {...menuProps}></Sidebar>
      {props.children}
    </Flex>
  );
}

export default WithMenuLayout;
