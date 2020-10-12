import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';

import logoImg from '../../images/logo.svg';

import './style.css';
 
function Landing(){
    return(
        <div id ="page-landing">
          <div className="content-wrapper">
              <img src={logoImg} alt="logoImg"/>

              <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>

              </main>

              <div className="location">
                <strong>Almenara</strong>
                <span>Minas Gerais</span>
              </div>

              <Link to="/map" className="enter-app"> 
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />  
              </Link>
          </div>
    </div>
    )
}

export default Landing;