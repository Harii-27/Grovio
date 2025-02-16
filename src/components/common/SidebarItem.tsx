import { Box, ListItemButton, ListItemIcon, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
  isChild?: boolean; // ✅ Add isChild prop
};

const SidebarItem = ({ item, isChild = false }: Props) => {
  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          backgroundColor: "transparent !important",
          "&:hover": { backgroundColor: "transparent !important" },
          "&.Mui-selected": { backgroundColor: "transparent !important", color: "inherit" },
          "&.Mui-selected:hover": { backgroundColor: "transparent !important" },
          paddingY: "12px",
          paddingLeft: isChild ? "35px" : "24px" // ✅ Shift child items slightly
        }}
      >
        <ListItemIcon sx={{ color: "inherit", minWidth: isChild ? "30px" : "40px" }}>
          {!isChild && item.sidebarProps.icon} {/* ✅ Hide icon for child items */}
        </ListItemIcon>

        {/* ✅ Use Stack to align dot & name properly */}
        <Stack direction="row" alignItems="center" spacing={1}>
          {isChild && ( // ✅ Purple dot for child items
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: "#7a5af8",
                borderRadius: "50%"
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
