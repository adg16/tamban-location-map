import * as React from "react";
import { useEffect, useRef } from "react";
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

export default function Map() {
  const { state } = useMapContext();
  const mapRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const mapWidth = isSmallScreen ? "92dvw" : "85dvw";

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(state.location, 10);
    }
  }, [state.location]);

  return (
    <React.Fragment>
      <CssBaseline>
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{ textAlign: "center", paddingTop: 2, paddingBottom: 2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "25px", md: "30px" },
                    color: "primary.mainDark",
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
            <Grid item xs={10}>
              <Box>
                <MapContainer
                  ref={mapRef}
                  center={state.location}
                  zoom={10}
                  scrollWheelZoom={false}
                  style={{ height: "80dvh", width: mapWidth }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <MarkerLayer>
                    <Marker position={state.location}>
                      <PulsatingIcon
                        iconSize={40}
                        fillColor="red"
                        color="red"
                        heartbeat={1}
                      />
                    </Marker>
                  </MarkerLayer>
                </MapContainer>
              </Box>
            </Grid>
            {!isSmallScreen && (
              <Grid item xs={2}>
                <Box>
                  <MonthSlider />
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
}
