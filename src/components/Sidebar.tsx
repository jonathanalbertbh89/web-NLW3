import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg'
import './Sidebar.css';

function Sidebar(){

    const {goBack} = useHistory();
    
    return(
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="marker" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#fff" />
                </button>
            </footer>
        </aside>
    )
}

export default Sidebar