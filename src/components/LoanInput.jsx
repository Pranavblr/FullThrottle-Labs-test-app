import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Quote from '../components/Quote';
import {getLoanIntrest,getInputValues} from '../actions/loan';


class LoanInput extends Component {
    handleOnInputValuesChanges  = (event)=>{
        let data = {
            key :event.target.name,
            value:event.target.value
        }
        this.props.getInputValues(data);
    }
    handleClickGetQuote = ()=>{
        this.props.getLoanIntrest(this.props.loanAmount,this.props.loanTenure);
    }
    render() {
        return (
            <React.Fragment>
            <div className="row">
         
                <div className="col-md-3 col-lg-3 col-sm-3 col-12">
                    <div className="form-group">
                        <label htmlFor="username">Loan Amount</label>
                            <input
                                type="text"
                                className="form-control"
                                tabIndex="1"
                                id="amount"
                                name="amount"
                                placeholder="Enter loan amount"
                                autoFocus
                                value={this.props.loanAmount}
                                onChange={(event)=>{this.handleOnInputValuesChanges(event)}}
                                autoComplete="off"/>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3 col-12">
                    <div className="form-group">
                        <label htmlFor="username">Loan Tenure</label>
                            <input
                                type="text"
                                className="form-control"
                                tabIndex="2"
                                id="tenure"
                                name="tenure"
                                placeholder="Enter Tenure"
                                value={this.props.loanTenure}
                                onChange={(event)=>{this.handleOnInputValuesChanges(event)}}
                                autoFocus
                                autoComplete="off"/>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3 col-12">
                    <div className="form-group">
                      <button type="button"
                      disabled={this.props.loanAmount===''||this.props.loanTenure===''}
                       class="btn btn-primary"
                       onClick={()=>this.handleClickGetQuote()}>Get a quote
                     </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <Quote/>
            </div>
        </React.Fragment>
        );
    }
}
export const mapStateToProps=state=>{
    return{
     loanAmount:state.loanReducer.loanAmount,
     loanTenure:state.loanReducer.loanTenure
    }
}
LoanInput.propTypes ={
    loanAmount:PropTypes.number,
    loanTenure:PropTypes.number
}
LoanInput.defaultProps = { 
    loanAmount:"",
    loanTenure:""
};

export default connect(mapStateToProps,{getLoanIntrest,getInputValues})(LoanInput);