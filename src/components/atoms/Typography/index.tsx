import React, { Component, ComponentProps } from "react";
import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

interface TypographyProps {
  variant: Variant;
  content?: string;
  sx?: object;
  children?: React.ReactNode | React.ReactNode[];
}
export const MuiTypography: React.FC<TypographyProps> = (props) => {
  return (
    <div>
      <Typography sx={props.sx} variant={props.variant}>
        {props.children}
        {props.content}
      </Typography>
    </div>
  );
};
