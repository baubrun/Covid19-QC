import React, { Component } from "react";
import axios from "axios";
import { RegionList } from "./components/RegionList";
import Loader from "react-loader-spinner";
import { Card } from "./components/Card";
import BarChart from "./components/BarChart/BarChart";
import "./App.css";
import { Title } from "./components/Title";
import getData from "./components/api";

// const url = "http://localhost:5000/covid19qc/api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      date: "",
      loading: false,
      region: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData = async () => {
    this.setState({ loading: true });

    try {
      const body = await getData();
        this.setState({ data: body });
        this.setState({ date: body[0].date });
        this.setState({ region: body.slice(-1)[0].région });
        this.setState({ loading: false });
    setTimeout(() => {
      this.setState({ loading: false });
      }, 800);
    } catch (error) {
      console.log(error);
    }
  };


  regionChange = (event) => {
    const region = event.target.value
    this.setState({ region });
  };


  showData = () => {
    const { data, date, region } = this.state;
      const cases = data.find((d) => d.région === region);

    return (
      <div className="data">
        <div className="row">
          <div className="col">
            <Card
              data={cases}
              date={date}
              region={region}
              title="Nombre de cas confirmés par région"
              type="confirmés"
            />
          </div>
          {
            <div className="col">
              <Card
                data={cases}
                date={date}
                region={region}
                title="Nombre de décès par région"
                type="décès"
              />
            </div>
          }
        </div>
        <RegionList data={data} regionChange={this.regionChange} />
        <BarChart data={cases} region={region} />
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
