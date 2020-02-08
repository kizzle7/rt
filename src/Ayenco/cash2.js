import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
class Casha extends React.Component{
    state = {
        email: "abim3@gmail.com",
        password: "olatomide",
        phone: '',
        network:'',
        fname: '',
        lname: '',
        mname: '',
        gender: '',
        dob: '',
        moi: '',
        id: '',
        email: '',
        biz: '',
        pocm: '',
        bname: '',
        account: '',
        bvn: '',
        token: ''
    }

    componentWillMount = () => {
        const post = {
            email: 'abim3@gmail.com',
            password: 'olatomide'
        }
        axios.post(`http://127.0.0.1:8000/api/login`,post).
        then((res) => {
            console.log(res.data);
            this.setState({
                token: res.data.token
            })
        }).
        catch((err) => {
            console.log(err)
        })
    }

    next = (e) => {
        e.preventDefault();
        
        if(this.state){
            this.props.history.push('/seci')
        }
        else{
            console.log('alaaye')

        }

    }

    onChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        
    }

    render(){
        console.log(this.state)
        return(
            <>
  
            <div>
                     <div className="nav1">
                    <h4 className="text-center text-white">SEMBIC realNET Partners Form</h4>
                 
                </div>
            <div className="nav2">
                    <h4 className="text-center text-white">CASHNOWNOW LOAN</h4> 
                    <p className="text-center font-weight-bold">REGISTRATION FORM</p>
                </div>
                <div className="container mt-3 pt-3">
                      <div className="text-center text-primary">
                <p>To apply for a working capital loan from Sembic please fill out the form below. Information submitted will be used to determine your eligibility for the loan amount requested. Please note the following information will be required to complete the submission process;
                    i) Bank Account Details.
                    ii) BVN for Business Owner.
                    iii) Copy of ID Card (i.e. International Passport, National ID Card, Voters Card, or Drivers License).
                    iv) Copy of 6 months Bank Statements for main business account.
                    v) Details of any existing loan.
                    Questions related to the form can be sent via email to customercare@uvlot.com or via WhatsApp to 09073333484 or 08062750890</p>
                    
                    </div>
                    <br />
                    <form className="">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                            <label>MOBILE NUMBER</label>
                            <input type="text" name="phone" className="form-control" onChange ={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>NETWORK PROVIDER</label>
                            <input type="text" name="network" className="form-control" onChange ={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>FIRSTNAME</label><br />
                        <input type="text" name="fname" className="form-control" onChange ={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>LASTNAME</label>
                            <input type="text" name="lname" className="form-control" onChange ={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>MIDDLENAME</label>
                            <input type="text" name="mname"className="form-control" onChange ={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>GENDER</label>
                        <select name="gender"  class="form-control form-control-sm" onChange ={this.onChange}>
                                <option value="d">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label>DATE OF BIRTH</label>
                        <p>Enter DOB in the form 01/01/2020</p>
                            <input type="text" name="dob" className="form-control" onChange ={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>MEANS OF IDENTIFICATION</label>
                        <select name="moi"  class="form-control form-control-sm" onChange ={this.onChange}>
                                <option>Means of Identification</option>
                                <option>International Passport</option>
                                <option>Driver License</option>
                                <option>Voters Crad</option>
                                <option>National ID</option>
                            </select>
                        </div>

                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                        <label>IDENTITY NUMBER</label>
                            <input type="text" name="id" className="form-control" onChange ={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>EMAIL</label>
                            <input type="text" name="email" className="form-control" onChange ={this.onChange} />
                        </div>
                       
                        <div className="form-group">
                        <label>OCCUPATION/BUSSINESS TYPE</label>
                            <input type="text" name="biz" className="form-control" onChange ={this.onChange} />
                        </div>
                       
                        <div className="form-group">
                        <label>APPLICABLE BANK NAME</label>
                            <input type="text" name="bname" className="form-control" onChange ={this.onChange} />
                        </div>
                         <div className="form-group">
                        <label>ACCOUNT NUMBER</label>
                            <input type="text" name="account" className="form-control" onChange ={this.onChange} />
                        </div>
                       
                        <div className="form-group">
                        <label>BVN</label>
                            <input type="text" name="bvn" className="form-control" onChange ={this.onChange} />
                        </div>
                        <div class="d-flex justify-content-end align-content-center">
                        <Link to={{pathname: `/cash3`, state: this.state}}><button className="btn btn- btn-info">Next</button></Link>
                        </div>    

                            </div>
                        </div>
                       
                       
                    </form>
                
                    
                </div>

            </div>

             
            </>

        )

    }
}
export default Casha

