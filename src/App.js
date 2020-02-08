import React from "react";
import BookingCasts from "./BookingCasts";
import "./App.css";
import Posts from './Redux/posts'
import PostForm from './Redux/postData'
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import PropTypes from 'prop-types'
import {info} from './Redux/actions/postActions';

const token = sessionStorage.getItem('token');
class  App extends React.Component {
  state = {
    logout: false,
    user: []
  }

  componentWillMount = () => {
    this.props.info();
  }


  logout = (e) => {
    e.preventDefault();
 
    axios.get(`http://127.0.0.1:8000/api/logout`,{
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).
    then((res)=> {
      console.log(res.data)
         sessionStorage.setItem('token','')
      this.setState({
        logout: true
      })
    })
  }
 render(){
   
   if (this.state.logout){
     return(
      <Redirect to='/' />
     )
     
   }
   
   return(
     
     <>
     {this.props.data &&
     <div className="container">
       
     <h4 className="text-center font-weight-bold">{this.props.data.name}'s Blog</h4>
     <PostForm topname ="bankole" />
     <Posts token={token} />
  
     <div class="d-flex justify-content-end">
     <button className="btn btn-sm btn-danger" onClick={this.logout}>Logout</button> 
     </div>
 
     </div>
 }   
 
 
     </>
   
   )
 }
}
App.propTypes = {
  info: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
 
}
const mapStatetoProps =  state => ({
  data: state.logins.datas
})
export default connect(mapStatetoProps, {info})(App);
