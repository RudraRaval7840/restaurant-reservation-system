import  {combineReducers}  from "redux"
import LoginReducer from "./LoginReducer"
import RegisterReducer from "./RegisterReducer"
import VerifyOtpReducer from "./VerifyOtpReducer"


const rooteReducer = combineReducers({
    login:LoginReducer,
    Register:RegisterReducer,
    VerifyOtp:VerifyOtpReducer
})

export default rooteReducer