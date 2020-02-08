//import './css/jquery.dataTables.css'
import 'datatables.net-dt/css/jquery.dataTables.css'
import React, {Component} from 'react'
//import App from "./App";

const $ = require('jquery')
$.DataTable = require('datatables.net');


export class Table extends Component {
    componentDidMount() {
        console.log(this.el);
          console.log(this.props.data);
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                { title: "Mobile Number" },
                { title: "Network Provider" },
                { title: "FirstName" },
                { title: "LastName" },
                { title: "MiddleName" },
                { title: "Sex" },
                { title: "DOB" },
                { title: "Means of Identification" },
                { title: "ID Number" },
                { title: "Email" },
                { title: "Occupation" },
                { title: "PocketMoni_Account" },
                { title: "Name of Bank" },
                { title: "Bank Acc Num" },
                 { title: "Bvn" }, 
                 { title: "Address" },
                 { title: "StreetName" },
                 { title: "Bstop" },
                { title: "City" },
                { title: "LGA" },
                { title: "State" },
                { title: "Bussiness Address" },
                    { title: "Bussiness StreetName" },
                    { title: "Bussiness Bstop" },
                     { title: "Bussiness City" },
                     { title: "Bussiness LGA" },
                     { title: "Business State" },
                     { title: "Agent Name" },
                     { title: "Agent Code" },
                     { title: "Refferal Code" },
                      { title: "Refferal Number" },
                       { title: "Next of Kin Name" },
                       { title: "Next of Kin Number" },
                       { title: "Next of Kin Address" },
                       { title: "Political Exposed?" },
                       { title: "Political Exposed Related?" },
                   
            
            ]
        })
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
             
                        <table className="display" width="100%" ref = {el => this.el = el }></table> 

              
            </div>
        );
    }
}