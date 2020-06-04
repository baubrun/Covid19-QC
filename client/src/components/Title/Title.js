import React from "react";
import "./Title.css";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div data-test="Title">
      <h3 className="text-center ">{title}</h3>
    </div>
  );
};


Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
