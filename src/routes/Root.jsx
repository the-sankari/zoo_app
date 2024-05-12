/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <Header/>
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
