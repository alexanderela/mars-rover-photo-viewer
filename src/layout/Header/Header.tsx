import { Avatar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Header = () => {
  return (
    <Grid
      size={12}
      sx={{
        height: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
      data-testid="Header"
    >
      <Typography
        sx={{
          color: "#F4EDED",
          marginLeft: (theme) => theme.spacing(6),
          fontWeight: "600"
        }}
        variant="h5"
      >
        Mars Rover Photo Viewer
      </Typography>
      <Avatar 
        sx={{ 
          bgcolor: "#F4EDED",
          marginRight: (theme) => theme.spacing(6), 
        }}>U</Avatar>
    </Grid>
  );
};
