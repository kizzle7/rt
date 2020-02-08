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
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Container,
  Col
} from "reactstrap";
import AuthFooter from '../../components/Footers/AuthFooter'
import axios from 'axios';
import Spinner from 'react-loader-spinner'

class Register extends React.Component {
  state= {
    email: null,
    fname: null,
    password: null,
    name: '',
    blank: false,
    loader: false,
    api: false,
    route: false,
    msg: false,
    firstMsg : true
  }
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  onChange=(e) => {
    const {name,value} = e.target;
    this.setState({
      [name] :  value
    })

  }

  register = (e) => {

    e.preventDefault();
    this.setState({
      firstMsg : false
    })
    const details  = {
      email: this.state.email,
      fname: this.state.fname,
      password: this.state.password
    }
    console.log(details)
    if(this.state.email && this.state.password && this.state.fname){
      this.setState({
        loader : true
      })
      axios.post(`http://127.0.0.1:8000/api/register`,details).
      then((res) => {
        console.log(res.data)
        this.setState({
          loader : false, route: true, msg: true,name :res.data.storeUser.name
        });
        setTimeout(()=>{
          this.setState({
            msg: false
          })
          this.props.history.push('/login')
        },4000)     
      }).
      catch((err)=> {
        this.setState({
          api: true, loader: false
        })
        setTimeout(()=>{
          this.setState({
            api:false
          })
        },800)
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
      },800)
    }

  }
  render() {
   
    return (
      <>
        <div className="main-content">
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">Welcome!</h1>
                    <p className="text-lead text-light">
                      Sign Up for Admin Priviledges
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
            <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <h4>Admin Sign up</h4>
              </div>
              <div className="text-center">
                
                  <span className="btn-inner--icon">
                  <img
                      alt="..."
                      className="rounded-circle"
                      width="10%"
                      src={require("../../assets/img/theme/user.png")}
                    />
                  </span>
                  
               
                
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
    {this.state.firstMsg  && <p className="text-center"> Please Kindly Input the following fields</p>} 
              {this.state.loader && <Spinner type="TailSpin" height={50} width={60} /> }
              {this.state.blank && <p className="alert alert-danger"> Fields cant be blank</p> }
              {this.state.api && <p className="alert alert-danger"> Email/Username already existed</p> }
              {this.state.msg && <p className="alert alert-success">Hi {this.state.name}, Your Admin Account was created successfully<br />...Redirecting to login page.</p> }
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" name="fname" type="text" onChange={this.onChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email"  onChange={this.onChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" name="password" onChange={this.onChange} />
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    password strength: {}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={this.register}>
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
            </Row>
          </Container>
        </div>
        <AuthFooter />
        
      </>
    );
  }
}

export default Register;
