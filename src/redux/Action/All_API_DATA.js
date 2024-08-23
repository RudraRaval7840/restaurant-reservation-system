const link = 'https://ny-field-milk-outlined.trycloudflare.com';

(exports.LoginApi = `${link}/api/login`),
  (exports.RegisterApi = `${link}/api/register`);
exports.ForgotPassword = `${link}/api/forgot-password`;
exports.VerifyOtp = `${link}/api/verify-otp`;
exports.NewPassword = `${link}/api/reset-password`;
exports.PopularRestaurant = `${link}/api/restaurant/getPopularRestaurants`;
exports.GetAllUser = `${link}/api/user/get-user`;
exports.CreateRestaurant = `${link}/api/restaurant/createRestaurant`;
exports.Reservation = `${link}/api/reservation/getAllReservation`;
exports.ShowAllRestaurant = `${link}/api/restaurant/getAllRestaurant`;
exports.CreateTable = `${link}/api/table/create-table`;
exports.ShowProfileData = `${link}/api/user/getUserByToken`;
exports.requestResturant = `${link}/api/requestrestaurant/submitRequest`;
exports.PaddingResturantRequest = `${link}/api/requestrestaurant/viewpending`
exports.ApprovedRejected =`${link}/api/requestrestaurant/handlerequest`
exports.GetMyRestaurant = `${link}/api/requestrestaurant/getmyrestaurant`
// https://ny-field-milk-outlined.trycloudflare.com/api/requestrestaurant/getmyrestaurant