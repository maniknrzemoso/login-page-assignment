import React from "react";
import { Button, SvgIcon, Typography } from "@mui/material";
import google from "../../../assets/google.svg";
import fb from "../../../assets/fb.svg";
import ms from "../../../assets/ms.svg";

interface IconProps {
  iconName: string;
}
export const MuiIcon: React.FC<IconProps> = ({ iconName }) => {
  if (iconName === "google") return <img src={google} alt="gbuton" />;
  else if (iconName === "fb") return <img src={fb} alt="gbuton" />;
  return <img src={ms} alt="msicon" />;
};
