import {GET_LOAN_INTREST,REQUEST_STARTS,GET_INPUT_VALUES,
    PREFILL_INPUTS,API_RESPONSE_MESSAGE} from './types';
import axios from 'axios';


export const getInputValues = (data)=>{
    return {
        type:GET_INPUT_VALUES,
        data
    }
}
export const loanRequestStarts = () =>{
    return {
        type:REQUEST_STARTS
    }
}
export const calculatedLoanInterst = (data)=>{
    return {
        type:GET_LOAN_INTREST,
        data
    }
}
export const prefillAmountAndTeure = (amount,tenure)=>{
 let Input={
     amount,
     tenure
 }
 return{
     type:PREFILL_INPUTS,
     Input
 }
}
export const apiResponseMessage = (message)=>{
    return {
        type:API_RESPONSE_MESSAGE,
        message
    }
}

export const getLoanIntrest = (amount,tenure)=>{
    const loanApiUrl = "https://ftl-frontend-test.herokuapp.com/interest?"
    +'amount='+amount+'&numMonths='+tenure;
    return (dispatch)=>{
        dispatch(loanRequestStarts());
        return axios.get(loanApiUrl).then((res)=>{
            if(res.data&&res.data.principal&&res.data.numPayments){
                localStorage.setItem('amount',res.data.principal.amount);
                localStorage.setItem('tenure',res.data.numPayments)
                dispatch(calculatedLoanInterst(res.data));
            }else{
                dispatch(apiResponseMessage(res.data.message))
            }
        })
        .catch(error=>{
            console.log('error-catched');
        })
    }
}