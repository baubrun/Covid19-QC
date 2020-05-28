import React, { Component } from "react";
import { RegionListContainer } from "../RegionListContainer";
import { fetchDataApi } from "../api";
import { Card } from "../Card";
import { BarChart } from "../BarChart/";

class DataContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  fetchData = async (region) => {
    try {
      const data = await fetchDataApi(region);
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className=" container data">
        <div className="row">
          <Card
            data={this.state.data}
            title="Nombre de cas confirmés par région"
            type="confirmés"
          />
          <Card
            data={this.state.data}
            title="Nombre de décès par région"
            type="décès"
          />
        </div>

        <RegionListContainer fetchData={this.fetchData} />
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default DataContainer;
