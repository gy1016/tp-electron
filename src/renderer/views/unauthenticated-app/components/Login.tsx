import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { IForm } from "@/renderer/types/user";
import useAuth from "@/renderer/hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = (values: IForm) => {
    login(values);
  };

  return (
    <div style={{ width: 360 }}>
      <Form
        name="tp-login"
        className="login-form"
        initialValues={{ remember: false }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
          initialValue={"gy1016"}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="体验用户： taskponds"
            type="text"
            id="username"
            autoComplete="on"
            allowClear
            style={{ borderRadius: 0 }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="体验密码：taskponds"
            id="password"
            autoComplete="on"
            allowClear
            style={{ borderRadius: 0 }}
          />
        </Form.Item>
        <Form.Item>
          <div className="login-form-checkbox">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="">Forgot your password?</a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={false}
            style={{ borderRadius: 0 }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
