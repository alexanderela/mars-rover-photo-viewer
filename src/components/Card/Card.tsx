import { Box, useTheme } from "@mui/material";
import { RoverPhoto } from "../../types/common";

interface CardProps {
  photo: RoverPhoto;
}

export const Card = ({ photo }: CardProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: theme.spacing(1),
        boxShadow: `0px 0px 0px ${theme.spacing(0.25)} white inset`,
        height: theme.spacing(18.8525),
        width: theme.spacing(25),
        margin: `${theme.spacing(1)} ${theme.spacing(2)}`,
        backgroundImage: `url(${photo.imgSrc})`,
        backgroundSize: "cover",
        cursor: "pointer"
      }}
    />
  );
};