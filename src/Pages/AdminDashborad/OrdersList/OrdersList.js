import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space, Select } from "antd";
import { GlobalContext } from "../../../App";

function OrdersList() {
  const { userOrdered, setReRender } = useContext(GlobalContext);

  function statusAction(action, record) {
    let x = {
      id: record["_id"],
      act: action,
    };

    fetch("https://newtest404.herokuapp.com/change/status", {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "updated") {
          setReRender(true);
        }
      });
  }

  const { Option } = Select;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        return (
          <>
            {status?.map((status) => {
              let color = "green";
              switch (status) {
                case "pending":
                  color = "cyan";
                  break;
                case "ongoing":
                  color = "magenta";
                  break;
                case "canceled":
                  color = "volcano";
                  break;
                case "done":
                  color = "lime";
              }
              return (
                <Tag color={color} key={status}>
                  {status.toUpperCase()}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Select
            placeholder="Aciton"
            style={{ width: 120 }}
            onChange={(act) => statusAction(act, record)}
          >
            <Option value="pending">Pending</Option>
            <Option value="ongoing">Ongoing</Option>
            <Option value="done">Done</Option>
            <Option value="canceled">Canceled</Option>
          </Select>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={userOrdered} />
    </div>
  );
}

export default OrdersList;
