import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

import { MantineProvider } from "@mantine/core";
import { customTheme } from "./assets/customTheme.ts";
import MainPage from "./components/pages/MainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={customTheme}>
      <MainPage />
    </MantineProvider>
  </StrictMode>
);
