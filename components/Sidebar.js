
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import { SidebarData } from "./SidebarData.js";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";



const Nav = styled.div`
  background: #00008B;
  width: 250px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: start;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 16px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background:  #00008B;
  width: 250px;
  display: flex;
  justify-content: flex-start;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;