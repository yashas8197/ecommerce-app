import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
