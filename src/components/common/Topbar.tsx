import { AppBar, Toolbar, TextField, Box, IconButton, InputAdornment } from "@mui/material";
import { Upload, Download, Add, ContentCopy, Refresh, LockOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isMobile ? "100%" : `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: isMobile ? 0 : sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: "white",
        color: "black",
        height: "44px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "44px",
          paddingX: "10px",
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <TextField
            variant="outlined"
            sx={{
              width: isMobile ? "80%" : "500px",
              textAlign: "center",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ display: "flex", alignItems: "center", gap: "5px", position: "relative", left: "150px" }}>
                  <LockOutlined fontSize="small" />
                  {!isMobile && (
                    <Box sx={{ fontSize: "14px", fontWeight: "bold", marginLeft: "5px" }}>grovio.xyz</Box>
                  )}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small">
                    <Refresh fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "transparent",
                border: "0.5px solid #ddd",
                borderRadius: "10px",
                "& .MuiOutlinedInput-input": {
                  textAlign: "center",
                  padding: "6px",
                  fontSize: "14px",
                },
                "& fieldset": { border: "none" },
              },
            }}
          />
        </Box>

        {/* Right-Side Icons */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="small">
              <Upload fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Download fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Add fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <ContentCopy fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
