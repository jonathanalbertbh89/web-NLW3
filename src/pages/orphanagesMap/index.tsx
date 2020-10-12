import React from 'react';
import {Link} from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import {AiFillSmile} from 'react-icons/ai';
import {FiPlus} from 'react-icons/fi'

import './style.css';

import mapMarkerImg from '../../images/map-marker.svg';

function orphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="mapMarker"/>

                    <h2>Escolha um orfanato</h2>
                    <p>Muitas crianças estãoesperando a sua visita   
                        <AiFillSmile size={24} color="yellow" alignmentBaseline="central" /></p>
                    

                </header>

                <footer>
                    <strong>Almenara</strong>
                    <span>Minas Gerais

                    </span>
                </footer>
            </aside>

            <Map 
                center={[-16.1700724,-40.6952826]}
                zoom={13.75} 
                style={{
                    width:'100%',
                    height: '100%'
                }}    

                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            

            <Link to=""  className="create-orphanage">
                <FiPlus size={32} color=" #FFF"/>
            </Link>
        </div>
    )
}

export default orphanagesMap;