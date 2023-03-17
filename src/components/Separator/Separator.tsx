import React from "react";
import { Box, Flex } from "@chakra-ui/react";

export enum SeparatorVariant {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}
export interface SeparatorProps {
  variant: SeparatorVariant;
  spacing: number;
}

export function Separator(props: SeparatorProps) {
  const { variant, spacing } = props;

  if (variant === SeparatorVariant.HORIZONTAL) {
    return (
      <Box
        my={spacing}
        h="1px"
        w="100%"
        bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
      ></Box>
    );
  }

  return (
    <Box
      mx={spacing}
      h="100%"
      w="1px"
      bg="linear-gradient(0deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
    ></Box>
  );
}

Separator.defaultProps = {
  variant: SeparatorVariant.HORIZONTAL,
  spacing: 4,
};
