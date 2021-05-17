import React, {useContext} from 'react';
import uit from '../../assets/uit.png';
import user from '../../assets/user.jpg';
import {AuthContext} from '../../contexts/AuthContext';
import {Link} from 'react-router-dom';
import '../css/SideBar.css';

const Sidebar = () => {

    const {authState: {user: {username, email}}, logoutUser} = useContext(AuthContext);

    return (
        <>
        <input type="checkbox" id="sidebar-toggle" />
        <div className="sidebar">
          {/* User basic info */}
          <div className="sidebar-brand">
            <div className="brand-flex">
              <a href="https://www.uit.edu.vn/">
                <img src={uit} width="30px" alt="user" />
              </a>
              <div className="brand-icons">
                <span className="las la-bell" />
                <Link to="/user">
                  <span className="las la-user-circle" />
                </Link>
              </div>
            </div>
          </div>
          <div className="sidebar-main">
            <div className="sidebar-user">
              <img src={user} alt="" />
              <div>
                <h3>{username}</h3>
                <p>{email}</p>
              </div>
            </div>
            <div className="sidebar-menu">
              <div className="menu-head">
                <span>Dashboard</span>
              </div>
              <ul>
                <li>
                  <Link to="/generality">
                    <span className="las la-tachometer-alt" />
                    <span>Generality</span>
                  </Link>
                </li>
                <li>
                  <Link to="/analytics">
                    <span className="las la-chart-pie" />
                    <span>Analytics</span>
                  </Link>
                </li>
              </ul>
              <div className="menu-head">
                <span>Options</span>
              </div>
              <ul>
                <li>
                  <Link to="/user">
                    <span className="las la-user-alt" />
                    <span>User</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <span className="las la-wrench" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lou-out" onClick={logoutUser}>
            <button className="btn-log-out">Log out</button>
          </div>
        </div>
      </>
    )
}

export default Sidebar
