import React from "react";
import PropTypes from "prop-types";

const RegionList = ({ data, regionChange }) => {
  
  return (
    <div className="input-group">
      <select className="custom-select mt-3" onChange={regionChange}>
        <option value="Total" defaultValue="Total">Régions</option>
        {data.slice(0,-1).map((d, idx) => (
          <option key={idx} value={d.région}>
            {d.région}
          </option>
        ))}
      </select>
    </div>
  );
};

RegionList.propTypes = {
  data: PropTypes.array,
  regionChange: PropTypes.func,
};

export default RegionList;

