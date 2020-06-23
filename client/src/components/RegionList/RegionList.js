import React from "react";
import PropTypes from "prop-types";
import "./RegionList.css";


const RegionList = ({ regions, regionChange, loading }) => {
  return (
    <>
      {!loading && (
        <div id="list" 
        className="input-group">
          <select className="custom-select mt-3" onChange={regionChange}>
            <option value="Total">
              Régions
            </option>
            {regions.map((region, idx) => (
              <option key={idx} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

RegionList.propTypes = {
  regionChange: PropTypes.func,
  regions: PropTypes.array,
  loading: PropTypes.bool
};

export default RegionList;
