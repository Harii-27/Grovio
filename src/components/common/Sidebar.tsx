import { Drawer, List, Stack, Toolbar, Typography, Box, IconButton, Avatar } from "@mui/material";
import { ContentCopy, ChevronLeft, ChevronRight, Menu } from "@mui/icons-material";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import logo from "../../assets/images/logo.jpg";
import profile from "../../assets/images/profile.jpg";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      {isMobile && (
        <IconButton
          sx={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 1201,
            backgroundColor: "white",
            borderRadius: "8px",
          }}
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sizeConfigs.sidebar.width,
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor: "#FFFFFF",
            color: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100vh",
          },
        }}
      >
        <Box>
          <List disablePadding>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 15px",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "red" }} />
              <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "orange" }} />
              <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "lightgreen" }} />
              <IconButton size="small">
                <ContentCopy fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <ChevronLeft fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <ChevronRight fontSize="small" />
              </IconButton>
            </Box>

            {/* Sidebar Header with Logo */}
            <Toolbar sx={{ marginBottom: "20px" }}>
              <Stack sx={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "row", gap: "10px" }}>
                <img src={logo} alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "8px" }} />
                {!isMobile && (
                  <Typography variant="h6" fontWeight="bold">
                    Grovio
                  </Typography>
                )}
              </Stack>
            </Toolbar>

            {/* Sidebar Items */}
            {appRoutes.map((route, index) =>
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            )}
          </List>
        </Box>

        {/* Bottom Profile Section - Hidden on Mobile */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px",
              borderRadius: "12px",
              margin: "10px",
              border: "1px solid #ddd",
              backgroundColor: "#fff",
            }}
          >
            <Avatar src={profile} alt="User" sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography variant="body2" fontWeight="bold">
                Jack Finnigan
              </Typography>
              <Typography variant="caption" color="text.secondary">
                jackfinnigan@grovio.xyz
              </Typography>
            </Box>
            <IconButton size="small">
              <ChevronRight fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default Sidebar;
