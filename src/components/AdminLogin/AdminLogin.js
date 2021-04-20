import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../App";

function AdminLogin() {
  const history = useHistory();
  const { setAdmin, setIsAuth, setEmail } = useContext(GlobalContext);

  const onFinish = (values) => {
    values.role = "admin";
    fetch("https://newtest404.herokuapp.com/get/user", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(true);
        setIsAuth(true);
        setEmail({ email: values.email, role: "admin" });
        data && history.push("/admin");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="adminLoginForm"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AdminLogin;
