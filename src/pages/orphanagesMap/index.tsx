import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';



import {AiFillSmile} from 'react-icons/ai';
import {FiPlus, FiArrowRight} from 'react-icons/fi'

import './style.css';

import mapMarkerImg from '../../images/map-marker.svg';
import MapIcon from '../../utils/mapIcon';
import api from '../../connection/connection';


interface Orphanage{
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    
}


 function OrphanagesMap() {

    
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=>{
        api.get('allorphanages').then(response =>{
            setOrphanages(response.data)
        })
    }, [])

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


                {orphanages.map(orphanage => {
                    return(
                        <Marker 
                        key={orphanage.id}
                        position={[orphanage.latitude,orphanage.longitude]}
                        icon={MapIcon}

                    >
                        <Popup 
                            closeButton={false} 
                            minWidth={240}
                            maxHeight={240}
                            className="map-popup"
                            >
                            {orphanage.name}
                            <Link to={`/orphanage/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#fff" />                                
                            </Link>
                        </Popup>
                    </Marker>
                    )
                })}

            </Map>

            

            <Link to="/orphanages/create"  className="create-orphanage">
                <FiPlus size={32} color=" #FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;