import React from "react";

const RegionList = ({ data, regionChange }) => {
  return (
    <>
      <select className="custom-select"
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

export default RegionList;

