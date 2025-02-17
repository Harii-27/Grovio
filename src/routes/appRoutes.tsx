import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import { RouteType } from "./config";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MembersTable from "../pages/dashboard/Members";
import HomePage from "../pages/Home/HomePage";
import CampaignPage from "../pages/Campagin/CampaignPage";
import MessagePage from "../pages/dashboard/MessagePage";
import CommunitiesPage from "../pages/dashboard/Communities";
import TopicsPage from "../pages/dashboard/TopicsPage";
import NotificationPage from "../pages/notification/NotificationPage";

const appRoutes: RouteType[] = [
  {
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Analytics",
      icon: <AccessTimeOutlinedIcon />
    },
    child: [

      {
        path: "/dashboard/members",
        element: <MembersTable/>,
        state: "dashboard.members",
        sidebarProps: { displayText: "Members" }
      },
      {
        path: "/dashboard/messages",
        element: <MessagePage />,
        state: "dashboard.messages",
        sidebarProps: {
          displayText: "Messages"
        }
      },
      {
        path: "/dashboard/topics",
        element: <TopicsPage />,
        state: "dashboard.topics",
        sidebarProps: {
          displayText: "Topics"
        }
      }
    ]
  },
  {
    path: "/communities",
    element: <CommunitiesPage/>,
    state: "communities",
    sidebarProps: {
      displayText: "Communities",
      icon: <GroupsOutlinedIcon />
    }
  },
  {
    path: "/campaign",
    element: <CampaignPage />,
    state: "campaign",
    sidebarProps: {
      displayText: "Campaigns",
      icon: <CampaignOutlinedIcon />
    }
  },
  {
    path: "/notification",
    element: <NotificationPage />,
    state: "notification",
    sidebarProps: {
      displayText: "Notifications",
      icon: <NotificationsOutlinedIcon />
    }
  },
  {
    path: "/settings",
    element: <NotificationPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <SettingsOutlinedIcon />
    }
  }
];
export default appRoutes;
