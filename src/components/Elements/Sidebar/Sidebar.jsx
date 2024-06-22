import { DashboardIcon, ShipmentIcon } from "@/components/Icon/Icon";
function SidebarNav({ activeContent, setActiveContent }) {
  return (
    <aside className="sidebar">
      <h1 className="w-fit">Menu</h1>
      <ul className="menu-wrapper">
        <li
          className={`menu ${activeContent === "Dashboard" ? "active" : ""}`}
          onClick={() => setActiveContent("Dashboard")}
        >
          <DashboardIcon
            className="icon"
            isActive={activeContent === "Dashboard"}
          />
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
        <li className="menu">Help & Support</li>
      </ul>
    </aside>
  );
}

export default SidebarNav;
