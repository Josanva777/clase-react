import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PanelControl from "./PanelControl";
import ListadoClientes from "./ListadoClientes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PanelControl />
    <ListadoClientes />
  </StrictMode>
);