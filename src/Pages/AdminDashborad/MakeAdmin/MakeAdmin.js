import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import Notify from "../../../components/Notify/Notify";
import { GlobalContext } from "../../../App";

function MakeAdmin() {
  const { setOpenNotification } = useContext(GlobalContext);

  const onFinish = (values) => {
    values.role = "admin";
    console.log("Success:", values);
    fetch("https://newtest404.herokuapp.com/add/user", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "entry added") {
          setOpenNotification(true);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="addAdminForm">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input email!",
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
              message: "Please input password!",
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
      <Notify message="Admin Added" />
    </div>
  );
}

export default MakeAdmin;
