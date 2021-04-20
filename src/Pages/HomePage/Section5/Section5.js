import React, { useContext } from "react";
import { GlobalContext } from "../../../App";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

function Section5() {
  const { serviceList } = useContext(GlobalContext);
  return (
    <div className="HomePageSec5">
      {serviceList?.map((service) => {
        return <ServiceCard service={service} key={service["_id"]} />;
      })}
    </div>
  );
}

export default Section5;
