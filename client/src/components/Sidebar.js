import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidenavvv">
        <ul id="nav-mobile" className="sidenav sidenav-fixed side" style={{ overflow: 'auto', transform: 'translateX(0px)' }}>
          <div className="logo-area">
              <a href="/"><img src="./images/DataLogo.png" alt="logo" className="title-logo"/>
              </a>
              <div className="brand-name">Pleasant Data</div>
          </div>
          <div className="link-area">
            <li><Link className="waves-effect waves-teal" to="/"><div className="sidenav-title">Ad Word Analysis</div></Link></li>
            <li><div className="divider"></div></li>
            <li><Link className="waves-effect waves-teal" to="/">Overview</Link></li>
            <li><Link className="waves-effect waves-teal" to="/analysis">Analysis</Link></li>
            <li><Link className="waves-effect waves-teal" to="/code">Code</Link></li>
            <li><Link className="waves-effect waves-teal" to="/datasets">Datasets</Link></li>
            <li><Link className="waves-effect waves-teal" to="/search">Search a Word</Link></li>
          </div>
        </ul>
      </nav>
    );
  }
};

export default Sidebar;
