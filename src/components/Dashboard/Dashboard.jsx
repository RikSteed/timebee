import "./dashboard.css";

import Drawer from "./Drawer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardBar from "./DashboardBar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="component">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <DashboardBar handleOpenDrawer={()=>setIsOpen(true)}/>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
