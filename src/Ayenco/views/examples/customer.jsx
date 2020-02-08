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
import {Link} from 'react-router-dom';
import Spinner from 'react-loader-spinner';

class Customers extends React.Component {
  state = {
    details : [],
    wait: false,
    status: false

  }

  componentWillMount = () => {
    this.refresh();

  }

  refresh = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`http://127.0.0.1:8000/api/customers`,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res)=> {
  
      this.setState({
        details : res.data.customers
      })
    }).
    catch((err) => {
      console.log(err)
    })
  }

  remove = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/customer/${id}`).
    then((res)=> {
      this.setState({
        status: true
      })
      setTimeout(()=>{
        this.setState({
          status: false
        })
      },1000)
      this.refresh();
    
    })
   


  }
  render() {
  
    return (
      <>
      
        <Header />
        {this.state.details.length !== 0 ?   
        
        <Container className="mt--7" fluid>
       
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Existing Customers</h3>
                  {this.state.status  && <p class="text-center alert alert-danger col-md-4 offset-4">User Deleted</p>}
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Email</th>
                      <th scope="col">Income</th>
                      <th scope="col">Completion</th>
                      <th scope="col">Admin Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.details.map((detail) => {
                      return (
                        <tr key={detail.id}>
                    <Link to={{pathname: `/customer_profile/${detail.firstName + "_" + detail.lastName}` , state: detail}}><td>{detail.firstName +' '+  detail.lastName}</td></Link>
                      <td>{detail.Address}</td>
                      <td>{detail.email}</td>
                    <td>{detail.Income}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                        
                            <DropdownItem
                              href="#pablo"
                              onClick={this.remove.bind(this,detail.id)}
                            >
                              Delete Customer
                            </DropdownItem>
                            
                           
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                        
                      )
                    })}
                    
                   
                
                  </tbody>
                </Table>
               
              </Card>
            </div>
          </Row>
          
         
         
        </Container>
        : 
        <div className="text-center pt-5">
           <Spinner type="Bars" />
        </div>
       
        }
  
      </>
    );
  }
}

export default Customers;
