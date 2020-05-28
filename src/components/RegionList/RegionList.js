import React from "react";
import PropTypes from "prop-types";
import "./RegionList.css";


const RegionList = ({ data, regionChange, loading }) => {
  return (
    <>
      {!loading && (
        <div id="list" 
        className="input-group">
          <select className="custom-select mt-3" onChange={regionChange}>
            <option value="">
              Régions
            </option>
            {data.map((d, idx) => (
              <option key={idx} value={d.région}>
                {d.région}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

RegionList.propTypes = {
  data: PropTypes.array,
  regionChange: PropTypes.func,
};

export default RegionList;
