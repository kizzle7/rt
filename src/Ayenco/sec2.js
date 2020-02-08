import React from 'react';
import {Redirect,Link} from 'react-router-dom';


class Secondi extends React.Component{

    state= {
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
        rNum: ''
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
        })
    }

    next = (e) => {
        e.preventDefault();
        this.props.history.push('/seca')

    }
    prev = (e) => {
        e.preventDefault();
        this.props.history.push('/sec')

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
            <h4 className="text-center text-white">POCKETMONI AGENT</h4> 
                    <p className="text-center font-weight-bold">REGISTRATION FORM</p>
                </div>
                
              
                <div className="container mt-3 pt-3">
                    <form className="">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-info font-weight-bold">RESIDENTIAL INFO</p>
                            <div className="form-group">
                            <label>ADDRESS</label>
                            <input type="text" name="address"  className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>STREET NAME</label>
                            <input type="text" name="street" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>NEAREST BUS/TOP</label><br />
                        <input type="text" name="bstop" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>CITY</label>
                            <input type="text" name="city" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>LGA</label>
                            <input type="text" name="lga" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>STATE</label>
                            <input type="text" name="state" className="form-control" onChange={this.onChange} />
                        </div>
                        <p className="text-info font-weight-bold">BUSSINESS INFO</p>
                        <div className="form-group">
                        <label>ADDRESS</label>
                            <input type="text" name="bizInfo" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>STREET NAME</label>
                            <input type="text" name="bizStreet" className="form-control" onChange={this.onChange} />
                        </div>

                            </div>
                            <div className="col-md-6 mt-4 pt-2">
                                
                            <div className="form-group">
                                
                        <label>NEAREST BUSTOP</label>
                            <input type="text" name="bizStop" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>CITY</label>
                            <input type="text" name="bizCity" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>LGA</label><br />
                        <input type="text" name="bizLga" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                        <label>STATE</label>
                            <input type="text" name="bizState" className="form-control" onChange={this.onChange} />
                        </div>
                        <p className="text-info font-weight-bold">OTHER INFORMATIONS</p>
                        <div className="form-group">
                        <label>AGGREGATOR'S NAME</label>
                            <input type="text" className="form-control" name="aggName" onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                        <label>AGGREGATOR'S CODE</label>
                            <input type="text" className="form-control" name="aggCode" onChange={this.onChange} />
                        </div>
                         <div className="form-group">
                        <label>REFFERAL CODE</label>
                            <input type="text" className="form-control" name="code" onChange={this.onChange} />
                        </div>
                       
                        <div className="form-group">
                        <label>REFFERAL NUMBER</label>
                            <input type="text" className="form-control" name="rNum" onChange={this.onChange} />
                        </div>
                           

                            </div>
                        </div>
                        <div class="d-flex justify-content-end align-content-center">
                    
                        <Link to={{pathname: `/pocket_form3`, state: this.state}}><button className="btn btn- btn-info">Next</button></Link>
                        </div>
                       
                       
                    </form>
                
                    
                </div>
            </>

        )

    }
}
export default Secondi

