import React from "react";
import { TextField } from "@mui/material";
interface TextFieldProps {
  label: string;
  sx?: object;
  InputProps?: object;
  type?: any;
}
export const MuiTextFied: React.FC<TextFieldProps> = (props) => {
  return (
    <div>
      <TextField
        type={props.type}
        sx={props.sx}
        variant="outlined"
        label={props.label}
        InputProps={props.InputProps}
      />
    </div>
  );
};
