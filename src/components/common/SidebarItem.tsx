import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          backgroundColor: "transparent !important", // Removes background color
          "&:hover": {
            backgroundColor: "transparent !important" // Removes hover effect
          },
          "&.Mui-selected": {
            backgroundColor: "transparent !important", // Removes active effect
            color: "inherit"
          },
          "&.Mui-selected:hover": {
            backgroundColor: "transparent !important" // Prevents hover on active item
          },
          paddingY: "12px",
          paddingX: "24px"
        }}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;
