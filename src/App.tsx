import { Box, Stack, ThemeProvider } from "@mui/material";
import { Divider } from "@mui/material";
import { MuiTypography } from "./components/atoms/Typography";
import { FormComponent } from "./components/molecules/Form";
import { SocialMediaComponent } from "./components/molecules/SocialMedia";
import { Footer } from "./components/molecules/Footer";
import mainImage from "./assets/mainimage.svg";
import { RightPanel } from "./components/organisms/LoginPage/rightPanel";
import { width } from "@mui/system";
import { theme } from "./components/Themes/index";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          alignItems: "center",
          // gap: "64px",
          // padding: "96px 0px",
          width: "720px",
          height: "768px",
        }}
      >
        <img src={mainImage} alt="failed to load" />
        <Box
          sx={{
            justifyContent: "center",
            width: "720px",
            height: "608px",
            margin: " 80px 104px",
          }}
        >
          <RightPanel />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
