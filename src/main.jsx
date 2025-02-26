import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Aside from "./Aside";
import Header from "./Header";
import "./index.css";
import Section from "./Section";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="contenido">
    <Aside />
    <main>
    <Header />
    <article>
      <Section />
      <Section />
    </article>
    </main>
    </div>
  </StrictMode>
);
