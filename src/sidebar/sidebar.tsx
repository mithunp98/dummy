import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { Navigate, NavLink } from 'react-router-dom';
import { Navbar, Button, Nav, Container, Form } from 'react-bootstrap';

// import logo from '../static/logo.png';

import './sidebar.css';

import { useNavigate } from 'react-router-dom';

const Sidebar = (props: any) => (
    <div>
        <div className="sidebar">
            <CDBSidebar
                textColor=""
                backgroundColor=""
                className={''}
                breakpoint={0}
                toggled={true}
                minWidth={''}
                maxWidth={''}
            >
                <CDBSidebarHeader prefix={<i className="fa fa-bars" id="barcolor"/>}
                className="headernavbar">Settings</CDBSidebarHeader>

                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <NavLink exact to="/home" activateClassName="activeClicked" {...props}>
                            <CDBSidebarMenuItem icon="home" className="barcolor">Home</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/" activeClassName="activeClicked" {...props}>
                            <CDBSidebarMenuItem icon="list" className="barcolor">Add Task</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/login" activeClassName="activeClicked" {...props} id="logoutbuttonmenu">
                            <CDBSidebarMenuItem icon="user" className="barcolor">Logout</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    </div>
);

export default Sidebar;
