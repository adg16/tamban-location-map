import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#4298b4",
      mainDark: "#347990",
      grey: "#636363",
      greyDark: "#3b3b3b",
      greyDarker: "#343C4B"
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
