import { createRoot } from "react-dom/client";
import Feed from "./layouts/Feed";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const routes = [
  { path: "/", element: <Feed /> },
  { path: "/dummy", element: <Feed /> },
  { path: "/dummy", element: <Feed /> },
  { path: "/dummy", element: <Feed /> },
  { path: "/dummy", element: <Feed /> },
];

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById("root")!);
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
