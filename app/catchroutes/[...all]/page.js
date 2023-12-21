import React from "react";

const Allroutes = ({ params }) => {
  console.log(params);
  return (
    <div className="px-5">
      <h2 className="text-5xl">All Routes</h2>
      {params.all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default Allroutes;
