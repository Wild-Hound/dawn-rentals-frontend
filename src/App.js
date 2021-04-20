import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import MainNav from "./components/MainNav/MainNav";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { createContext, useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashborad from "./Pages/AdminDashborad/AdminDashborad";

export const GlobalContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState({});
  const [openNotification, setOpenNotification] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [userOrdered, setUserOrdered] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/get/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceList([...data]);
      });
    setReRender(false);
  }, [reRender]);
  useEffect(() => {
    fetch("http://localhost:3030/get/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviewList([...data]);
      });
    setReRender(false);
  }, [reRender]);
  useEffect(() => {
    fetch("http://localhost:3030/get/ordered", {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserOrdered(data);
      });
  }, [reRender, email]);

  return (
    <GlobalContext.Provider
      value={{
        isAuth,
        setIsAuth,
        email,
        setEmail,
        openNotification,
        setOpenNotification,
        reRender,
        setReRender,
        serviceList,
        setServiceList,
        admin,
        setAdmin,
        reviewList,
        setReviewList,
        userOrdered,
        setUserOrdered,
      }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <MainNav />
              <HomePage />
              {/* <AdminDashborad /> */}
            </Route>
            <Route path="/login">
              <MainNav />
              <LoginPage />
            </Route>
            <Route path="/admin-login">
              <MainNav />
              <AdminLogin />
            </Route>
            <ProtectedRoute path="/dashborad" isAuth={isAuth} />
            <ProtectedRoute path="/admin" isAuth={isAuth} />
          </Switch>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
