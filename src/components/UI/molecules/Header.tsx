import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logoSvg from "../../../../public/images/logo.svg";

const Header = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      alignItems="center"
      p={2}
      sx={{ backgroundColor: "white", height: "96px" }}
    >
      <Image src={logoSvg} alt="EcosRev Logo" width={200} height={112} />
      <Box display="flex" ml={2}>
        <Button
          onClick={() => router.push("/home")}
          color="primary"
          sx={{ mx: 1 }}
        >
          Início
        </Button>
        <Button
          onClick={() => router.push("/perfil")}
          color="primary"
          sx={{ mx: 1 }}
        >
          Ver meu perfil
        </Button>
        <Button
          onClick={() => router.push("/beneficios")}
          color="primary"
          sx={{ mx: 1 }}
        >
          Beneficios
        </Button>
      </Box>
      <Box display="flex" justifyContent="flex-end" flexGrow={1}>
        <Button
          onClick={() => router.push("/")}
          variant="contained"
          color="primary"
        >
          Sair
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
