import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#F4EDED",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  cursor: "pointer"
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(1.65),
  color: "#F4EDED"
}));

export const StyledButtonContainer = styled(Box)(({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}));
