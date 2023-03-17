import { Box, Text, useBreakpointValue, useDimensions } from "@chakra-ui/react";
import React from "react";

function Logo() {
  const ref = React.useRef(null);
  const dims = useDimensions(ref);

  if (dims) {
    const collapsed = dims.borderBox.width < 100;
    return (
      <Text fontSize="2rem" fontFamily="Pacifico">
        {collapsed ? "N" : "Nostrera"}
      </Text>
    );
  }
  return <Box width="100%" ref={ref}></Box>;
}

export default Logo;
