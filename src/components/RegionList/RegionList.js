import React from "react";
import PropTypes from "prop-types"

const RegionList = ({ data, regionChange }) => {
  return (
    <>
      <select className="custom-select m-3 w-30"
      onChange={regionChange}
      >
        <option value="Total">Régions</option>
        {data.slice(0,-1).map((d, idx) => (
          <option key={idx} value={d.région}>
            {d.région}
          </option>
        ))}
      </select>
    </>
  );
};


RegionList.propTypes = {
  data: PropTypes.string,
  regionChange: PropTypes.func
}


export default RegionList;

