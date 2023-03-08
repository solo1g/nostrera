import { Box } from "@chakra-ui/react";

interface MustNotBeRenderedProps {
  message?: string;
}

export function MustNotBeRendered({ message }: MustNotBeRenderedProps = {}) {
  console.error("This component should not be rendered. " + (message ?? ""));
  return <Box height="100%" width="100%" color="red" />;
}
