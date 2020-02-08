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

import classnames from "classnames";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import axios from 'axios'
import Spinner from 'react-loader-spinner'
import {Redirect } from 'react-router-dom'
import Header from "../components/Headers/Header.jsx";
const testi = [1,2,3,4];
class Index extends React.Component {


  
  state = {
    raw : [],
    activeNav: 1,
    chartExample1Data: "data1",
    customers :  [],
    addressRaw : [],
    dataa: [],
    address: [],
    use : {}
  
  };

  componentWillMount() {
    this.refresh();
  

    const tokee = sessionStorage.getItem('token')
    axios.get(`http://127.0.0.1:8000/api/profile`,{
      headers: {
        Authorization :  `Bearer ${tokee}`
      }

    }).
    then((res)=> {
      this.setState({
        use : res.data.user.name
      });

    }).
    catch((err)=> {
      //
    })
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
        customers : res.data.customers, raw: res.data.customers, addressRaw: res.data.customers
      })
    
    }).
    catch((err) => {
      console.log(err)
    })
  }
  
  render() {
   
    return (
      <>
      <div>
 
        <Header />
  
      
  
        <Container className="mt--7" fluid>
          
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Top Customers In System</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
             
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Customers name</th>
                      <th scope="col">Income</th>
                      <th scope="col">Date Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                    
                    
                  </tbody>
                </Table>
               
  
              </Card>
            </Col>
           
         
          </Row>
        </Container>

  
  </div>
      </>
    );
  }
}

export default Index;
