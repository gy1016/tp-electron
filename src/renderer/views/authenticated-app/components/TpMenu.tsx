import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Layout, MenuProps } from "antd";
import { TpRouterProps } from "@/renderer/types/global";
import { LogoutOutlined } from "@ant-design/icons";
import logo from "@/renderer/assets/logo.svg";

interface TpMenuProps {
  collapsed: boolean;
  siteTitle: string;
  routerArr: Array<TpRouterProps>;
}

const TpMenu: FC<TpMenuProps> = (props) => {
  const navigate = useNavigate();
  const { Sider } = Layout;
  const { collapsed, siteTitle, routerArr } = props;
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Sider
      className="auth-app-sider"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="150px"
      collapsedWidth="40px"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="logo">
        <svg className="logo-svg" viewBox={logo.viewBox}>
          <use xlinkHref={`#${logo.id}`} />
        </svg>
        <span>{!collapsed ? siteTitle : ""}</span>
      </div>
      <Menu
        onClick={onClick}
        theme="light"
        mode="inline"
        defaultSelectedKeys={["task"]}
        items={routerArr}
      ></Menu>
      <div className="other-menu">
        <LogoutOutlined className="other-menu-logout" />
      </div>
    </Sider>
  );
};

export default TpMenu;
