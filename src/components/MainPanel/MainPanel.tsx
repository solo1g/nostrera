import { Box, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import FeedView from "../Feed/Feed";

export default function MainPanel() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback((mouseDownEvent: any) => {
    mouseDownEvent.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing && sidebarRef.current) {
        const newWidth =
          sidebarRef.current.getBoundingClientRect().right -
          mouseMoveEvent.clientX;
        setSidebarWidth(newWidth);
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <Flex flex="1">
      {/* main feed */}
      <Flex flex="1">
        <FeedView></FeedView>
      </Flex>
      {/* sidebar */}
      <Flex
        ref={sidebarRef}
        minWidth="340px"
        maxWidth="600px"
        position="sticky"
        top="0"
        height="100vh"
        boxShadow={"variant_2"}
        width={sidebarWidth}
      >
        <Box
          width="8px"
          height="100vh"
          borderRadius="2xl"
          onMouseDown={startResizing}
          cursor="col-resize"
          resize="horizontal"
          _hover={{ bg: "#c1c3c5b4" }}
        />
        <Flex flex="1">Thread</Flex>
      </Flex>
    </Flex>
  );
}
