import { Box, Slide } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MenuBarProps } from "../menuItems";

function TopBar(props: MenuBarProps) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Slide in={visible} direction="top">
      <Box
        boxShadow="variant_2"
        bg="white"
        height={{ base: "10", sm: "14" }}
        position="sticky"
        top={visible ? "0" : ""}
        width="100vw"
      ></Box>
    </Slide>
  );
}

export default TopBar;
