import React from 'react';
import {Redirect,Link} from 'react-router-dom';
const email="abimbolavictor3@gmail.com";
const password = "olatomide";

class Firs extends React.Component{
    state = {
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
        token: '',
        bname: '',
        bvn: '',
        account:'',
        agent:'',
        kinfname:'',
        kinlname:'',
        kinAddress:'',
        kinCity:'',
        kinState: '',
        kinNum: '',
        company:'',
        rcNum:'',
        code:'',
        phone: '',
    
  
    }

    componentWillMount = () => {
        console.log(this.props)
        this.setState({
            bizname:this.props.location.state.bizname,
            rcnum:this.props.location.state.rcnum,
            tob:this.props.location.state.tob,
            num:this.props.location.state.num,
            dob:this.props.location.state.dob,
            pob:this.props.location.state.pob,
            country:this.props.location.state.country,
            gender:this.props.location.state.gender,
            mother:this.props.location.state.mother,
            email:this.props.location.state.email,
            id:this.props.location.state.id,
            idNo:this.props.location.state.idNo,
            address:this.props.location.state.address,
            city:this.props.location.state.city,
            state:this.props.location.state.bizname,
            nob:this.props.location.state.bizname,
            token: this.props.location.state.token,

        })
    }

    next = (e) => {
        e.preventDefault();
        this.props.history.push('/fir')
    }
    prev = (e) => {
        e.preventDefault();
        this.props.history.push('/first')
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
             <div className="nav2">
                    <h4 className="text-center text-white">ECOSYSTEM ACCRELEX</h4>
                    <p className="text-center">REGISTRATION FORM</p>
                </div>
                
                <div className="container mt-3 pt-3">
                    <form className="">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                            <label><span className="text-danger">*</span> BANK ACCOUNT NUMBER</label>
                            <input type="text" name="bname" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> BANK VERIFICATION NUMBER</label>
                            <input type="text" name="bvn" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> ACCOUNT TYPE</label><br />
                            <select name="account" class="form-control form-control-sm" onChange={this.onChange}>
                            <option value="d">Select Account Type</option>
                                <option value="d">Savings</option>
                                <option>Current</option>
                               
                            </select>
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> TYPE OF AGENT</label><br />
                        <select name="agent" class="form-control form-control-sm" onChange={this.onChange}>
                        <option value="d">Select Agent Type</option>
                                <option value="d">Direct Retail Agent</option>
                                <option>Sub Agent</option>
                               
                            </select>
                            
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> NEXT OF KIN FIRSTNAME</label>
                            <input type="text" name="kinfname" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> NEXT OF KIN LASTNAME</label>
                            <input type="text" name="kinlname" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> NEXT OF KIN ADDRESS</label>
                            <input type="text" name="kinAddress" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> NEXT OF KIN CITY/TOWN</label>
                            <input type="text" name="kinCity" className="form-control" onChange={this.onChange} />
                        </div>
                       

                            </div>
                          
                            
                            <div className="col-md-6">
                            <div className="form-group">
                        <label><span className="text-danger">*</span> NEXT OF KIN STATE</label>
                            <input type="text" name="kinState" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> NEXT OF KIN MOBILE NUMBER</label>
                            <input type="text" name="kinNum" className="form-control" onChange={this.onChange} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        
                        <p className="text-info font-weight-bold">TO BE FILLED BY AN AGGREGATOR</p>
                        <div className="pt-1">
                        <div className="form-group">
                        <label><span className="text-danger">*</span> COMPANY NAME</label>
                            <input type="text" name="company" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label><span className="text-danger">*</span> RC NUMBER</label>
                            <input type="text" name="rcNum" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>AGGREGATOR CODE/NUMBER</label>
                            <input type="text" name="code" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>REGISTERED MOBILE PHONE NUMBER</label>
                            <input type="text" name="phone" className="form-control" onChange={this.onChange} />
                        </div>
                        </div>
                        
                        
                    

                       

                       
                       

                            </div>
                        </div>
                        <div class="d-flex justify-content-end align-content-center mb-3">
                    
                        <Link to={{pathname: `/form3`, state: this.state}}><button className="btn btn- btn-info">Next</button></Link>
                       
                  
                        </div>
                       
                    </form>
                
                    
                </div>
            </>

        )

    }
}
export default Firs

