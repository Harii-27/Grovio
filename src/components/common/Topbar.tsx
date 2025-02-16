import { AppBar, Toolbar, TextField, Box, IconButton, InputAdornment } from "@mui/material";
import { Upload, Download, Add, ContentCopy, Refresh, LockOutlined } from "@mui/icons-material";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
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
            sx={{ width: "500px", textAlign: "center", }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ display: "flex", alignItems: "center", gap: "5px", position: "relative", left: "150px" }}>
                  <LockOutlined fontSize="small" />
                  <Box sx={{ fontSize: "14px", fontWeight: "bold", transform: "translateY(1px)" }}>
                    grovio.xyz
                  </Box>
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
                justifyContent: "center",
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
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
