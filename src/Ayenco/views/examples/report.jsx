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

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.jsx";
import axios from 'axios';
import Spinner from 'react-loader-spinner';

class Customers extends React.Component {

  state = {
    report : []
  }
  componentWillMount = () => {
    const token= sessionStorage.getItem('token');
    axios.get(`http://127.0.0.1:8000/api/customers`,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res)=> {
      this.setState({
        report : res.data.customers
      })
    }).
    catch((err)=>{
      console.log(err)
    })
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Report</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Highest Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col">Completion</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                        <tr >
                    <td>6</td>
                         <td>ho</td>
                         <td>
                           <Badge color="" className="badge-dot mr-4">
                             <i className="bg-success" />
                             Approved
                           </Badge>
                         </td>
                         
                         <td>
                           <div className="d-flex align-items-center">
                             <span className="mr-2">100%</span>
                             <div>
                               <Progress
                                 max="100"
                                 value="100"
                                 barClassName="bg-success"
                               />
                             </div>
                           </div>
                         </td>
                         </tr>
                     
                   
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
         
        </Container>
      
        <div className="text-center pt-4">
          <Spinner type="Bars" />
        </div>

      </>
    );
  }
}

export default Customers;
