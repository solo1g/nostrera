import { createRoot } from "react-dom/client";
import Feed from "./pages/Feed";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes/theme";

//todo: sync route state with sidebar routes
const routes = [
  { path: "/", element: <Feed /> },
  { path: "/global", element: <Feed /> },
  { path: "/settings", element: <Feed /> },
  { path: "/messages", element: <Feed /> },
  { path: "/notifications", element: <Feed /> },
];

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById("root")!);
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
