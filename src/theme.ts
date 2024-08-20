export const theme = {
  colors: {
    primary: "#4A3AFF",
    secondary: "#6F6FFF",
    tertiary: "#D9D9D9",
    success: "#4ADE80",
    stroke: "#E1E3E6",
    grey: "#F8F8F8",
    placeholder: "#757D8A",
    black: "#000000",
    white: "#FFFFFF",
  },
  spacings: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.5rem",
    6: "2rem",
    7: "3rem",
    8: "4rem",
  },
  fontSizes: {
    small: "0.875rem",
    base: "1rem",
    medium: "1.125rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
  },
} as const;

export type Theme = typeof theme;
