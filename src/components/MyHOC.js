import React from "react";

function MyHOC(Component, props) {
  return (
    <div className="wrapper">
      <Component {...props} />
    </div>
  );
}

export default MyHOC;
