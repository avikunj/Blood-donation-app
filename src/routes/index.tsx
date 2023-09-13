import LoginScreen from '../../src/screens/login';
import RegisterScreen from '../../src/screens/register';
import ResetPasswordScreen from '../../src/screens/resetPassword';
import SearchResultScreen from '../../src/screens/searchResults';
import SearchScreen from '../../src/screens/search';
import SettingScreen from '../../src/screens/settings';
import ProfileScreen from '../../src/screens/profile';
import ContactScreen from '../../src/screens/contactUs';
import SplashScreen from '../../src/screens/splashScreen';
import AddUpdateRequest from '../../src/screens/addUpdateRequest';
import AddUpdateEvent from '../../src/screens/addUpdateEvent';
import RequestListScreen from '../../src/screens/requestList';
import BloodBanksList from '../../src/screens/bloodBanksList';
import AllEvents from '../../src/screens/eventsList';
import Myrequests from '../../src/screens/myRequests';
import EditProfileScreen from '../../src/screens/editProfile';
import {routes} from '../utils/enums';

let {
  LOGIN,
  REGISTER,
  RESET_PWD,
  REQUEST_DETAIL,
  CONTACT,
  SEARCH,
  SEARCH_RESULTS,
  SETTINGS,
  PROFILE,
  EDIT_PROFILE,
  EVENT_DETAILS,
  MY_EVENTS,
  MY_REQUESTS,
  GET_EVENTS,
  PUT_EVENT,
  PUT_REQUEST,
  SPLASH,
  BLOOD_BANKS,
  BLOOD_BANK_DETAIL,
  GET_REQUESTS,
} = routes;

export const routesList = [
  {
    route: LOGIN,
    component: LoginScreen,
    isPrivate: false,
  },
  {
    route: REGISTER,
    component: RegisterScreen,
    isPrivate: false,
  },
  {
    route: RESET_PWD,
    component: ResetPasswordScreen,
    isPrivate: false,
  },
  {
    route: SEARCH_RESULTS,
    component: SearchResultScreen,
    isPrivate: true,
  },
  {
    route: SEARCH,
    component: SearchScreen,
    isPrivate: true,
  },
  {
    route: SETTINGS,
    component: SettingScreen,
    isPrivate: true,
  },
  {
    route: PROFILE,
    component: ProfileScreen,
    isPrivate: true,
  },
  {
    route: EDIT_PROFILE,
    component: EditProfileScreen,
    isPrivate: true,
  },
  {
    route: CONTACT,
    component: ContactScreen,
    isPrivate: true,
  },
  {
    route: SPLASH,
    component: SplashScreen,
    isPrivate: false,
  },
  {
    route: PUT_REQUEST,
    component: AddUpdateRequest,
    isPrivate: true,
  },
  {
    route: GET_REQUESTS,
    component: RequestListScreen,
    isPrivate: true,
  },
  {
    route: MY_REQUESTS,
    component: Myrequests,
    isPrivate: true,
  },
  {
    route: REQUEST_DETAIL,
    component: RequestListScreen,
    isPrivate: true,
  },
  {
    route: BLOOD_BANKS,
    component: BloodBanksList,
    isPrivate: true,
  },
  {
    route: BLOOD_BANK_DETAIL,
    component: BloodBanksList,
    isPrivate: true,
  },
  {
    route: PUT_EVENT,
    component: AddUpdateEvent,
    isPrivate: true,
  },
  {
    route: GET_EVENTS,
    component: AllEvents,
    isPrivate: true,
  },
  {
    route: MY_EVENTS,
    component: AllEvents,
    isPrivate: true,
  },
  {
    route: EVENT_DETAILS,
    component: AllEvents,
    isPrivate: true,
  },
];
