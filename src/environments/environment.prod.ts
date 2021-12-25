const HOSTNAME: string = "reqres.in";
const PORT_NUMBER: number=0;
const API: string = "/api/";

export const environment = {
  production: true,
  
  getListUsers: "https://" + HOSTNAME + API + "users?page=",
  getSingleUser: "https://" + HOSTNAME + API + "users/",
  postLogin: "https://" + HOSTNAME + API + "login",
  postRegister: "https://" + HOSTNAME + API + "register",
};
