import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const info = {
    email:  'abim3@gmail.com',
    password: 'olatomide'
}
class Upload extends React.Component{


    cashnow = (e) =>{
        e.preventDefault();
        this.props.history.push('/cashnow')

    }

    pocketmoni = (e) => {
        e.preventDefault();
        this.props.history.push('/pocket_form1')

    }

    accrelex = (e) => {
        e.preventDefault();
        this.props.history.push('/form1')

    }

    
    



    render(){
        return(
            <>
       
                
                <div className="container mt-5 pt-2 d-flex jusify-content-center align-item-center">
                
                    <div className="d-flex justify-content-center align-items-center">
    
                        <div className="col-md-10 offset-1" >
                        <h4 className="text-center text-primary">SEMBIC REALNET PARTNERS FORMS.</h4>
                        <div className="col-md-12 mt-5">
                        <div class="row text-center">
                        
                        <div className="col-md-4 pb-4">
                        <button className="btn btn-lg btn-success text-center" onClick={this.cashnow} >CASHNOWNOW <br />LOAN</button>
                        </div>
                        <div className="col-md-4 pb-2">
                        <button className="btn btn-lg btn-info text-center " onClick={this.accrelex}>ACCRELEX REGISTRATION</button>

                        </div><br />
                        <div className="col-md-4">
                        <button className="btn btn-lg btn-danger text-center " onClick={this.pocketmoni}>POCKETMONI REGISTRATION</button>


                        </div>
                        
                    </div>

                        </div>
                      
                            
                        </div>
                    </div>
                </div>
            </>

        )

    }
}
export default Upload

