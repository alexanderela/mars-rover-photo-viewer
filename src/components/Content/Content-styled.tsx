import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTab = styled(Tab)({
  color: "#B8B4B4",
  "&.Mui-selected": {
    color: "#F4EDED",
    fontWeight: 600,
    outline: "none",
  },
  "&.Mui-focused": {
    outline: "none",
  },
  "&:hover": {
    outline: "none",
    color: "#E36414",
  },
});
