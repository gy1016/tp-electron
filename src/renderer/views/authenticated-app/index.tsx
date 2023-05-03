import { FC, useState } from "react";
import { Layout } from "antd";
import TpMenu from "./components/TpMenu";
import TpContent from "./components/TpContent";
import TpRouterArr from "@/renderer/settings/router";
import TpViewArr from "@/renderer/settings/view";
import { TP_SITE_TITLE } from "@/renderer/settings/site";
import "./index.less";

const AuthenticatedApp: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="auth-app">
      <TpMenu
        collapsed={collapsed}
        routerArr={TpRouterArr}
        siteTitle={TP_SITE_TITLE}
      />
      <TpContent collapsed={collapsed} toggle={toggle} viewArr={TpViewArr} />
    </Layout>
  );
};

export default AuthenticatedApp;
