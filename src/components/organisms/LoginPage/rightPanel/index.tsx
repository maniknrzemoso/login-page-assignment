import React from "react";
import { MuiTypography } from "../../../atoms/Typography";
import { FormComponent } from "../../../molecules/Form";
import { Footer } from "../../../molecules/Footer";
import { SocialMediaComponent } from "../../../molecules/SocialMedia";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
export const RightPanel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "flex-start",
        padding: "0px,32px",
        gap: "32px",
        width: "512px",
        height: "608px",
      }}
    >
      <MuiTypography
        variant="h4"
        sx={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "54px",
          color: "#343446",
        }}
        content="Login to Minet"
      />
      <FormComponent />
      <Divider textAlign="center">Or</Divider>
      <SocialMediaComponent />
      <Footer />
    </Box>
  );
};
