import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Loader from './Loader';

class Quote extends Component {
    render() {
        return (
            <div className="row result-data">
                {
                    this.props.loading? <Loader/>:null
                }
                {
                    this.props.result.interestRate?
                    <div className="col-md-12 col-12 col-sm-12 col-sm-12">
                        <h5>Result</h5>
                        <hr/>
                        <p><b>Intrest rate</b>: {this.props.result.interestRate}</p>
                        <p><b>Monthly payment</b>: {this.props.result.monthlyPayment.amount}</p>
                    </div>:
                    null
                }
                { 
                this.props.errorMessage?
                  <div className="col-md-12 col-12 col-sm-12 col-sm-12">
                   <p>{this.props.errorMessage}</p>
                 </div>:null
                }
               
            </div>
        );
    }
}
export const mapStateToProps = state =>{
    return {
        loading:state.loanReducer.loading,
        result:state.loanReducer.loanIntrest,
        errorMessage:state.loanReducer.requestMessgae
    }
}
Quote.propTypes ={
    loading:PropTypes.bool,
    result:PropTypes.array,
    errorMessage:PropTypes.string

}
Quote.defaultProps = { 
    loading:false,
    result:[],
    errorMessage:""
};
export default connect(mapStateToProps,{})(Quote);