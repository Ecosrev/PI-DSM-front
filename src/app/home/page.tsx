"use client";

import Layout from "@/components/UI/organisms/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/Theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import backgroundImage2 from "../../../public/images/imagem2.jpg";
import "../../style/MenuUser.css";
import RecyclingIcon from "@mui/icons-material/Recycling";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function Home() {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Carousel />
        <Introduction />
        <Services />
        <Testimonials />
      </Layout>
    </ThemeProvider>
  );
}

function Carousel() {
  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}
      textAlign="center"
    >
      <Container>
        <div className="image-container">
          <Image
            className="backgroundImage2"
            src={backgroundImage2}
            alt="Background Image"
          />
          <h4 className="overlay-text">
            Descarte seus resíduos eletrônicos corretamente e ajude a construir
            um planeta mais limpo!
          </h4>
        </div>
      </Container>
    </Box>
  );
}

function Introduction() {
  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}
      textAlign="center"
    >
      <Container>
        <Typography variant="h2" sx={{ fontSize: "32px" }} gutterBottom>
          Bem-vindo ao EcosRev
        </Typography>
        <Typography variant="body1">
          Uma plataforma inovadora para reciclagem de resíduo eletrônico e troca
          de pontos por recompensas. Junte-se a nós e faça parte da mudança!
        </Typography>
      </Container>
    </Box>
  );
}

function Services() {
  return (
    <Box
      sx={{ backgroundColor: "#e9ecef", padding: "60px 0" }}
      textAlign="center"
    >
      <Container>
        <Typography
          variant="h2"
          sx={{ fontSize: "32px", marginBottom: "40px" }}
        >
          O que oferecemos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <RecyclingIcon sx={{ fontSize: 60, color: "primary.main" }} />
            <Typography variant="h4" sx={{ fontSize: "24px" }}>
              Reciclagem de Eletrônicos
            </Typography>
            <Typography>
              Recicle seus aparelhos eletrônicos de forma segura e responsável.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <MonetizationOnIcon sx={{ fontSize: 60, color: "primary.main" }} />
            <Typography variant="h4" sx={{ fontSize: "24px" }}>
              Acúmulo de Pontos
            </Typography>
            <Typography>
              Ganhe pontos a cada item reciclado e troque por prêmios.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardGiftcardIcon sx={{ fontSize: 60, color: "primary.main" }} />
            <Typography variant="h4" sx={{ fontSize: "24px" }}>
              Recompensas Exclusivas
            </Typography>
            <Typography>
              Troque seus pontos por descontos, produtos, serviços e muito mais.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Testimonials() {
  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}
      textAlign="center"
    >
      <Container>
        <Typography
          variant="h2"
          sx={{ fontSize: "32px", marginBottom: "40px" }}
        >
          Depoimentos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <blockquote>
              <Typography sx={{ fontSize: "20px" }}>
                {" "}
                &quot;O EcosRev facilitou a reciclagem de eletrônicos na minha
                casa. Além de ajudar o meio ambiente, ainda ganho
                recompensas!&quot;
              </Typography>
              <footer>— Maria Silva</footer>
            </blockquote>
          </Grid>
          <Grid item xs={12} md={4}>
            <blockquote>
              <Typography sx={{ fontSize: "20px" }}>
                {" "}
                &quot;Uma excelente iniciativa! Agora meus filhos entendem a
                importância de reciclar e ainda se divertem trocando pontos por
                prêmios.&quot;
              </Typography>
              <footer>— Carlos Santos</footer>
            </blockquote>
          </Grid>
          <Grid item xs={12} md={4}>
            <blockquote>
              <Typography sx={{ fontSize: "20px" }}>
                &quot;Simplesmente adoro! O sistema de pontos é muito
                gratificante e o suporte ao cliente é fantástico.&quot;
              </Typography>
              <footer>— Ana Souza</footer>
            </blockquote>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
