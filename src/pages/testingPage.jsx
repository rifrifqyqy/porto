import "./sidebar.css";
import { useState } from "react";
import Dashboard from "@/components/Layouts/Dashboard";
import Shipment from "@/components/Layouts/Shipment";
import { DashboardIcon, ShipmentIcon } from "@/components/Icon/Icon";


export default function TestingPage() {
  const [activeContent, setActiveContent] = useState("Dashboard");

  const renderContent = () => {
    switch (activeContent) {
      case "Dashboard":
        return <Dashboard />;
      case "Shipment":
        return <Shipment />;
      case "Support":
        return <Shipment />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <>
      <section className="flex">
        <aside className="sidebar">
          <h1 className="w-fit">Menu</h1>
          <ul className="menu-wrapper">
            <li
              className={`menu ${activeContent === "Dashboard" ? "active" : ""}`}
              onClick={() => setActiveContent("Dashboard")}
            >
              <DashboardIcon className="icon" />
              <p>Dashboard</p>
            </li>
            <li
              className={`menu ${activeContent === "Shipment" ? "active" : ""}`}
              onClick={() => setActiveContent("Shipment")}
            >
              <ShipmentIcon
                className="icon"
                isActive={activeContent === "Shipment"}
              />
              <p>Shipment</p>
            </li>
            <li
              className={`menu ${activeContent === "Support" ? "active" : ""}`}
              onClick={() => setActiveContent("Support")}
            >
              <DashboardIcon />
              <p>Help & Support</p>
            </li>
          </ul>
        </aside>

        <main className="content">{renderContent()}</main>
      </section>
    </>
  );
}
