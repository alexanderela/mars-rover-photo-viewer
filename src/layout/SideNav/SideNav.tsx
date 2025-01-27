import Grid from "@mui/material/Grid2";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { SideNavButton } from "../../components/SideNavButton";

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
      <SideNavButton
        name="rover photos"
        label="Rover Photos"
        Icon={PhotoLibraryIcon}
        onClick={() => navigate("photos/rovers/curiosity?page=1")}
        data-testid="SideNavButton-photos"
      />
      <SideNavButton
        name="rover map"
        label="Rover Map"
        Icon={MapIcon}
        onClick={() => navigate("map")}
        data-testid="SideNavButton-map"
      />
      <SideNavButton
        name="rover favorites"
        label="Favorites"
        Icon={FavoriteIcon}
        onClick={() => navigate("favorites/rovers/curiosity?page=1")}
        data-testid="SideNavButton-favorites"
      />
    </Grid>
  );
};
