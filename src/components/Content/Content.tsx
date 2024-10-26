import Grid from "@mui/material/Grid2";
import { Tabs } from "@mui/material";
import { useState } from "react";
import { StyledTab } from "./Content-styled";
import { GridView } from "../../views/GridView";

export const Content = () => {
  const [selectedRover, setSelectedRover] = useState<string>("curiosity");

  return (
    <Grid
      size={11}
      sx={{
        backgroundColor: "#343232",
        borderRadius: "8px",
        height: "100%",
      }}
    >
      <Tabs
        value={selectedRover}
        onChange={(e: React.SyntheticEvent, newRover: string) =>
          setSelectedRover(newRover)
        }
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        sx={{
          padding: (theme) => `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`
        }}
      >
        <StyledTab label="Curiosity" value="curiosity" />
        <StyledTab label="Opportunity" value="opportunity" />
        <StyledTab label="Spirit" value="spirit" />
      </Tabs>
      <GridView
      />
    </Grid>
  );
};
