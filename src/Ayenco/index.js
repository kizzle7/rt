
import React from "react";
import { BrowserRouter, Route, Link,Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Nav,Collapse, Button, CardBody, Card } from 'reactstrap';
import axios from 'axios';
import Index from './views/Index';

class Indexa extends React.Component{
  state = {
    token: ''
  }
  componentWillMount = () => {
    const post = {
        email: "abim3@gmail.com",
        password: "olatomide"
    }
    axios.post(`http://127.0.0.1:8000/api/login`,post).
    then((res) => {
        console.log(res.data.token);
        this.setState({
            token: res.data.token
        })
    }).
    catch((err) => {
        console.log(err)
    })
}

	render(){
		return(
			<>
      
      <div>
      <div className="nav3 fixed-top"><h4 className="text-center text-white">POS ACCESS ENTRY</h4></div>
			<div className="row">
				<div className="hover col-md-2 sidy pt-5 pl-4">
					<br />
					<br />

                  <Link
                    to={{pathname: `/accrelex`, state: this.state.token}}
                    className="nav-link text-white"
                    activeClassName="active pt-2"
                  >
                    <p className="text-white">ACCRELEX ECOSYSTEM

                    </p>
                    
                  </Link>
				  <Link
                    to={{pathname: `/pocketmoni`, state: this.state.token}}
                    className="nav-link text-white"
                    activeClassName="active"
                  >
                    <p className="text-white">POCKETMONI

                    </p>
                    
                  
                   
                  </Link>
				  <Link
                    to='#'
                    className="nav-link text-white"
                    activeClassName="active"
                  >
                    <p className="text-white">CASHNOWNOW

                    </p>
                  </Link>
               
				
                
               
          
  


				</div>
				<div className="col-md-10 text-center text-info">
					<h4>CUSTOMERS REGISTRATION INFORMATIONS </h4>

				</div>
			</div>

			

      </div>
  
      
			
			</>
			)
	}
}
export default Indexa;