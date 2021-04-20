import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

function Section4() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="HomePageSec4">
        <h1>Send a Message</h1>
        <p>Your email address will not be published</p>
        <Form
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="messageForm"
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "subject"]} label="Subect">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "introduction"]}
            label="Introduction"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <footer className="footer">Developed by Yasin Khan</footer>
    </>
  );
}

export default Section4;
