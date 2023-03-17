export {};
// import {
//   Box,
//   Flex,
//   HStack,
//   Slide,
//   VStack,
//   Text,
//   Icon,
//   Spacer,
//   MenuButton,
//   IconButton,
//   Button,
//   useDisclosure,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   Input,
//   DrawerBody,
//   DrawerFooter,
//   Drawer,
// } from "@chakra-ui/react";
// import { useEffect, useRef, useState } from "react";
// import { Separator, SeparatorVariant } from "../../Separator/Separator";
// import { MenuBarProps, MenuItemProps } from "../menuItems";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Sidebar from "../Sidebar/Sidebar";

// function Logo() {
//   return (
//     <Text fontSize={{ base: "1.5rem", sm: "2rem" }} fontFamily="Pacifico">
//       Nostrera
//     </Text>
//   );
// }

// function TopBar(props: MenuBarProps) {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = useRef(null);

//   const handleScroll = () => {
//     const currentScrollPos = window.scrollY;

//     if (currentScrollPos > prevScrollPos) {
//       setVisible(false);
//     } else {
//       setVisible(true);
//     }

//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   });

//   return (
//     <Slide in={visible} direction="top">
//       <Flex
//         boxShadow="variant_2"
//         bg="white"
//         height={{ base: "10", sm: "14" }}
//         position="sticky"
//         alignItems={"center"}
//         top={visible ? "0" : ""}
//         width="100vw"
//       >
//         <Button
//           as={IconButton}
//           aria-label="Options"
//           ref={btnRef}
//           bg="transparent"
//           icon={<GiHamburgerMenu />}
//           onClick={onOpen}
//         />
//         <Drawer
//           isOpen={isOpen}
//           placement="left"
//           onClose={onClose}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent maxWidth="40vw" shadow="" bg="">
//             <Sidebar {...props}></Sidebar>
//           </DrawerContent>
//         </Drawer>
//         <Flex
//           position="relative"
//           height="100%"
//           alignItems={"center"}
//           justifyContent={"center"}
//           width="100%"
//         >
//           <Logo />
//         </Flex>
//       </Flex>
//     </Slide>
//   );
// }
// export default TopBar;
