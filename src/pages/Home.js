import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export default function Home() {
  const navigate = useNavigate();
  const goToMap = () => {
    navigate("map");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} lg={8}>
            <Box sx={{ textAlign: "left", pt: 5, pb: { xs: 0, sm: 0, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "40px", md: "50px" },
                  color: "primary.greyDarker",
                }}
              >
                Hello,
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "40px", md: "50px" },
                  color: "primary.greyDarker",
                }}
              >
                welcome to Daraw!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
            <Box sx={{ position: "relative", textAlign: "center" }}>
              <Box
                component="img"
                sx={{
                  position: { xs: "", sm: "", md: "absolute" },
                  top: { xs: 0, sm: 0, md: 150, lg: 70 },
                  right: { xs: 0, sm: 0, md: 0 },
                  borderRadius: { xs: "300px", md: "400px", lg: "450px" },
                  height: { xs: "300px", md: "400px", lg: "450px" },
                  width: { xs: "300px", md: "400px", lg: "450px" },
                }}
                alt="tamban-bg"
                src="/images/tamban_1.jpg"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7} lg={8}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                paddingBottom: 2,
                zIndex: 1,
              }}
            >
              <Typography variant="body" sx={{ zIndex: 1 }}>
                This is a quantitative research conducted by a group of students
                at <b>Bulan National High School</b>. The goal of this research
                is to provide an approximate location of the Tamban based on the
                weather parameters experienced by the fishermen.
              </Typography>
            </Box>
            <Box
              sx={{ textAlign: { xs: "center", md: "left" }, paddingBottom: 2 }}
            >
              <Typography variant="body">
                This website provides an interpretation of the data collected by
                the researchers from fishermen fishing for Tamban. The location
                they have given are approximates only. This website will show
                the approximate location of Tamban for every month of the year.
              </Typography>
            </Box>
            <Box
              sx={{ textAlign: { xs: "center", md: "left" }, paddingBottom: 4 }}
            >
              <Typography variant="body">
                By combining the wisdom of fishermen with the power of data
                visualization, we aim to shed light on the ever-shifting world
                of Tamban. We invite you to embark on this journey of discovery
                and gain a deeper appreciation for these remarkable fish.
              </Typography>
            </Box>

            <Box
              sx={{ textAlign: { xs: "center", md: "left" }, paddingBottom: 4 }}
            >
              <Typography sx={{ fontSize: "11px" }}>
                Image credits:
                <Link
                  underline="none"
                  target="_blank"
                  rel="noreferrer"
                  href="https://businessmirror.com.ph/2018/04/16/fishing-moratorium-is-phl-doing-it-right/"
                >
                  BusinessMirror
                </Link>
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIosIcon />}
                sx={{
                  mb: "40px",
                  minWidth: 200,
                  fontSize: "18px",
                  color: "#fff",
                  borderColor: "primary.main",
                  backgroundColor: "primary.main",
                  borderRadius: "30px",
                  height: "60px",
                  width: "250px",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
                  "&:hover": {
                    backgroundColor: "primary.mainDark",
                    borderColor: "primary.mainDark",
                  },
                }}
                onClick={goToMap}
              >
                Proceed
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          backgroundColor: "primary.mainDark",
          mt: "20px",
          pt: "30px",
          pb: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 20, color: "primary.greyDarker", mb: 3 }}
              >
                The Researchers
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  borderRadius: "200px",
                  height: "200px",
                  width: "200px",
                  mb: "10px",
                }}
                alt="profile-pic"
                src="/images/profile_1.jpg"
              />
              <Typography
                sx={{ fontStyle: "italic", color: "primary.greyDarker" }}
              >
                Marco G. Porcado
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  borderRadius: "200px",
                  height: "200px",
                  width: "200px",
                  mb: "10px",
                }}
                alt="profile-pic"
                src="/images/profile_1.jpg"
              />
              <Typography
                sx={{ fontStyle: "italic", color: "primary.greyDarker" }}
              >
                Marco G. Porcado
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  borderRadius: "200px",
                  height: "200px",
                  width: "200px",
                  mb: "10px",
                }}
                alt="profile-pic"
                src="/images/profile_1.jpg"
              />
              <Typography
                sx={{ fontStyle: "italic", color: "primary.greyDarker" }}
              >
                Marco G. Porcado
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  borderRadius: "200px",
                  height: "200px",
                  width: "200px",
                  mb: "10px",
                }}
                alt="profile-pic"
                src="/images/profile_1.jpg"
              />
              <Typography
                sx={{ fontStyle: "italic", color: "primary.greyDarker" }}
              >
                Marco G. Porcado
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
