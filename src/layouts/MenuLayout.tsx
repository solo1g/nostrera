import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import menuItems from "../components/Menu/menuItems";
import Sidebar from "../components/Menu/Sidebar/Sidebar";
import TopBar from "../components/Menu/TopBar/TopBar";

function MenuLayout(props: PropsWithChildren) {
  const menuProps = {
    logoText: "Nostrera",
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
      <Sidebar {...menuProps}></Sidebar>

      {props.children}
    </Flex>
  );
}

export default MenuLayout;
