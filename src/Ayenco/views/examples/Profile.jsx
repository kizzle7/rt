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

  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,Label 
} from "reactstrap";
// core components
import UserHeader from "../../components/Headers/UserHeader.jsx";
import Spinner from 'react-loader-spinner';
import axios from "axios";
import {Redirect} from 'react-router-dom';

class Profile extends React.Component {
  state = {
    profile : this.props.location.state,
    fname: null,
    lname: null,
    email: null,
    address: null,
    income: null,
    statusLoader: false,
    msg: false,
    blank: false
  }

  

  onChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })

  }

  update = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token')
    const details = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      address: this.state.address,
      income: this.state.income,
    }
    if (this.state.fname || this.state.lname || this.state.email || this.state.address || this.state.income){
      this.setState({
        statusLoader : true
      })
      axios.put(`http://127.0.0.1:8000/api/customer_edit/` + this.state.profile.id, details,{
        headers: {
          Authorization : `Bearer ${token}`
        }
      }).
      then((res)=> {
        console.log(res.data)
        this.props.history.push('/admin/existing_customers')
      })
    }
    else{
      this.setState({
        blank: true
      })
      setTimeout(()=>{
        this.setState({
          blank: false
        })
      },900)
    }


  }
  dashboard = (e) => {
    e.preventDefault();
    this.props.history.push('/')

  }

  

  render() {
    return (
      <>
        <UserHeader name={this.state.profile.firstName + ' ' + this.state.profile.lastName} />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/user.png")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={this.toggle}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      {this.state.profile.firstName + ' ' + this.state.profile.lastName }
                      
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {this.state.profile.Address}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    
                    
                  </div>
                </CardBody>
              </Card>
            </Col>

            
   
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={this.dashboard}
                        size="sm"
                      >
                       Dashboard
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="text-center pt-2 pb-3">
                    {this.state.statusLoader && <Spinner type="TailSpin" height={50} width={60} /> }
                  
                    </div>
                    
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              FirstName
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={this.state.profile.firstName}
                              id="input-username"
                              name="fname"
                              type="text"
                              onChange ={this.onChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              name="email"
                              defaultValue={this.state.profile.email}
                              type="email"
                               onChange ={this.onChange}
                              
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              LastName
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={this.state.profile.lastName}
                              name="lname"
                              id="input-first-name"
                              onChange ={this.onChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Budget Income
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={this.state.profile.Income}
                              id="input-last-name"
                              name="income"
                              onChange ={this.onChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={this.state.profile.Address}
                              id="input-address"
                              name="address"
                              onChange ={this.onChange}
                              type="text"
                            />
                          </FormGroup>
                          <Button
                          color="info"
                          
                          onClick={this.toggleModal}
                          className="mt-0"
                          onClick={this.update}
                          >
                          Update Profile
                          </Button>
                
                    </div>
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
