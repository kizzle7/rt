import React from 'react';
import {BrowserRouter as Router,  Switch, Route} from 'react-router-dom'
import Upload from './upload'
import First from './first'
import Firs from './firs'
import Fir from './fir'
import Second from './sec'
import Secondi from './sec2'
import Seconda from './sec3'
import CashNow from './cashnow'
import PocketMoni from './pocketmoni'
import Accrelex from './accrelex'
import Indexa from './index';
import Thanks from './thanks'
import Token from './token'
import Casha from './cash2'
import Cashe from './cash3'





class Show extends React.Component{
    render(){
        return(
            <>
            <Router >
            <Switch>
              <Route path="/" exact component ={Upload} />
              <Route path="/form1" exact component={First} />
              <Route path="/form2" exact component={Firs} />
              <Route path="/form3" exact component={Fir} />
              <Route path="/cash2" exact component={Casha} />
              <Route path="/cash3" exact component={Cashe} />
              <Route path="/pocket_form2" exact component={Secondi} />
              <Route path="/pocket_form1" exact component={Second} />
              <Route path="/pocket_form3" exact component={Seconda} />
              <Route path="/cashnow" exact component={CashNow} />
              <Route path="/thanks" exact component={Thanks} />
              <Route path="/token" exact component={Token} />
              <Route path="/accrelex" exact component ={Accrelex} />
              <Route path="/pocketmoni" exact component ={PocketMoni} />
              <Route path="/PosAccess" exact component ={Indexa} />
            </Switch>
            </Router>
                </>
            

        )
     
    }
    
}
export default Show;
