import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ data, title, type}) => {
  // let type = type
  // console.log(data);
  // if (data.length < 1) return "null"
  // if (data.length < 1) {type = "Total"}

  return (

    
    <>
    {data.length < 1? "" : (

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

    </>
  );
};

Card.propTypes = {
  data: PropTypes.array,
  date: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  region: PropTypes.string,
};

export default Card;
