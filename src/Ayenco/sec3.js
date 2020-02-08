import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Seconda extends React.Component{
    state = {
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
        token:'',
        address:'',
        street: '',
        bstop: '',
        city: '',
        lga: '',
        state:'',
        bizInfo: '',
        bizStreet: '',
        bizStop: '',
        bizCity: '',
        bizLga: '',
        bizState:'',
        aggCode:'',
        aggName:'',
        code:'',
        rNum: '',
        kinName: '',
        kinAddress: '',
        kinfone: '',
        pep: '',
        rpep: '',
        error: false,
        success: false

    }

    componentWillMount = () => {
        this.setState({
            phone: this.props.location.state.phone,
            network: this.props.location.state.network,
            fname: this.props.location.state.fname,
            lname: this.props.location.state.lname,
            mname: this.props.location.state.mname,
            gender: this.props.location.state.gender,
            dob: this.props.location.state.dob,
            moi: this.props.location.state.moi,
            id: this.props.location.state.id,
            email: this.props.location.state.email,
            biz: this.props.location.state.biz,
            pocm: this.props.location.state.pocm,
            bname: this.props.location.state.bname,
            account: this.props.location.state.account,
            bvn: this.props.location.state.bvn,
            token: this.props.location.state.token,
            address:this.props.location.state.address,
            street: this.props.location.state.street,
            bstop: this.props.location.state.bstop,
            city: this.props.location.state.city,
            lga: this.props.location.state.lga,
            state: this.props.location.state.state,
            bizInfo: this.props.location.state.bizInfo,
            bizStreet: this.props.location.state.bizStreet,
            bizStop: this.props.location.state.bizStop,
            bizCity: this.props.location.state.bizCity,
            bizLga: this.props.location.state.bizLga,
            bizState: this.props.location.state.bizState,
            aggCode: this.props.location.state.aggCode,
            aggName: this.props.location.state.aggName,
            code: this.props.location.state.code,
            rNum: this.props.location.state.rNum
        })
    }

    prev = (e) => {
        e.preventDefault();
        this.props.history.push('seci')

    }

    submit = (e) => {
        e.preventDefault();
      
            console.log(this.state)
            const info = this.state;
          
            axios.post(`http://127.0.0.1:8000/api/poc`,info, {
                headers: {
                    Authorization: `Bearer ${this.state.token}`
                }
            }).
            then((res) => {
                console.log(res.data)
                this.props.history.push('/thanks');
                
               
            }).
            catch((err) => {
                this.setState({
                    success: true
                })
                setTimeout(() => {
                    this.setState({
                        error: false
                    })
                },2000)
    
            })


       
    }
   

    onChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        

    }



    render(){
       
       
        return(
            <>
            <div className="nav2">
            <h4 className="text-center text-white">POCKETMONI AGENT</h4> 
                    <p className="text-center font-weight-bold">REGISTRATION FORM</p>
                </div>
                {this.state.error && <p className="alert alert-danger text-center">Please Fill Out the Forms</p>}
                
                <div className="container mt-3 pt-3">
                    <form className="">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-info font-weight-bold">NEXT OF KIN INFORMATION</p>
                            <div className="form-group">
                            <label>FULL NAME</label>
                            <input type="text" className="form-control" name="kinName" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>NEXT OF KIN PHONE NUMBER</label>
                            <input type="text" className="form-control" name="kinfone" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>NEXT OF KIN FULL ADDRESS</label><br />
                            <textarea className="form-control" name="kinAddress" onChange={this.onChange} ></textarea>
                        </div>
                        <p className="text-info font-weight-bold">AUTHENTICATION FOR POLITICALLY EXPOSED PEOPLE(PEP)</p>
                        <div className="form-group">
                        <label>ARE YOU A POLITICALLY EXPOSED PERSON?</label>
                            <select name="pep"  class="form-control form-control-sm" onChange ={this.onChange}>
                                <option></option>
                                <option>YES</option>
                                <option>NO</option>
                             
                            </select>
                        </div>
                        <div className="form-group">
                        <label>ARE YOU RELATED TO ANY POLITICAL PERSON?</label>
                
                            <select name="rpep"  class="form-control form-control-sm" onChange ={this.onChange}>
                                <option></option>
                                <option>YES</option>
                                <option>NO</option>
                             
                            </select>
                        </div>
                        <div className="form-group">
                        <label className="text-danger">UPLOAD YOUR PASSPORT IMAGE( LESS THAN 10KB) </label><br />
                        </div>
                        <input type="file"  className="file-control" />
                       
                        <div class="d-flex justify-content-end align-content-center">
               
                        <button className="btn btn- btn-info" onClick={this.submit}>SUBMIT</button>
                        </div>    

                            </div>
                        </div>
                       
                       
                    </form>
                
                    
                </div>
            </>

        )

    }
}
export default Seconda

