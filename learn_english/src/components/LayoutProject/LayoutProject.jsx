import { Outlet } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./components/Header/Header.css";
import "./components/Footer/Footer.css";

export default function Layout() {
  return (
    <div className="App__container">
      <Header />
      <main className="container__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}