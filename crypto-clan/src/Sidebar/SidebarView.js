import React from 'react';
import {Nav} from 'react-bootstrap';
import { withRouter } from 'react-router';
import './SidebarView.css';

const SidebarView = props => {
    debugger;
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div style={{ paddingTop: '30px', paddingBottom: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2><strong style={{ fontSize: '18px', fontFamily: 'fantasy', marginLeft: '15px' }}>CRYPTO CLAN</strong></h2>
                    <span style={{ color: 'darkblue', fontSize: '20px' }}>|</span>
                </div>
                <div className="sidebar-sticky"></div>
                <Nav.Item className={`hover-sidebar sidebar-menu-item ${props.currentPage === 'Dashboard' ? 'sidebar-active' : ''}`}>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className={`hover-sidebar sidebar-menu-item ${props.currentPage === 'Assets' ? 'sidebar-active' : ''}`}>
                    <Nav.Link href="/assets">Assets</Nav.Link>
                </Nav.Item>
                <Nav.Item className={`hover-sidebar sidebar-menu-item ${props.currentPage === 'Live Trade' ? 'sidebar-active' : ''}`}>
                    <Nav.Link href="/live">Live Trade</Nav.Link>
                </Nav.Item>
                <Nav.Item className={`hover-sidebar sidebar-menu-item ${props.currentPage === 'Activity' ? 'sidebar-active' : ''}`}>
                    <Nav.Link href="/activity">Activity</Nav.Link>
                </Nav.Item>
                <Nav.Item className={`hover-sidebar sidebar-menu-item ${props.currentPage === 'Profile' ? 'sidebar-active' : ''}`}>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav.Item>
            </Nav>
          
        </>
    );
};

export default SidebarView;