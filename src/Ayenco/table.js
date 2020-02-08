//import './css/jquery.dataTables.css'
import 'datatables.net-dt/css/jquery.dataTables.css'
import React, {Component} from 'react'
//import App from "./App";

const $ = require('jquery')
$.DataTable = require('datatables.net');


export class Table extends Component {
    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                { title: "Bussiness Name" },
                { title: "RcNumber" },
                { title: "Type of Bussiness" },
                { title: "MobileNumber" },
                { title: "DOB" },
                { title: "POB" },
                { title: "Nationality" },
                { title: "Sex" },
                { title: "Maiden's Name" },
                { title: "Email" },
                { title: "ID Type" },
                { title: "Address" },
                { title: "City" },
                { title: "State" },
                { title: "Name of Bank" },
                { title: "Bank Account No" },
                { title: "Accnt Type" },
                { title: "Type of Agent" },
                { title: "Next Of kin Fname" },
                { title: "Next of Kin Lname" },
                { title: "Next of Kin Address" },
                { title: "Next of Kin City" },
                { title: "Next of Kin State" },
                { title: "Compnay Name" },
                { title: "CO Rc Number" },
                { title: "AGG Code" },
                { title: "Phone Number" },
                { title: "Guarantor Fname" },
                { title: "Guarantor Lname" },
                { title: "Guarantor Address" },
                { title: "Guarantor City" },
                { title: "Guarantor State" },
                { title: "Guarantor P.Number" },
                { title: "Guarantor Email" },
                { title: "Guarantor Relationship" }
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