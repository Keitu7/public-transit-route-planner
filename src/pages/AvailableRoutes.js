import React from 'react';
import {Link} from 'react-router-dom';

function AvailableRoutes(){
    return(
        <>
        <h1>Available Routes</h1>
        <ul>
            <li><Link id="route-1">Downtown Express</Link></li>
            <li><Link id="route-2">Scenic Coastal Line</Link></li>
            <li><Link id="route-3">Suburban Shuttle</Link></li>
            <li><Link id="route-4">Night Owl</Link></li>
        </ul>
        </>
    );
}

export default AvailableRoutes;