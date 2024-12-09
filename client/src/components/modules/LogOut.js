import React from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../utilities";

const LogOut = (props) => {
  return props.handleLogout();
};

export default LogOut;
