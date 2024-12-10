import React, { useState } from "react";
import LogInTable from "../modules/LogInTable";

const LogIn = (props) => {
  return (
    <div>
      <LogInTable handleLogin={props.handleLogin} />
    </div>
  );
};

export default LogIn;
