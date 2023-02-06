import { MuiTypography } from "../../atoms/Typography";
import React from "react";
import { MuiTextFied } from "../../atoms/Textfield";
import { MuiButton } from "../../atoms/Button";
import { Box } from "@mui/system";
import { Link } from "@mui/material";
import { InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
export const FormComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        gap: "24px",
      }}
    >
      {/* <MuiTypography variant="h4" content="Login to Minet" /> */}
      <div>
        <MuiTypography
          variant="body2"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: 0,
            gap: "20px",
          }}
          content="Email"
        />
        <MuiTextFied
          label="you@company.com"
          sx={{
            width: "512px",
            height: "48px",
            radius: "8px",
            // padding: "12px 16px 12px 16px",
            gap: "8px",
          }}
        />
      </div>
      <div>
        <MuiTypography variant="subtitle2" content="Password" />
        <MuiTextFied
          label="Enter Password"
          sx={{
            width: "512px",
            height: "48px",
            radius: "8px",
            // padding: "12px 16px 12px 16px",
            gap: "8px",
          }}
          type={showPassword ? "text" : "password"} // <-- This is where the magic happens
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <MuiTypography
        variant="subtitle1"
        sx={{
          color: "#0052FF",
        }}
      >
        <Link href="#" variant="body2" underline="none">
          Forgot Password
        </Link>
      </MuiTypography>
      <MuiButton
        sx={{
          width: "512px",
          height: "42px",

          radius: "4px",
          padding: "0px 16px 0px 16px",
        }}
        variant="contained"
      >
        Signup
      </MuiButton>
    </Box>
  );
};
