import React from "react";
import { Button } from "@mui/material";
import { JsxElement } from "typescript";
import { Variant } from "@testing-library/react";

type ButtonProps = {
  variant?: "outlined" | "contained" | "text";
  children?: any;
  sx?: object;
};
export const MuiButton: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <Button sx={props.sx} variant={props.variant}>
        {props.children}
      </Button>
    </div>
  );
};
