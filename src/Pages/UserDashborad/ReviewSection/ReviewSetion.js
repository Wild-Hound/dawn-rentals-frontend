import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import Notify from "../../../components/Notify/Notify";
import { GlobalContext } from "../../../App";

function ReviewSetion() {
  const { setOpenNotification, setReRender } = useContext(GlobalContext);

  const onFinish = (values) => {
    console.log("success", values);
    fetch("https://newtest404.herokuapp.com/add/review", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "review added") {
          setOpenNotification(true);
          setReRender(true);
        }
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="addService">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input review description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Review
          </Button>
        </Form.Item>
      </Form>
      <Notify message="Review Added" />
    </div>
  );
}

export default ReviewSetion;
