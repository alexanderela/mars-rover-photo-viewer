import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFavoriteButton = styled(IconButton)(({ theme }) => ({
  outline: "none",
  position: "absolute",
  right: theme.spacing(0.25),
  bottom: theme.spacing(0.25),
  color: "oldlace",
  zIndex: 10
}));