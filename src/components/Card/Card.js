import React from "react";
import CountUp from "react-countup"

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
              end={cases[type]}
              separator=" "
              start={0}
              useEasing={true}
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

export default Card;
