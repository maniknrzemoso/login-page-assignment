import React from "react";
import { Box } from "@mui/material";
import { MuiIcon } from "../../atoms/Icon";
import { MuiButton } from "../../atoms/Button";
import { MuiTypography } from "../../atoms/Typography";
export const SocialMediaComponent: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 0,
        gap: "20px",
      }}
    >
      <MuiButton
        variant="outlined"
        sx={{
          width: "157.33px",
          height: "96px",
          radius: "12px",
          padding: "20px 40px 20px 40px",
          backgroundColor: "#FAFCFF",

          gap: "8px",
        }}
      >
        <Box>
          {<MuiIcon iconName="google" />}
          {
            <MuiTypography
              variant="body2"
              sx={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#343446",
              }}
              content="google"
            />
          }
        </Box>
      </MuiButton>
      <MuiButton
        variant="outlined"
        sx={{
          width: "157.33px",
          height: "96px",
          radius: "12px",
          padding: "20px 40px 20px 40px",
          gap: "8px",
          backgroundColor: "#FAFCFF",
        }}
      >
        <Box>
          {<MuiIcon iconName="fb" />}
          {
            <MuiTypography
              variant="body2"
              sx={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#343446",
              }}
              content="facebook"
            />
          }
        </Box>
      </MuiButton>
      <MuiButton
        variant="outlined"
        sx={{
          width: "157.33px",
          height: "96px",
          radius: "12px",
          padding: "20px 40px 20px 40px",
          backgroundColor: "#FAFCFF",
          gap: "8px",
        }}
      >
        <Box>
          {<MuiIcon iconName="ms" />}
          {
            <MuiTypography
              variant="h1"
              sx={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#343446",
              }}
              content="microsoft"
            />
          }
        </Box>
      </MuiButton>
    </Box>
  );
};
