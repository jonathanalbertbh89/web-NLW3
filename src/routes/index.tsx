import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateOrphanage from '../pages/createOrphanges/CreateOrphanage';
import Landing from '../pages/landing';
import Orphanage from '../pages/orphanages/Orphanage';
import OrphanagesMap from '../pages/orphanagesMap/index'



function Routes(){
    return(
        <BrowserRouter   >
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/map" component={OrphanagesMap} />
                <Route path="/orphanage/:id" component={Orphanage} />
                <Route path="/orphanages/create" exact component={CreateOrphanage} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;