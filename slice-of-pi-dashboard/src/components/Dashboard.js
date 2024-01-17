import React, { useState } from 'react';
import ReviewChart from './ReviewChart';
import OrderChart from './OrderChart';
import TotalDisplay from './TotalDisplay';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Dashboard.css';

const Dashboard = () => {
  const [activeChart, setChart] = useState('reviews');
  
  const chartChange = (chart) => {
    setChart(chart);
  }
  return (
    <>
      <Navbar expand="lg" className="Nav-Container">
        <Container>
          <Navbar.Brand style={{ fontSize: "30px", fontWeight: "bold" }}>Management Dashboard</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="Navi">
              <Nav.Link className="Nav-Link" onClick={() => chartChange('reviews')}>
                See Reviews
              </Nav.Link>
              <Nav.Link className="Nav-Link" onClick={() => chartChange('orders')}>
                See Orders
              </Nav.Link>
              <Nav.Link className="Nav-Link" onClick={() => chartChange('totals')}>
                See Revenue
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {activeChart === 'reviews' && <ReviewChart />}
        {activeChart === 'orders' && <OrderChart />}
        {activeChart === 'totals' && <TotalDisplay />}
      </div>
    </>
  );
};


export default Dashboard;
