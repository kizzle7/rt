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
import { Link } from "react-router-dom";
import axios from 'axios';
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
import {Redirect} from 'react-router-dom'
import Header from "../Headers/Header.jsx";
import Mod from '../../views/examples/propsModifier';

class AdminNavbar extends React.Component {

  state = {
    logout : false,
    user: []
  }


  componentWillMount = () => {
    const token = sessionStorage.getItem('token')
    axios.get(`http://127.0.0.1:8000/api/profile`,{
      headers: {
        Authorization :  `Bearer ${token}`
      }

    }).
    then((res)=> {
      this.setState({
        user : res.data.user
      });

    }).
    catch((err)=> {
      sessionStorage.setItem('token','')
      this.props.history.push('/login')
    })
  }

  logout = (e) => {
    e.preventDefault();
    const token= sessionStorage.getItem('token')
    axios.get(`http://127.0.0.1:8000/api/logout`,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res) => {
      sessionStorage.setItem('token','');
      this.setState({
        logout: true
      })
    }).
    catch((err)=> {
      console.log(err)
      sessionStorage.setItem('token','')
      this.props.history.push('/login')
      
    });
      
      
  
  }
  render() {
    if(this.state.logout){
      return(
        <Redirect to="/login" />
      )
    }

    if(!sessionStorage.getItem('token')){
      return(
        <Redirect to="/login" />
      )
    }
   
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText ? this.props.brandText : "CUSTOMERS_PROFILE"}
            </Link>
           
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {this.state.user.name}
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.logout}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
        
      
      </>
    );
  }
}

export default AdminNavbar;
