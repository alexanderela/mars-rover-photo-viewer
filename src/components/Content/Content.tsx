import Grid from "@mui/material/Grid2";
import { Tabs } from "@mui/material";
import { StyledTab } from "./Content-styled";
import { GridView } from "../../features/GridView";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setSelectedRover } from "../../reducers/selectedRoverSlice";
import { Rover } from "../../types/common";

export const Content = () => {
  const selectedRover = useAppSelector(state => state.selectedRover);
  const dispatch = useAppDispatch();

  return (
    <Grid
      size={10}
      sx={{
        backgroundColor: "#343232",
        borderRadius: "8px",
        margin: "0 auto 8rem",
        padding: "3rem",
        height: "100vh"
      }}
    >
      <Tabs
        value={selectedRover}
        onChange={(e: React.SyntheticEvent, newRover: Rover) =>
          dispatch(setSelectedRover(newRover as Rover))
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
