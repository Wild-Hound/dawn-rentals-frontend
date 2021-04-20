import React from "react";
import { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router";
import { GlobalContext } from "../../App";
import AdminDashborad from "../../Pages/AdminDashborad/AdminDashborad";
import UserDashborad from "../../Pages/UserDashborad/UserDashborad";

function ProtectedRoute({ isAuth, ...rest }) {
  const { admin, email } = useContext(GlobalContext);
  const location = useLocation();
  const curPath = location.pathname;
  console.log(curPath);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          if (curPath === "/admin" && admin) {
            return <AdminDashborad />;
          }
          if (curPath === "/dashborad" && email.email.length > 3) {
            return <UserDashborad />;
          } else {
            if (curPath === "/admin") {
              return <Redirect to="/admin-login" />;
            }
            if (curPath === "/dashborad") {
              return <Redirect to="/login" />;
            }
          }
        } else {
          if (curPath === "/admin") {
            return <Redirect to="/admin-login" />;
          } else {
            return <Redirect to="/login" />;
          }
        }
      }}
    />
  );
}

export default ProtectedRoute;
