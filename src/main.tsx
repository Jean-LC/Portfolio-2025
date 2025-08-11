import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PresentationPage from "./components/PresentationPage.tsx";
import { customTheme } from "./customTheme.ts";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={customTheme}>
      <PresentationPage />
    </MantineProvider>
  </StrictMode>
);
