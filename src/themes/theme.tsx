import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    color: "black",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "400",
  },
});

export default extendTheme({
  components: {
    Text,
  },
  colors: {
    primary: "#1363DF",
    primaryLight: "#1363DF11",
    black: "#232020",
    primaryScheme: {
      50: "#f9f6fd",
      100: "#e5daf8",
      200: "#d3bef4",
      300: "#b795ec",
      400: "#a379e7",
      500: "#8952e0",
      600: "#7434db",
      700: "#6023c0",
      800: "#4f1d9e",
      900: "#3b1676",
    },
  },
  shadows: {
    variant_1: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    variant_2: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    variant_3:
      "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
    light:
      "rgba(136, 165, 191, 0.48) 6px 6px 16px 0px, rgba(255, 255, 255, 0.6) -6px -2px 16px 0px",
    dark: "rgba(136, 165, 191, 0.68) 6px 6px 16px 4px, rgba(255, 255, 255, 0.8) -8px -4px 16px 4px",
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Lato', sans-serif",
      },
    },
  },
});
