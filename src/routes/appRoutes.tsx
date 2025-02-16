import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import { RouteType } from "./config";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";

// Importing matching icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MembersTable from "../pages/dashboard/Members";

const appRoutes: RouteType[] = [
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
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
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <MembersTable/>,
        state: "dashboard.default",
        sidebarProps: { displayText: "Members" }
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Messages"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Topics"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Communities",
      icon: <GroupsOutlinedIcon />
    }
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Campaigns",
      icon: <CampaignOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Notifications",
      icon: <NotificationsOutlinedIcon />
    }
  },
  {
    path: "/settings",
    element: <ChangelogPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <SettingsOutlinedIcon />
    }
  }
];
export default appRoutes;
