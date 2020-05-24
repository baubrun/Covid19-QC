import React from "react";


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
            <p className="card-text text-muted">{cases[type]}</p>
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
