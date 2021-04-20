import React from "react";
import MainNav from "../../components/MainNav/MainNav";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import ReviewSetion from "./ReviewSection/ReviewSetion";
import OrderListSection from "./OrderListSection/OrderListSection";

const { TabPane } = Tabs;

function UserDashborad() {
  return (
    <div>
      <MainNav />
      <Tabs tabPosition="left">
        <TabPane tab="Order" key="1">
          Orders
        </TabPane>
        <TabPane tab="Order List" key="2">
          <OrderListSection />
        </TabPane>
        <TabPane tab="Review" key="3">
          <ReviewSetion />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default UserDashborad;
