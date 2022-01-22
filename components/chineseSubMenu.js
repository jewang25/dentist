import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useEffect, useRef } from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";


const SidebarLink = styled(Link)`
display: flex;
color: white;
background: #00008B;
justify-content: space-between;
align-items: center;
padding: 5px;
list-style: none;
text-decoration: none;
font-size: 20px;
font-weight: 600;
font-family: Arial, Helvetica, sans-serif;
border-top: 1px solid black;
&:hover {
	background: red;
	
	cursor: pointer;
}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
font-weight: 600;
font-family: Arial, Helvetica, sans-serif;
background: #252831;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 3rem;
padding-right: 20px;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 16px;
border-top: 1px solid black;
&:hover {
	background: red;
	cursor: pointer;
}
`;

const ChineseSubMenu = ({ item, index, onClick }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path}
        onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink onClick={() => onClick(item.slideIndex)} to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default ChineseSubMenu;
