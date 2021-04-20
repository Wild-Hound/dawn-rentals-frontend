import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Space } from "antd";
import { GlobalContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ManageServices() {
  const { serviceList, setReRender } = useContext(GlobalContext);

  function deleteService(e, result) {
    let x = { id: result["_id"] };
    console.log(x);
    fetch("http://localhost:3030/delete/service", {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount >= 1) {
          setReRender(true);
        }
      });
  }

  const columns = [
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (result) => (
        <Space size="middle">
          <button
            className="deleteServiceBtn"
            onClick={(event) => deleteService(event, result)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={serviceList} />
    </div>
  );
}

export default ManageServices;
