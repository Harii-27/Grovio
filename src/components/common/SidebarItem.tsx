import { Box, ListItemButton, ListItemIcon, Typography, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
  isChild?: boolean;
};

const SidebarItem = ({ item, isChild = false }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        selected={isActive}
        sx={{
          backgroundColor: isActive ? "#F0F8FF" : "transparent", 
          borderRadius: "8px", 
          paddingY: "12px",
          paddingLeft: isChild ? "35px" : "24px",
          transition: "background-color 0.3s ease-in-out, border-radius 0.2s ease-in-out", 
          "&:hover": {
            backgroundColor: "#F0F8FF",
            borderRadius: "12px", 
          },
          "&.Mui-selected": {
            backgroundColor: "#F0F8FF",
            color: "#000",
            borderRadius: "12px", 
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#F0F8FF", 
            borderRadius: "12px", 
          },
        }}
      >
        <ListItemIcon sx={{ color: "inherit", minWidth: isChild ? "30px" : "40px" }}>
          {!isChild && item.sidebarProps.icon}
        </ListItemIcon>

        <Stack direction="row" alignItems="center" spacing={1}>
          {isChild && (
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: "#7a5af8",
                borderRadius: "50%",
              }}
            />
          )}
          <Typography>{item.sidebarProps.displayText}</Typography>
        </Stack>
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;
