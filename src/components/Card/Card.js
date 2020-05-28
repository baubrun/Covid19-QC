import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ data, title, type }) => {
  return (
      <div className="col">
        {data.length < 1 ? (
          ""
        ) : (
          <div className="card text-center card-style">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text numbers">
                <CountUp end={data[0][type]} separator=" " start={0} />
              </p>
              <p className="card-text date">{data[0].date}</p>
            </div>
          </div>
        )}
      </div>
  );
};

Card.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
