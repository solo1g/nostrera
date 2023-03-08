import { NavLink } from "react-router-dom";
import {
  Button,
  Flex,
  Box,
  Icon,
  Text,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";
import { MustNotBeRendered } from "../../utils/MustNotBeRendered";

interface SidebarItemProps {
  isActive: boolean;
  linkTo: string;
  icon: any;
  name: string;
}

export default function SidebarItem(props: SidebarItemProps): JSX.Element {
  const { isActive, linkTo, icon, name } = props;

  const col = "#1363DF";
  const trans = col + "11";

  function SideBarItemXl() {
    return (
      <NavLink style={{ width: "100%" }} to={linkTo}>
        <Button
          display="flex"
          justifyContent="flex-start"
          width="100%"
          bg={isActive ? trans : "transparent"}
          borderLeftRadius="2xl"
          borderRightRadius="0"
          padding="0"
          height="calc(1.5rem + 32px)"
          boxShadow={
            isActive
              ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              : "none"
          }
        >
          <Flex
            ml="10px"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"12px"}
            color={isActive ? col : "gray.500"}
            bg="white"
            padding="8px"
            boxShadow="variant_2"
          >
            <Icon as={icon} boxSize="1.5rem"></Icon>
          </Flex>
          <Text
            display={{ lg: "none", xl: "block" }}
            fontSize="0.8rem"
            ml="8px"
            fontWeight={"medium"}
            color={isActive ? col : "gray.600"}
          >
            {name}
          </Text>
          <Spacer></Spacer>
          {isActive ? (
            <Box height="1.5rem" width="3px" bg={col} borderRadius="lg"></Box>
          ) : null}
        </Button>
      </NavLink>
    );
  }

  function SideBarItemL() {
    return (
      <NavLink to={linkTo}>
        <Button
          display="flex"
          justifyContent="center"
          bg={isActive ? trans : "transparent"}
          borderRadius="2xl"
          boxSize={"1.5rem"}
          padding="0"
          color={isActive ? col : "gray.500"}
          width="calc(1.5rem + 32px)"
          height="calc(1.5rem + 32px)"
          boxShadow={isActive ? "inner" : "none"}
        >
          {/* <Flex
        ml="8px"
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'12px'}
        color={isActive ? col : 'gray.500'}
        bg="white"
        padding="8px"
        boxShadow="variant_2"
        > */}
          <Icon as={icon} boxSize="1.5rem"></Icon>
          {/* </Flex> */}
        </Button>
      </NavLink>
    );
  }

  //todo: there's got to be better way to do this
  const child = useBreakpointValue({
    md: SideBarItemL,
    xl: SideBarItemXl,
  });

  return child ? child() : MustNotBeRendered();
}
