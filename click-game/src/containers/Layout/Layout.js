import React from "react";
import NavBar from "../Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Clickables from "../Clickables/Clickables";
import Footer from "../../components/Footer/Footer";

const Layout = () => (
  <div>
    <NavBar status="Winner" />
    <Jumbotron />
    <Clickables />
    <Footer />
  </div>
);

export default Layout;
