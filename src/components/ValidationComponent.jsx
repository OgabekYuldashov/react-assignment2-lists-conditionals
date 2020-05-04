import React from "react";

const ValidationComponent = (props) => {
  const outputMessage = () => {
    let message = <div>Text is long enough</div>;

    if (props.userInputLength <= 5) {
      message = <div>Text is too short</div>;
    }
    return message;
  };

  return <p>{outputMessage()}</p>;
};

export default ValidationComponent;
