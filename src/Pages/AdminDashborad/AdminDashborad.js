import React from "react";
import MainNav from "../../components/MainNav/MainNav";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import OrdersList from "./OrdersList/OrdersList";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddService from "./AddService/AddService";
import ManageServices from "./ManageServices/ManageServices";

const { TabPane } = Tabs;

function AdminDashborad() {
  return (
    <div>
      <MainNav />
      <Tabs tabPosition="left">
        <TabPane tab="Orders List" key="1">
          <OrdersList />
        </TabPane>
        <TabPane tab="Make Admin" key="2">
          <MakeAdmin />
        </TabPane>
        <TabPane tab="Add Service" key="3">
          <AddService />
        </TabPane>
        <TabPane tab="Manage Services" key="4">
          <ManageServices />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default AdminDashborad;
