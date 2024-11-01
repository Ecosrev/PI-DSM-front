// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#94b12e",
//       main: "#9cc444",
//       dark: "#263117",
//       contrastText: "#dee5db",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });
// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9cc444", // Define a cor principal
      contrastText: "#263117", // Define a cor do texto sobre a cor principal
    },
    secondary: {
      main: "#FF5722", // Define a cor secundária
    },
    background: {
      default: "#f0f2f5", // Cor de fundo padrão
      paper: "#ffffff", // Cor de fundo para elementos como cards
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Define a fonte padrão
  },
});

export default theme;
