import React from "react";

const Test = (props) => {

  return (
    <div {...props}>
      Test components {props.message}
    </div>
  );
}

export default Test;