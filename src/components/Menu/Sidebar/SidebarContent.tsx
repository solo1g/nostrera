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

  return <VStack pl="2">{sidebarItemList(routes)}</VStack>;
};

export default SidebarContent;
