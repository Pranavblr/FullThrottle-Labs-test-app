import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {prefillAmountAndTeure,getLoanIntrest} from '../actions/loan';

class Sidebar extends Component {
    handleClickHistoryData = ()=>{
        let tenure = localStorage.getItem('tenure');
        let amount = localStorage.getItem('amount');
        this.props.prefillAmountAndTeure(amount,tenure);
        this.props.getLoanIntrest(this.props.loanAmount,this.props.loanTenure);
    }
    render() {
        return (
            <div className="side-bar">
                <ul className="sidebar-content">
                    <li onClick={()=>{this.handleClickHistoryData()}}>
                      <i class="fa fa-history"></i>History
                    </li>
                </ul>
            </div>
        );
    }
}
export const mapStateToProps=state=>{
    return{
     loanAmount:state.loanReducer.loanAmount,
     loanTenure:state.loanReducer.loanTenure
    }
}
Sidebar.propTypes ={
    loanAmount:PropTypes.number,
    loanTenure:PropTypes.number
}
Sidebar.defaultProps = { 
    loanAmount:"",
    loanTenure:""
};

export default connect(mapStateToProps,{prefillAmountAndTeure,getLoanIntrest})(Sidebar);