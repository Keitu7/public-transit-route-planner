import React from 'react';
import {Link} from 'react-router-dom';

function NavBar()
{
    return (
        <nav>
            <ul>
                <li><Link to="/">Available Routes</Link></li>
                <li><Link to="../src/pages/TicketPurchase" Ticket Purchase></Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;