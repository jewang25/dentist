import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="headerContainer" >

      <div className="left">
        <h1 className="leftTitle"> Family Dentistry</h1>
        <p className="leftDescription"> A caring touch for the family</p>
      </div>

      <div className="right">
        <h1 className="rightTitle"> 6920 Parkdale Place, Suite 217 </h1>
        <h1 className="rightTitle"> Indianapolis, IN 46254 </h1>
        <h1 className="rightTitle"> (317) 328-6708 </h1>
      </div>
    </div>

  )
}

export default Header;