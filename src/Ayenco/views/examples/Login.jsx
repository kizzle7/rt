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
  Container,
  
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import Spinner from 'react-loader-spinner';
import axios from 'axios';
import {Switch,Redirect} from 'react-router-dom'
import AuthFooter from '../../components/Footers/AuthFooter'

class Login extends React.Component {
  state= {
    email: null,
    password: null,
    blank: false,
    loader: false,
    api: false,
    route: false
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

  signUp = (e) => {
    e.preventDefault();
    this.props.history.push('/register')

  }

  login = (e) => {
    e.preventDefault();
    const loginDetails = {
      email :  this.state.email,
      password: this.state.password
    }
    if(loginDetails.email && loginDetails.password){
      this.setState({
        loader : true
      })
      axios.post(`http://127.0.0.1:8000/api/login`,loginDetails).
      then((res) => {
        console.log(res.data.token)
        sessionStorage.setItem('token',res.data.token);
        this.setState({
          loader : false, route: true
        });
        


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
      console.log(loginDetails)
      
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
    if (this.state.route){
      return(
        <Redirect to="/" />
      )
    }
    if(sessionStorage.getItem('token')){
      return(
        <Redirect to="/" />
      )
    }
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
                      Please sign in your Admin Credentials
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
         
              <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0 pt-4">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <h4>Admin Sign In</h4>
              </div>
              <div className="btn-wrapper text-center">
                
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
            <CardBody className="px-lg-5 py-lg-5 pt-0">
              <div className="text-center text-muted mb-4 mt-1">
                <div>
                  {this.state.loader && <Spinner type="TailSpin" height={50} width={60} /> }
                  {this.state.blank && <p className="alert alert-danger"> Fields cant be blank</p> }
                  {this.state.api && <p className="alert alert-danger"> Wrong Credentials</p> }

                </div>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" onChange={this.onChange} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password"  name="password" onChange={this.onChange} />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={this.login}>
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={this.signUp}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
             
            </Row>
          </Container>
        </div>
        <AuthFooter />
        
      </>
    );
  }
}

export default Login;
