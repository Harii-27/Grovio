import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RouteType } from "../../routes/config";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  item: RouteType;
  isChild?: boolean; 
};

const SidebarItemCollapse = ({ item, isChild = false }: Props) => {
  const [open, setOpen] = useState(false);
  const { appState } = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item.state]);

  return item.sidebarProps ? (
    <>
      {/* Parent Item (Expandable) */}
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          paddingY: "12px",
          paddingX: isChild ? "40px" : "24px", 
          "&:hover": { backgroundColor: "transparent" },
          "&.Mui-selected": { backgroundColor: "transparent" }
        }}
      >
        {/* Show icon only if it's not a child */}
        {!isChild && (
          <ListItemIcon sx={{ color: "inherit" }}>
            {item.sidebarProps.icon}
          </ListItemIcon>
        )}
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>

      {/* Child Items */}
      <Collapse in={open} timeout="auto">
  <List>
    {item.child?.map((route, index) =>
      route.sidebarProps ? (
        route.child ? (
          <SidebarItemCollapse item={route} key={index} />
        ) : (
          <SidebarItem item={route} key={index} isChild={true} /> 
        )
      ) : null
    )}
  </List>
</Collapse>


    </>
  ) : null;
};

export default SidebarItemCollapse;
