import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import { GlobalContext } from "../../../App";

function OrderListSection() {
  const { userOrdered } = useContext(GlobalContext);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "description",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
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
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      service: "this is text very logn",
      status: ["pending"],
    },
    {
      key: "2",
      name: "Jim Green",
      service: "this is text very logn",
      status: ["done"],
    },
    {
      key: "3",
      name: "Joe Black",
      service: "this is text very logn",
      status: ["canceled"],
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={userOrdered} />
    </div>
  );
}

export default OrderListSection;
