import React from 'react';
import {Redirect,Link} from 'react-router-dom';
import axios from 'axios';
import Token from './token'
class First extends React.Component{
    state = {
        email: "abim3@gmail.com",
        password: "olatomide",
        bizname: '',
        rcnum: '',
        tob:'',
        num:'',
        dob:'',
        pob:'',
        country:'',
        gender:'',
        mother: '',
        email: '',
        id:'',
        idNo:'',
        address:'',
        city: '',
        state: '',
        nob:'',
        token: ''
    }

    next = (e) => {
        e.preventDefault();
        this.props.history.push('/firs')

    }

    onChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        

    }
    componentWillMount = () => {
        const post = {
            email: 'abim3@gmail.com',
            password: 'olatomide'
        }
        console.log(post)
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

    render(){
      
        return(
            <>
           
            <div>
                <div className="nav1">
                    <h4 className="text-center text-white">SEMBIC realNET Partners Form</h4>
                 
                </div>
               
            
                <div className="nav2">
                    <h4 className="text-center text-white">ECOSYSTEM ACCRELEX</h4>
                    <p className="text-center">REGISTRATION FORM</p>
                </div>
               

                <div className="container mt-3 pt-3">
                <div className="text-center text-info">
                <p>To apply for a working capital loan from Sembic please fill out the form below. Information submitted will be used to determine your eligibility for the loan amount requested. Please note the following information will be required to complete the submission process;
i) Bank Account Details.
ii) BVN for Business Owner.
iii) Copy of ID Card (i.e. International Passport, National ID Card, Voters Card, or Drivers License).
iv) Copy of 6 months Bank Statements for main business account.
v) Details of any existing loan.
Questions related to the form can be sent via email to customercare@uvlot.com or via WhatsApp to 09073333484 or 08062750890</p>
                    
                    </div>
                    <br/>
                    <p className="text-left text-success font-weight-bold h6">Instructions: Please fill the form in BLOCK letters only. All fields with ‘*’ are mandatory.</p>
                    <form className="pt-4">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                            <label><span className="text-danger">*</span> BUSINESS/AGENT NAME</label>
                            <input type="text" name="bizname" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> RC NUMBER (FOR CORPORATE)</label>
                            <input type="text" name="rcnum" className="form-control" onChange={this.onChange} />
                        </div>
                                                <div className="form-group">
                        <label><span className="text-danger">*</span> TYPE OF BUSINESS</label><br />
                            <select name="tob" class="form-control form-control-sm" onChange={this.onChange}>
                            <option value="">Select Type Of Bussiness</option>
                                <option value="">Sole Proprietorship</option>
                                <option>Partnership</option>
                                <option>Limited Liability Company</option>
                                <option>Plc</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> MOBILE NUMBER</label>
                            <input type="text" name="num" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>DATE OF BIRTH</label>
                        <p>Enter DOB in the format 01/01/2020</p>
                            <input type="text" name="dob" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>PLACE OF BIRTH</label>
                            <input type="text" name="pob" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>NATIONALITY</label>
                            <input type="text" name="country" className="form-control" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>GENDER</label>
                        <select name="gender" class="form-control form-control-sm" onChange={this.onChange}>
                        <option>Select Gender</option>
                        <option value="d">Male</option>
                        <option>Female</option>
                        </select>
                          
                        </div>
                        

                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                        <label>MOTHERS MAIDEN NAME</label>
                            <input type="text" name="mother" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> EMAIL</label>
                            <input type="text" name="email" className="form-control" onChange={this.onChange} />
                        </div>
                        
                        <div className="form-group">
                        <label><span className="text-danger">*</span> IDENTIFICATION TYPE</label><br />
                            <select name="id" class="form-control form-control-sm" onChange={this.onChange}>
                                <option value="d">Select Identification Type</option>
                                <option value="d">International Passport</option>
                                <option>Driver License</option>
                                <option>Voters Crad</option>
                                <option>National ID</option>
                            </select>
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> ID NO</label>
                            <input type="text" name="idNo" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> RESIDENTIAL ADDRESS</label>
                            <input type="text" name="address" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> CITY/TOWN</label>
                            <input type="text" name="city" className="form-control" onChange={this.onChange} />
                        </div>
                         <div className="form-group">
                        <label><span className="text-danger">*</span> STATE</label>
                            <input type="text" name="state" className="form-control" onChange={this.onChange} />
                        </div>
                       
                        <div className="form-group">
                        <label><span className="text-danger">*</span> NAME OF BANK</label>
                            <input type="text" name="nob" className="form-control" onChange={this.onChange} />
                        </div>
                        <div class="d-flex justify-content-end align-content-center">
                        <Link to={{pathname: `/form2`, state: this.state}}><button className="btn btn- btn-info">Next</button></Link>
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
export default First

