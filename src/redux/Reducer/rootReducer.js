import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import VerifyOtpReducer from './VerifyOtpReducer';
import PopularRestaurantReducer from './PopularRestaurantReducer';
import GetAllUserReducer from './GetAllUserReducer';
import CreateRestaurantReducer from './CreateRestaurantReducer';
import AllRestaurentReducer from './GetAllRestaurentReducer';
import DeleteRestaurantReducer from './DeleteRestaurantReducer';
import AllReservationReducer from './AllReservationReducer';
import CreateTableReducer from './CreateTableReducer';
import DeleteuserReducer from './DeleteuserReducer';
import ShowProfileReducer from './ShowProfileDataReducer';
import AddRequestRestaurantReducer from './AddRequestRestaurantReducer';
import GetAllPadingRequestReducer from './GetAllPadingRequestReducer';
import ApprovedRejectReducer from './AprovedRejectReducer';
import GetMyRestaurantReducer from './GetMyRestaurantReducer';

const rooteReducer = combineReducers({
  login: LoginReducer,
  Register: RegisterReducer,
  VerifyOtp: VerifyOtpReducer,
  PopularRestaurant: PopularRestaurantReducer,
  GetAllser: GetAllUserReducer,
  CreateRestaureant: CreateRestaurantReducer,
  AllRestaurentReducer: AllRestaurentReducer,
  DeleteRestaurant: DeleteRestaurantReducer,
  reservation: AllReservationReducer,
  CreateTable: CreateTableReducer,
  DeleteUser: DeleteuserReducer,
  ShowProfile: ShowProfileReducer,
  requestResturant: AddRequestRestaurantReducer,
  pandingRequest: GetAllPadingRequestReducer,
  ApprovedReject: ApprovedRejectReducer,
  getMyRestaurant: GetMyRestaurantReducer,
});

export default rooteReducer;
