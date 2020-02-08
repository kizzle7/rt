/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import {Table} from "./table";
import axios from 'axios';
class PocketMoni extends React.Component{

	state = {
		datas : [],
		token: this.props.location.state
	}

	componentWillMount = () => {
        console.log(this.state.token)
        const post = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`http://127.0.0.1:8000/api/getpoc`,{
			headers: {
				Authorization : `Bearer ${this.state.token}`
			}
		}).
        then((res) => {
            this.setState({
                datas: res.data.postData
            })
        }).
        catch((err) => {
            console.log(err)
        })
    }

	render(){
		return(
			<>
            <h3 className="pt-3 font-weight-bold text-center">PocketMoni Users Registered Information</h3>
             <Table data={this.dataSet}/>
			
			
			</>
			)
	}
}
export default PocketMoni;