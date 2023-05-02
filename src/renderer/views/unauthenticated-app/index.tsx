import { Space, Image, Tabs, TabsProps } from "antd";
import Logo from "@/renderer/assets/bg-logo.png";
import Task from "@/renderer/assets/tp-title.png";
import Login from "./components/Login";
import Register from "./components/Register";
import "./index.less";

const UnauthenticatedApp = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Login",
      children: <Login />,
    },
    {
      key: "2",
      label: "Register",
      children: <Register />,
    },
  ];

  const handleSwitch = () => {
    console.log("ck");
  };

  return (
    <div className="unauth-app">
      <section className="left"></section>
      <section className="right">
        <div className="logo">
          <Space size="middle">
            <Image width={120} src={Logo} preview={false} />
            <Image width={222} src={Task} preview={false} />
          </Space>
        </div>
        <div className="tabs-form">
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={handleSwitch}
            animated
          ></Tabs>
        </div>
      </section>
    </div>
  );
};

export default UnauthenticatedApp;
