import React from 'react';
import Spinner from 'react-loader-spinner';
class Token extends React.Component{
    state ={
        spin: true
    }
    render(){
        return(
            <>
            <div className="text-center mt-5">
            <Spinner type="Puff" width="60%" />
            </div>
            </>
        )
    }
}
export default Token;