import React, { useContext } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import { ValueContext } from "../Context";
// import { FaDollarSign } from "react-icons/fa";

const Sidebar = () => {
  const { id } = useContext(ValueContext);
  return (
    <div
      style={{
        display: "flex",
        overflow: "scroll initial",
        position: "abdolute",
      }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#000"
        maxWidth="200px"
        minWidth="50px"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img src={Logo} alt="BritishFX.co.uk" width={120} />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to={`/${id}`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/${id}/profile`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/${id}/deposit`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="key">Deposit funds</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/${id}/withdraw`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="key">Withdraw funds</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/${id}/economic-calender`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">
                Economic calender
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/${id}/technical-analysis`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to={`/${id}/tools`} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tools">Tools</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
