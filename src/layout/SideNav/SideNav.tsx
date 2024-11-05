import Grid from "@mui/material/Grid2";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledButtonContainer, StyledIconButton, StyledTypography } from "./SideNav-styled";
import { useNavigate } from "react-router-dom";

export const SideNav = () => {
  const navigate = useNavigate();

  return (
    <Grid
      size={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: (theme) => theme.spacing(3),
        paddingTop: (theme) => theme.spacing(7)
      }}
      data-testid="SideNav"
    >
      <StyledButtonContainer >
        <StyledIconButton
          aria-label="rover photos"
          onClick={() => navigate("photos/rovers/curiosity?page=1")}
        >
          <PhotoLibraryIcon fontSize="large" />
        </StyledIconButton>
        <StyledTypography variant="body2">
          Rover Photos
        </StyledTypography>
      </StyledButtonContainer>

      <StyledButtonContainer>
        <StyledIconButton 
          aria-label="rover map"
          value="map"
          onClick={() => navigate("map")}
        >
          <MapIcon fontSize="large" />
        </StyledIconButton>
        <StyledTypography variant="body2">
          Rover Map
        </StyledTypography>
      </StyledButtonContainer>

      <StyledButtonContainer>
        <StyledIconButton 
          aria-label="favorite photos"
          value="favorites"
          onClick={() => navigate("favorites")}
        >
          <FavoriteIcon fontSize="large" />
        </StyledIconButton>
        <StyledTypography variant="body2">
          Favorites
        </StyledTypography>
      </StyledButtonContainer>
    </Grid>
  );
};
