import React from "react";
import { BrowserRouter, Route, Switch, Redirect ,Link} from "react-router-dom";
import {Table} from "./tables";
import axios from 'axios';

class Accrelex extends React.Component{
	state = {
		datas: [],
		token: this.props.location.state,
		datar: []
	}

	componentWillMount = () => {
	
        axios.get(`http://127.0.0.1:8000/api/getpoc`,{
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
	
	componentDidUpdate =() => {
		this.state.datas.map((dt) =>{
			const arrayi = [`${dt.MOBILE_NUMBER}`,`${dt.NETWORK_PROVIDER}`,dt.FIRSTNAME,dt.LASTNAME,dt.MIDDLENAME,dt.GENDER,dt.DOB,dt.MOI,dt.IDNUM,dt.EMAIL,dt.OCCUPATION,dt.P_ACCOUNT,dt.NOB,dt.BAN,dt.BVN,dt.ADDRESS,dt.STREETNAME,dt.BSTOP,dt.CITY,dt.LGA,dt.STATE,dt.BIZ_ADDRESS,dt.BIZ_STREET,dt.BIZ_BSTOP,dt.BIZ_CITY,dt.BIZ_LGA,dt.BIZ_STATE,dt.AGGNAME,dt.AGGCODE,dt.RCODE,dt.RNUM,dt.KNAME,dt.KNUM,dt.KADDRESS,dt.PEP,dt.PEPR]
			console.log(arrayi)
			

		})
	
		
		
		
	
	}

	render(){
		const set = this.state.datas.map((dt) =>(<Table key={dt.id} 
			data={[[`${dt.MOBILE_NUMBER}`,`${dt.NETWORK_PROVIDER}`,dt.FIRSTNAME,dt.LASTNAME,dt.MIDDLENAME,dt.GENDER,dt.DOB,dt.MOI,dt.IDNUM,dt.EMAIL,dt.OCCUPATION,dt.P_ACCOUNT,dt.NOB,dt.BAN,dt.BVN,dt.ADDRESS,dt.STREETNAME,dt.BSTOP,dt.CITY,dt.LGA,dt.STATE,dt.BIZ_ADDRESS,dt.BIZ_STREET,dt.BIZ_BSTOP,dt.BIZ_CITY,dt.BIZ_LGA,dt.BIZ_STATE,dt.AGGNAME,dt.AGGCODE,dt.RCODE,dt.RNUM,dt.KNAME,dt.KNUM,dt.KADDRESS,dt.PEP,dt.PEPR]]
		} />))
			

	


		
	
		return(
			<>
		
			<div>
			<h3 className="pt-3 font-weight-bold text-center">Accrelex Users Registered Information</h3>
            {set}
			
			

			</div>

			</>
			)
	}

	dataSet = [
		[44, "ffdf", "fff", "fdf", "ff", "Male", "01/01/2020", "Voters Crad", "ddds3", "ddda@ddd", "dsdssd", "234ffdf", "fdff", "1234", "668", "ddd", "dd", "sdd", "dsd", "dds", "ssd", "sdd", "ss", "dsd", "sd", "dsd", "ssd", "dds", "null", "dsd3", "22", "null", "223", "dsd", "dds", "dsd"],

	];
}
export default Accrelex;