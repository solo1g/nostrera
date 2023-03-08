import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/Feed";
import Settings from "./pages/Settings";
import theme from "./themes/theme";

//todo: sync route state with sidebar routes
const routes = [
  { path: "/", element: <Feed /> },
  { path: "/global", element: <Feed /> },
  { path: "/settings", element: <Settings /> },
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
