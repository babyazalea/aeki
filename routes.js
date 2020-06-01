// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANEGE_PASSWORD = "/change-password";

// Installation

const INSTALLATION = "/installation";
const SEARCH_INSTALLATION = "/search";
const CREATE_INSTALLATION = "/create";
const INSTALLATION_DETAIL = "/:id";
const EDIT_INSTALLATION = "/:id/edit";
const DELETE_INSTALLATION = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANEGE_PASSWORD,
  installation: INSTALLATION,
  searchInstallation: SEARCH_INSTALLATION,
  createInstallation: CREATE_INSTALLATION,
  installationDetail: INSTALLATION_DETAIL,
  editInstallation: EDIT_INSTALLATION,
  deleteInstallation: DELETE_INSTALLATION,
};

export default routes;
