import React from 'react';
import loader from '../../images/loading-gear.gif'

export default function Preloader() {
    return (
     <div className="loading">
         <h4>Rooms data loading</h4>
         <img src={loader} alt=""/>
     </div>
    )
}