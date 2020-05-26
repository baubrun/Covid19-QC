import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types"

const Card = ({ data, date, title, type, region }) => {
  const cases = data.find((d) => d.région === region);

  return (
    <>
      {!region ? (
        ""
      ) : (
        <div className="card" style={cardStyle}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-muted">
              <CountUp
                duration={1000}
                easingFn={true}
                end={cases[type]}
                separator=" "
                start={0}
              />
            </p>
            <p className="card-text">{date}</p>
          </div>
        </div>
      )}
    </>
  );
};

const cardStyle = {
  width: "18rem",
};


Card.propTypes = {
  data: PropTypes.array,
  date: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  region: PropTypes.string
}



export default Card;
