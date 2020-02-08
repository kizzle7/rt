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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axios from 'axios';

import Spinner from 'react-loader-spinner'
import {Redirect} from 'react-router-dom';

class Header extends React.Component {

  state = {
    info : [],
    user: [],
    chartData : [],
    income: [],
    address: [],
    use : {}
  }
  componentWillMount = () => {
    const token = sessionStorage.getItem('token')
    axios.get(`http://127.0.0.1:8000/api/customers`,{
      headers: {
        Authorization : `Bearer ${token}`

      }
    }).
    then((res) => {
      this.setState({
        info : res.data
      })
    }).
    catch((err) => {
      return (
      <Redirect to = "/login" />
      )
    })

 

    const tok = sessionStorage.getItem('token');
    axios.get(` http://127.0.0.1:8000/api/users`,{
      headers : {
        Authorization : `Bearer ${tok}`
      }
    }).
    then((res) => {
      this.setState({
        user : res.data
      })

    }).
    catch((err) => {
      return (
        <Redirect to = "/login" />
        )
    })

   

   
  }
  
  render() {
    console.log(this.state.user.length)
    return (
      <>
  
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
         
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
             
              <Row>
              
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                     
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                           Customers
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.info.customerNum ? this.state.info.customerNum : <Spinner type="Oval" height={29} /> }
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            ADMINS 
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.user.num ? this.state.user.num : <Spinner type="Oval" height={29} /> }
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-users" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last week</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row className="pb-0">
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            INVESTMENTS
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">0</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-arrow-down" />
                          </div>
                        </Col>
                      </Row>
                      
                      
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" /> 1.10%
                        </span>{" "}
                        <span className="text-nowrap">Since yesterday</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            PERFORMANCE
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            0%
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" /> 12%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
  
              </Row>
      
            </div>
          </Container>
  
    
        </div>
  
      </>
    );
  }
}

export default Header;
