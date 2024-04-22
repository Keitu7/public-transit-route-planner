import React from 'react';
import {useParams, Link} from 'react-router-dom';
import { routesData} from "../src/Assignment 1 mock data.json";

function RouteInformation() {
    const {id, title, duration, stops, price, description }  = useParams();

    return (
        <>
        <h1>Route Information</h1>
        <p>Route Name: {id}</p>
        <p>Destination: {title}</p>
        <p>Time: {duration}</p>
        <p>Stops: {stops}</p>
        <p>Price: {price}</p>
        <p>Desription: {description}</p>
        <button><Link to="../src/pages/TicketPurchase">Purchase Ticket</Link></button>
        <button><Link to="/">Return</Link></button>
        </>
    );
}

export default RouteInformation;