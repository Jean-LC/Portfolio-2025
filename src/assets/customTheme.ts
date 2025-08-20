import { colorsTuple, createTheme } from "@mantine/core";

export const customTheme = createTheme({
  colors: {
    primary: colorsTuple("#6653A2"),
    background: colorsTuple("#191528"),
    textA: colorsTuple("#E7E4F1"),
    textB: colorsTuple("#B7AED6"),
  },
  components: {
    Title: {
      defaultProps: {
        c: "textB",
        ff: "Chango",
        fz: "clamp(1.8rem, 4vw, 3rem)",
      },
    },
    Text: {
      defaultProps: {
        c: "textB",
        ff: "Alegreya Sans",
        fz: "clamp(1.1rem, 2vw, 1.5rem)",
      },
    },
    Pill: {
      defaultProps: {
        bg: "rgba(102, 83, 162, 0.5)",
        c: "textB",
      },
    },
    Tooltip: {
      defaultProps: {
        color: "primary",
        position: "bottom",
        transitionProps: { transition: "fade-down", duration: 200 },
      },
    },
  },
});
