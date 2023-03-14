import { Box, VStack } from "@chakra-ui/react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

interface SidebarContentProps {
  routes: any;
}

const SidebarContent = ({ routes }: SidebarContentProps) => {
  // to check for active links and opened collapses
  let location = useLocation();
  // verifies if routeName is the one active (in browser input)
  const isActiveRoute = (routeName: string) => location.pathname === routeName;

  const sidebarItemList = (routes: any) => {
    return routes.map((props: any, key: any) => {
      return (
        <Fragment key={key}>
          <SidebarItem
            icon={props.icon}
            name={props.name}
            linkTo={props.path}
            isActive={isActiveRoute(props.path)}
          ></SidebarItem>
        </Fragment>
      );
    });
  };

  return (
    <Box pl={{ base: "0", lg: "calc(16%)", xl: "12px" }} pt="24px">
      <VStack>{sidebarItemList(routes)}</VStack>
    </Box>
  );
};

export default SidebarContent;
