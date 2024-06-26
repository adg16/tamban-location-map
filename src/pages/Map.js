import * as React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "leaflet/dist/leaflet.css";
import { MarkerLayer, Marker } from "react-leaflet-marker";
import MonthSlider from "../components/MonthSlider";
import MonthDropdown from "../components/MonthDropdown";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMapContext } from "#contexts/MapContext";
import PulsatingIcon from "#components/PulsatingIcon";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

export default function Map() {
  const navigate = useNavigate();
  const { state } = useMapContext();
  const mapRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const mapWidth = isSmallScreen ? "92dvw" : "96dvw";

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(state.location[0], 10);
    }
  }, [state.location]);

  return (
    <React.Fragment>
      <CssBaseline>
        <IconButton
          onClick={() => goToHome()}
          aria-label="Home"
          sx={{
            color: "#fff",
            borderColor: "primary.main",
            backgroundColor: "primary.main",
            position: "fixed",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
            margin: "25px 8px 8px 8px",
            "&:hover": {
              backgroundColor: "primary.mainDark",
              borderColor: "primary.mainDark",
            },
          }}
        >
          <HomeIcon sx={{ color: "#fff", fontSize: "30px" }} />
        </IconButton>
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  paddingTop: { xs: "25px", md: "15px" },
                  paddingBottom: { xs: "10px", md: "0px" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "25px", md: "30px" },
                    color: "primary.mainDark",
                    marginLeft: { xs: "30px", md: "0px" },
                  }}
                >
                  Tamban Location Map
                </Typography>
              </Box>
            </Grid>
            {isSmallScreen && (
              <Grid item xs={12}>
                <MonthDropdown />
              </Grid>
            )}
            {!isSmallScreen && (
              <Grid item xs={12}>
                <Box>
                  <MonthSlider />
                </Box>
              </Grid>
            )}
            <Grid item xs={10}>
              <Box>
                <MapContainer
                  ref={mapRef}
                  center={state.location[0]}
                  zoom={10}
                  scrollWheelZoom={false}
                  style={{ height: "75dvh", width: mapWidth }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <MarkerLayer>
                    {state.location.map((loc, index) => (
                      <Marker key={index} position={loc}>
                        <PulsatingIcon
                          iconSize={40}
                          fillColor="red"
                          color="red"
                          heartbeat={1}
                        />
                      </Marker>
                    ))}
                  </MarkerLayer>
                </MapContainer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
}
