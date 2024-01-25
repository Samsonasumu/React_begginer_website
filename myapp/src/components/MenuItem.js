import React from "react";

function MenuItem({ image, name, descr }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {descr} </p>
    </div>
  );
}
  
export default MenuItem;
