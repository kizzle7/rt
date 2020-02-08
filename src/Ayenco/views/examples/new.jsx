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
import axios from 'axios';



class NewCustomer extends React.Component {

  state= {
    modal: false,
    fname: null,
    lname: null,
    email: null,
    password: null,
    address: null,
    income: null,
    complete: false
  }

    toggleModal= (e) => {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal
        })
    
    }

    toggleAdd = (e) => {
      e.preventDefault();
      const token= sessionStorage.getItem('token');
      this.setState({
        modal: !this.state.modal
      })
      const details = {
        fname: this.state.fname,
        lname:this.state.lname,
        email:this.state.email,
        address: this.state.address,
        income: this.state.income
      }
      console.log(details)
      axios.post(`http://127.0.0.1:8000/api/customerModal`, details, {
        headers: {
          Authorization : `Bearer ${token}`
        }
      }).
      then((res) => {
        console.log(res.data);
        this.setState({
          complete : true
        })
        setTimeout(()=> {
          this.setState({
            complete: false
          })
        },2500)
      }).
      catch((err)=>{
        console.log(err)
      })

    }

    onChange = (e) => {
      const {name,value} = e.target;
      this.setState({
        [name]: value
      })

    }
    render(){
        return(
            <React.Fragment>
              
                  <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "700px",
            backgroundImage:
              "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign:'center'
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="" fluid>
            <Row>
              <Col className="text-center">
                <h1 className="display-2 text-white text-center">NEW CUSTOMER</h1>
                <p className="text-white mt-0 mb-5 text-center">
                 {this.state.complete ? 
                 <p className="alert alert-success">Customer Was Successfully Added</p> :
                  "Add New Customer"}
                </p>
                <Button
                  color="info"
                  onClick={this.toggleModal}
                  className="mt-0"
                >
                  Add Customer
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
       

      <Modal isOpen={this.state.modal} fade={false} toggle={this.toggleModal} className="">
        <ModalHeader toggle={this.toggleModal}>New Customer</ModalHeader>
        <ModalBody>
        <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Customer information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              FirstName
                            </label>
                            <Input
                              className="form-control-alternative"
                              type="text" name="fname" onChange={this.onChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              LastName
                            </label>
                            <Input
                              className="form-control-alternative"
                              type="text" name="lname" onChange={this.onChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Email Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              type="text" name="email" onChange={this.onChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                             Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              type="text" name="address" onChange={this.onChange}
                            />
                          </FormGroup>
                        </Col>
                         
                        <Col lg="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Income
                            </label>
                            <Input
                              className="form-control-alternative"
                              type="text" name="income" onChange={this.onChange}
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                        </div>
                        </Form>
         
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleAdd}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
   
            </React.Fragment>
        )
    }
}
 

export default NewCustomer;
