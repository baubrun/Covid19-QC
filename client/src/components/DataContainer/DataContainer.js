import React, { Component } from "react";
import { RegionListContainer } from "../RegionListContainer";
import { fetchDataApi, fetchDate } from "../api";
import { Card } from "../Card";
import { BarChart } from "../BarChart";

class DataContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      date: "",
    };
  }

  componentDidMount() {
    this.fetchDate();
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

  fetchDate = async () => {
    try {
      const date = await fetchDate();
      this.setState({
        date
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
            date={this.state.date}
            data={this.state.data}
            title="Nombre de cas confirmés par région"
            type="confirmes"
            region={this.state.data}
          />
          <Card
            date={this.state.date}
            data={this.state.data}
            title="Nombre de décès par région"
            type="deces"
          />
        </div>

        <RegionListContainer fetchData={this.fetchData} />
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default DataContainer;
