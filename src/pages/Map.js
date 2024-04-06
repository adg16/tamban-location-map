import * as React from "react";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "leaflet/dist/leaflet.css";
import { MarkerLayer, Marker } from "react-leaflet-marker";
import SvgIcon from "@mui/material/SvgIcon";
import MonthSlider from "../components/MonthSlider";
import MonthDropdown from "../components/MonthDropdown";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMapContext } from "#contexts/MapContext";

export default function Map() {
  const { state } = useMapContext();
  const mapRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const mapWidth = isSmallScreen ? "92dvw" : "85dvw";

  // Set the view to the specified coordinates
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
                      <SvgIcon>
                        <svg
                          fill="#E74C3C"
                          height="800px"
                          width="800px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          enable-background="new 0 0 512 512"
                        >
                          <g>
                            <g>
                              <path d="m42.3,160.4c45.8,39.6 105.6,62.7 169.5,65.7 0.5,0.5 1,1 1.5,1.4l54.4,47c3.9,3.3 8.6,5 13.3,5 5.7,0 11.4-2.4 15.5-7.1 7.4-8.5 6.4-21.4-2.1-28.8l-23.6-20.4c46.6-6.9 90-24.6 126.2-51.7l46.1,39.8c9.7,8.5 22.6,4.7 28.8-2.1 7.6-8.3 6.4-21.4-2.1-28.8l-41.2-35.4 41.2-35.5c8.5-7.4 9.5-20.3 2.1-28.8-7.4-8.5-20.3-9.5-28.8-2.1l-46.1,39.7c-36-27-79.2-44.7-125.6-51.6l23-19.8c8.5-7.4 9.5-20.3 2.1-28.8-7.4-8.5-20.3-9.5-28.8-2.1l-54.4,47c-0.3,0.2-0.5,0.5-0.8,0.8-64.2,3-124.2,26.1-170.2,65.8-4.5,3.9-7.1,9.5-7.1,15.5 2.13163e-14,5.8 2.6,11.5 7.1,15.3zm184.3-56.2c50.6,0 98.5,14.3 137.5,40.7-39,26.4-86.9,40.7-137.5,40.7-50.6,0-98.5-14.3-137.5-40.7 39-26.3 86.9-40.7 137.5-40.7z" />
                              <path d="m42.6,395.4l37-22.1c16.5-9.9 37-9.9 53.5,0 29.8,17.8 66.7,17.8 96.5,0l.1-.1c16.5-9.9 37-9.9 53.5,0l.6,.3c29.8,17.8 66.7,17.8 96.5,0l1-.6c16.5-9.9 37-9.9 53.5,0l.5,.3 35.1,18.5c10.1,5.3 22.7,1.5 28.1-8.5 5.4-10 1.6-22.4-8.6-27.7l-34.2-18c-29.7-17.5-66.4-17.4-96,0.3l-1,.6c-16.5,9.9-37,9.9-53.5,0l-.6-.3c-29.8-17.8-66.7-17.8-96.5,0l-.1,.1c-16.5,9.9-37,9.9-53.5,0-29.8-17.8-66.7-17.8-96.5,0l-37,22.1c-9.8,5.9-13,18.5-7,28.2 5.4,8.4 18.8,10.8 28.6,6.9z" />
                              <path d="m490.1,459.3l-34.2-18c-29.7-17.5-66.4-17.4-96,0.3l-1,.6c-16.5,9.9-37,9.9-53.5,0l-.6-.3c-29.8-17.8-66.7-17.8-96.5,0l-.1,.1c-16.5,9.9-37,9.9-53.5,0-29.8-17.8-66.7-17.8-96.5,0l-37,22.1c-9.8,5.9-13,18.5-7,28.2 5.3,8.4 18.7,10.9 28.5,6.9l37-22.1c16.5-9.9 37-9.9 53.5,0 29.8,17.8 66.7,17.8 96.5,0l.1-.1c16.5-9.9 37-9.9 53.5,0l.6,.3c29.8,17.8 66.7,17.8 96.5,0l1-.6c16.5-9.9 37-9.9 53.5,0l.5,.3 35.1,18.5c10.1,5.3 22.7,1.5 28.1-8.5 5.4-9.9 1.6-22.4-8.5-27.7z" />
                            </g>
                          </g>
                        </svg>
                      </SvgIcon>
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
