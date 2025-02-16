import { AppBar, Toolbar, TextField, Box } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: "white", // White background
        color: "black", // Black text color
        display: "flex",
        justifyContent: "center",
        height: "44px", // Reduced height
      }}
    >
      <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "center", minHeight: "44px" }}>
        <Box sx={{ width: "50%", transform: "translateX(-180px)" }}> 
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="grovio.xyz"
            InputProps={{
              sx: {
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "transparent",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": {
                  textAlign: "center",
                  padding: "6px", // Reduce padding for a smaller height
                },
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
