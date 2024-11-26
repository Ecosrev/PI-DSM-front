import { createTheme } from "@mui/material/styles";

const adminTheme = createTheme({
  palette: {
    primary: {
      main: "#45C4B0", // Define a cor principal (azul petróleo)
      contrastText: "#506266", // Define a cor do texto sobre a cor principal (cinza azulado)
    },
    secondary: {
      main: "#FF5722", // Define a cor secundária (lima)
    },
    background: {
      default: "#f0f2f5", // Cor de fundo padrão (azul gelo)
      paper: "#ffffff", // Cor de fundo para elementos como cards (branco)
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Define a fonte padrão
  },
});

export default adminTheme;