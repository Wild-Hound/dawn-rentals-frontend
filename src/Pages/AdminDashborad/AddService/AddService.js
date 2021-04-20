import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { GlobalContext } from "../../../App";
import Notify from "../../../components/Notify/Notify";

function AddService() {
  const { setOpenNotification, setReRender } = useContext(GlobalContext);

  const onFinish = (values) => {
    console.log("Success:", values);
    fetch("https://newtest404.herokuapp.com/add/service", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "entry added") {
          console.log("implement here");
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
          label="Service Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input service name!",
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
              message: "Please input service description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add new service
          </Button>
        </Form.Item>
      </Form>

      <Notify message="Service Added" />
    </div>
  );
}

export default AddService;
