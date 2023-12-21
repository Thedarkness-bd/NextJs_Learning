import React from "react";

const User = ({ params }) => {
  console.log(params);
  return <div>Hello : {params.user}</div>;
};

export default User;
