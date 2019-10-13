import {GET_LOAN_INTREST,REQUEST_STARTS,GET_INPUT_VALUES
    ,PREFILL_INPUTS,API_RESPONSE_MESSAGE} from '../actions/types';

let initialState={
    loanAmount:'',
    loanTenure:'',
    loading:false,
    loanIntrest:[],
    requestMessgae:''
}
export default function loanReducer(state=initialState,action){
    debugger
    switch(action.type){
        case GET_INPUT_VALUES:
            if(action.data.key==='amount'){
                return{
                    ...state,
                    loanAmount:action.data.value,
                }
            }
            else if(action.data.key="tenure"){
                return{
                    ...state,
                    loanTenure:action.data.value
                }
            }
        case REQUEST_STARTS:
            return {
                ...state,
                loading:true

            }
        case GET_LOAN_INTREST:
            return {
                ...state,
                loanIntrest:action.data,
                requestMessgae:"",
                loading:false
            }
        case PREFILL_INPUTS:
            return{
                ...state,
                loanTenure:action.Input.tenure,
                loanAmount:action.Input.amount
            }
        case API_RESPONSE_MESSAGE:
            return{
                ...state,
                loading:false,
                loanIntrest:[],
                requestMessgae:action.message
            }
        default:
                return state

    }
 
}