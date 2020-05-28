import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css"


const Spinner = () => {
  return (
    <div className="Spinner">
      <Loader color="white" height={200} type="Puff" width={200} />
    </div>
  );
};

export default Spinner;
