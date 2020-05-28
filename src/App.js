import React, { Component } from "react";
import { RegionList } from "./components/RegionList";
import Loader from "react-loader-spinner";
import { Card } from "./components/Card";
import BarChart from "./components/BarChart/BarChart";
import "./App.css";
import { Title } from "./components/Title";
import { getData, getRegionData } from "./components/api";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      date: "",
      loading: false,
      region: "Total",
      currentData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
    });

    try {
      const body = await getData();
      this.setState({
        data: body,
      });
      setTimeout(() => {
        this.setState({ loading: false });
        }, 900);
    } catch (error) {
      console.log(error);
    }
  };

  fetchRegionData = async (region) => {
    try {
      const body = await getRegionData(region);
      this.setState({
        currentData: body,
      });
  
    } catch (error) {
      console.log(error);
    }
  };

  regionChange = (event) => {
    const region = event.target.value;
    this.setState({
      region,
    });
    this.fetchRegionData(region);
  };


  showData = () => {
    const { data, currentData } = this.state;

    return (
      <div className=" container data">
        <div className="row">
          <div className="col">
            <Card
              data={currentData}
              title="Nombre de cas confirmés par région"
              type="confirmés"
            />
          </div>
          {
            <div className="col">
              <Card
                data={currentData}
                title="Nombre de décès par région"
                type="décès"
              />
            </div>
          }
        </div>
        <RegionList data={data} regionChange={this.regionChange} />
        <BarChart data={currentData} />
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <Title title="Situation du Coronavirus (COVID-19) au Québec" />
        {this.state.loading ? (
          <div id="loader">
            <Loader color="white" height={200} type="Puff" width={200} />
          </div>
        ) : (
          this.showData()
        )}
      </div>
    );
  }
}
export default App;
