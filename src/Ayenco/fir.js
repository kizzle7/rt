import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios'
class Fir extends React.Component{
    state= {
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
        gfname: '',
        glname:'',
        gAddress: '',
        gcity: '',
        gstate: '',
        gnum: '',
        gemail: '',
        grelate:'',
        error: '',
        success: false

    }

    componentWillMount = () => {
        this.setState({
            bizname: this.props.location.state.bizname,
            rcnum: this.props.location.state.rcnum,
            tob: this.props.location.state.tob,
            num: this.props.location.state.num,
            dob: this.props.location.state.dob,
            pob: this.props.location.state.pob,
            country: this.props.location.state.country,
            gender: this.props.location.state.gender,
            mother: this.props.location.state.mother,
            email: this.props.location.state.email,
            id: this.props.location.state.id,
            idNo: this.props.location.state.idNo,
            address: this.props.location.state.address,
            city: this.props.location.state.city,
            state: this.props.location.state.state,
            nob: this.props.location.state.nob,
            token: this.props.location.state.token,
            bname: this.props.location.state.bname,
            bvn: this.props.location.state.bvn,
            account: this.props.location.state.account,
            agent: this.props.location.state.agent,
            kinfname: this.props.location.state.kinfname,
            kinlname: this.props.location.state.kinlname,
            kinAddress: this.props.location.state.kinAddress,
            kinCity: this.props.location.state.kinCity,
            kinState: this.props.location.state.kinState,
            kinNum: this.props.location.state.kinNum,
            company: this.props.location.state.company,
            rcNum: this.props.location.state.rcNum,
            code: this.props.location.state.code,
            phone: this.props.location.state.phone,
            token: this.props.location.state.token

        })

    }

    prev = (e) => {
        e.preventDefault();
        this.props.history.push('/firs')
    }
    onChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    
    }
    submit = (e) => {
        e.preventDefault();
        const info = this.state;
        console.log(this.state)
            axios.post(`http://127.0.0.1:8000/api/eco`,info,{
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
                error: true
            })
            setTimeout(() => {
                this.setState({
                    error: false
                })
            },2000)
            
        })

        }
       
        
       

    

    render(){
        console.log(this.state.length)
     
        return(
            <>
             <div className="nav2">
                    <h4 className="text-center text-white">ECOSYSTEM ACCRELEX</h4>
                    <p className="text-center">REGISTRATION FORM</p>
                </div>
                  {this.state.error && <p className="alert alert-danger text-center">Please Fill Out the Forms</p>}
                
               
                <div className="container mt-3 pt-3">
                    <form className="">
                        <div className="row">
                            <div className="col-md-6">
                        <p className="text-info font-weight-bold">GUARANTOR INFORMATION</p>
                    
                        <div className="form-group">
                        <label>FIRST NAME</label>
                            <input type="text" name="gfname" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>LAST NAME</label>
                            <input type="text" name="glname" className="form-control" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>RESIDENTIAL ADDRESS</label>
                            <input type="text" name="gAddress" className="form-control" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>CITY/TOWN</label>
                            <input type="text" name="gcity" className="form-control" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>STATE</label>
                            <input type="text" name="gstate" className="form-control" onChange={this.onChange}  />
                        </div>

                            </div>
                            <div className="col-md-6">
                                <br />
                            <div className="form-group pt-3">
                        <label>MOBILE NUMBER</label>
                            <input type="text" name="gnum" className="form-control" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>EMAIL</label>
                            <input type="text" name="gemail" className="form-control" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>NATURE OF RELATIONSHIP</label><br />
                        <input type="text" name="grelate" className="form-control" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label className="text-danger">UPLOAD YOUR PASSPORT IMAGE( LESS THAN 10KB) </label><br />
                        </div>
                        <input type="file" className="file-control" />
                       
                       
                        

                    

                            </div>
                        </div>
                        <div class="d-flex justify-content-end align-content-center">
                        
                        <button className="btn btn- btn-info" onClick={this.submit}>SUBMIT</button>
                        </div>
                       
                       
                    </form>
                
                    
                </div>
            </>

        )

    }
}
export default Fir

