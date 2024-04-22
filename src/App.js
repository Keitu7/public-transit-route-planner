import React from 'react';
import {BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/Navbar';
import AvailableRoutes from './pages/AvailableRoutes';
import RouteInformation from './RouteInformation';
import TicketPurchase from './pages/TicketPurchase';


function App() {
  const [routeInformation] = useParams ([
    {id: 'route-1',title: 'Downtown Express', duration:'25 min', stops: '5', price:'245,5', description:'The quickest way to the heart of the city, with minimal stops.'},
    {id: 'route-2',title: 'Scenic Coastal Line', duration:'55 min', stops: '8', price:'255,75', description:'The quickest way to the heart of the city, with minimal stops.'},
    {id: 'route-3',title: 'Suburban Shuttle', duration:'45 min', stops: '6', price:'99,0', description:'The quickest way to the heart of the city, with minimal stops.'},
    {id: 'route-4',title: 'Night Owl', duration:'40 min', stops: '4', price:'55,65', description:'The quickest way to the heart of the city, with minimal stops.'},

  ]);

  return (
    <Router>
       <div className="App">
        <NavBar />
          
            <Route path="/" exact component={AvailableRoutes}/>
            <Route path="/route/:id" component={RouteInformation}/>
            <Route path="/ticket-purchases" component={TicketPurchase}/>

      </div>
    </Router>

  );
}

export default App;
