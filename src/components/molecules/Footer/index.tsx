import React from "react";
import { MuiTypography } from "../../atoms/Typography";
import { Link } from "@mui/material";
export const Footer: React.FC = () => {
  return (
    <div>
      {/* <MuiTypography variant="subtitle2" content="Don't have an account?" /> */}
      <MuiTypography variant="subtitle2">
        Don't have an account{" "}
        <span>
          <Link href="#" variant="body2" underline="none">
            Signup
          </Link>
        </span>
      </MuiTypography>
    </div>
  );
};
