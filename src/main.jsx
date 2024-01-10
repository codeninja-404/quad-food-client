import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Router/Routes";
import { RouterProvider } from "react-router-dom";
import ItemProvider from "./Api/ItemProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemProvider>
      <RouterProvider router={router} />
    </ItemProvider>
  </React.StrictMode>
);
