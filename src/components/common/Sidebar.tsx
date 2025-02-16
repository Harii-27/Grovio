import { Drawer, List, Stack, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { ContentCopy, ChevronLeft, ChevronRight } from "@mui/icons-material"; // ✅ Import icons
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse"; // ✅ Bring back SidebarItemCollapse

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: "#FFFFFF",
          color: "black",
        },
      }}
    >
      <List disablePadding>
        {/* Colored Dots + Copy Icon + Arrows */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 15px",
            justifyContent: "flex-start", // Moves everything left
          }}
        >
          {/* Colored Dots */}
          <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "orange" }} />
          <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "yellow" }} />
          <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "green" }} />

          {/* Copy Icon */}
          <IconButton size="small">
            <ContentCopy fontSize="small" />
          </IconButton>

          {/* Left Arrow */}
          <IconButton size="small">
            <ChevronLeft fontSize="small" />
          </IconButton>

          {/* Right Arrow */}
          <IconButton size="small">
            <ChevronRight fontSize="small" />
          </IconButton>
        </Box>

        {/* Sidebar Header */}
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Typography variant="h6" fontWeight="bold">
              Grovio
            </Typography>
          </Stack>
        </Toolbar>

        {/* Sidebar Items */}
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} /> // ✅ Use SidebarItemCollapse for dropdown
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
